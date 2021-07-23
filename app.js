const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const Url = require('./models/url')
//載入Mongoose
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/urlShortenerData', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection  //取得資料庫連線狀態

//連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
//連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars')

app.get('/', (req, res) => {
  res.render('index')
})

app.listen(port, () => {
  console.log(`App is running on port ${port}.`)
})