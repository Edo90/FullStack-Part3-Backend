const express = require('express')
const app = express()

const baseUrl = '/api'

app.get(`${baseUrl}/persons`,(request,response) =>{
    response.send("<h1>hello world im working</h1>")
})

const port = 3001;
app.listen(port,() =>{
    console.log(`this is running on port ${port}`)
})