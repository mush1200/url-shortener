const Url = require('../url') // 載入 url model
const db = require('../../config/mongoose')


const data = [
  {
    originalUrl: 'https://www.google.com',
    shortUrl: 'http://localhost:3000/6y7UP',
    randomUrl: '6y7UP'
  }
]

db.once('open', () => {
  console.log('mongodb connected!')
  Url.create(data)
    .then(() => console.log('Success to set the Seeder!'))
    .catch(err => console.error(err))
})