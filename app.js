const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const Url = require('./models/url')
const baseUrl = 'http://localhost:3000/'
//載入驗證有效URL model
const validUrl = require('valid-url')
const filterShortUrl = require('./models/shortenUrl')
//載入mongoose model
require('./config/mongoose')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')
app.use(express.urlencoded({ extended: true }))
app.use(express.static('public'))
app.get('/', (req, res) => {
  res.render('index')
})
app.post('/', (req, res) => {
  const inputUrl = req.body.inputUrl.trim()
  console.log(inputUrl)
  if (!validUrl.isUri(inputUrl)) {
    const errorMsg = 'Invalid URL! Please input valid URL.'
    res.render('index', { errorMsg, inputUrl})
  }
  if (validUrl.isUri(inputUrl)) {
    const randomUrl = filterShortUrl()
    const originalUrl = inputUrl
    const shortUrl = baseUrl + randomUrl

    Url.create({
      originalUrl: originalUrl,
      shortUrl: shortUrl,
      randomUrl: randomUrl
    })
      .then(() => {
        res.render('success', { randomUrl, shortUrl })
      })
      .catch((error) => console.log(error))
  }
})

//使用新網址可以去原網址網站
app.get('/:id', (req, res) => {
  const shortUrl = baseUrl + req.params.id
  const randomUrl = req.params.id
  Url.find({ randomUrl: randomUrl })
    .lean()
    .then((urlResult) => {
      if (urlResult.length === 1) {
        res.redirect(urlResult[0].originalUrl)
      } else {
        res.redirect('/')
      }
    })
    .catch((error) => console.error(error))
})

app.listen(port, () => {
  console.log(`App is running on port ${port}.`)
})