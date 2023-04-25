const express = require('express')

const app = express()
const secondPage = require('./secondPage.js')
const thirdPage = require('./thirdPage.js')
const fourthPage = require('./fourthPage.js')
const fifthPage = require('./fifthPage.js')
const sixthPage = require('./sixthPage.js')
const seventhPage = require('./seventhPage.js')
app.get('/',(request,response)=>{
    
    response.send("Get Router to Home Page")

})
app.use('/secondPage',secondPage)
app.use('/thirdPage',thirdPage)
app.use('/fourthPage',fourthPage)
app.use('/fifthPage',fifthPage)
app.use('/sixthPage',sixthPage)
app.use('/seventhPage',seventhPage)

app.listen(3600)