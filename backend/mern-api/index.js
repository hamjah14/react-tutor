const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express() 

const postRoutes = require('./src/routes/postRoute')

// Enable CORS for all routes
app.use(bodyParser.json())
app.use(cors());
app.use('/', postRoutes)

app.listen(4000)
