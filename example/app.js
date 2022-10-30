const express = require('express')
const { motivation, motivationErrorHandler } = require('../lib/index') // require('express-motivation')

const app = express()

app.use(motivation)
app.get('/', function (req, res) {
    res.send('🍆 Hello there!')
})
app.get('/error', function (req, res, next) {
    next(new Error("Big Error!"))
})
app.use(motivationErrorHandler)

app.listen(3000, () => {
    console.log('🚀 Motivation app listening on port 3000')
})