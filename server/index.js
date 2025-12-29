require('dotenv').config();
const express = require("express")
const bodyParser = require("body-parser");
const cors = require("cors")
const userRoutes = require('./components/userRoute')

const app = express()

app.use(bodyParser.json({limit: '20mb'}));
app.use(bodyParser.urlencoded({limit: '20mb', extended: true, parameterLimit: 10000}));

app.use(cors())
app.use(express.json())

app.use("/api", userRoutes)

const server = app.listen(process.env.PORT, () => {
    console.log(`Server started on port ${process.env.PORT}`)
})