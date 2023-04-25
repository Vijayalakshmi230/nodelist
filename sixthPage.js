const express = require('express')
const router= express.Router()

router.get('/',(request,response)=>{
    response.send("Code")
})

module.exports=router