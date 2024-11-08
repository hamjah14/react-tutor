const express = require('express')
const app = express() 

const postRoutes = require('./src/routes/postRoute')
 
app.use('/', postRoutes)

app.listen(4000)
