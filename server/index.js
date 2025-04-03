const express = require('express')
const app = express()
const dotenv = require('dotenv')
const bodyParser = require('body-parser')
dotenv.config()
const port = process.env.PORT || 5300
const cors = require('cors')
app.use(express.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(cors())

let countries = {
    one: 'Nigeria',
    two: 'United states',
    three: 'Canada',
    four: 'Korea',
    five: 'Germany',
    six: 'India'
}

app.get('/test', (req,res)=>{
    res.send(countries)
})

app.listen(port,()=>{
    console.log(`server started at port: ${port}`);
    
})

