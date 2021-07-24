# 短網址產生器 URL Shortener
用Express和MongoDB建立的短網址產生器。

## 專案功能
* 在欄位輸入原始網址，送出表單後，會檢測是否為符合URL格式網址，成功即可產生短網址
* 使用者可以按下短網址連結，瀏覽器會導向原本網站

## 環境建置
* Node.js: 6.4.1
* express: ^4.17.1
* express-handlebars: ^5.3.2
* valid-url: ^1.0.9

## 安裝流程
1. 在終端機輸入指令 clone 此專案至本機電腦
```
git clone https://github.com/mush1200/Middleware.git
 ```
2. 進入專案資料夾
```
cd url-shortener
```
3. 安裝相關套件
```
npm install
```
4. 安裝 nodemon 套件 (若未安裝)
```
npm install -g nodemon
```
5. 啟動專案
```
npm run dev
```
6. 出現以下訊息後，即可在 http://localhost:3000 開始使用
<br>
App is running on http://localhost:3000.