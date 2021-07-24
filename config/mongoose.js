const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/urlShortenerData'
//載入Mongoose
const mongoose = require('mongoose')
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection  //取得資料庫連線狀態

//連線異常
db.on('error', () => {
  console.log('mongodb error!')
})
//連線成功
db.once('open', () => {
  console.log('mongodb connected!')
})

module.exports = db