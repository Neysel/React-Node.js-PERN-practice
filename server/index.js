require('dotenv').config()
// dont forget about pgAdmin 
// npm run dev
// http://localhost:5000/ 
// you can watch everything in packapge.json

const express = require('express')
const sequelize = require('./db')
const models = require('./models/models') // postgrSQL
const cors = require('cors')
const fileUpload = require('express-fileupload')
const router = require('./routes/index')
const errorHandler = require('./middleware/ErrorHandlingMiddleWare')
const path = require('path')

const PORT = process.env.PORT || 5000

const app = express()  // express work, its not a library its rather a framework because it provides a complete structure for building web applications.

/// cors work : 
app.use(cors())
app.use(express.json())
app.use(express.static(path.resolve(__dirname, 'static')))
// this is for http://localhost:5000/e995d34b-dd20-4757-a5d1-d25e0cbbfdb9.jpg


app.use(fileUpload({}))
app.use('/api', router) 
// then route to index.js indede routes folder
app.use(errorHandler)


/////////////////////////////// to test work
// app.get('/', (request, response) => {
//     response.status(200).json({message: 'WORKIING!!'})
// })
/////////////////////////////// 

const start = async() => 
{
    try {
       await sequelize.authenticate()
       await sequelize.sync()
       app.listen(PORT, () => console.log(`Server started on port ${PORT}`))

    } catch (e) {

    }
} 
// all databases work asynchronyosly





start()




















// npm install express pg pg-hstore sequelize cors dotenv 
// npm install -D nodemon (reboots server automatically)