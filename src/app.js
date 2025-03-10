require('dotenv').config()

const express = require('express');
const morgan = require('morgan');
const aiRoutes = require('./routes/ai.routes')
const cors = require('cors')

const app = express();

app.use(morgan('dev'))
app.use(express.json());
app.use(cors({
    origin: [
        'http://localhost:5173/',
    ]
}))

app.get('/', (req, res) => {
    res.json({
        message: "Yoo Server is running well!!"
    })
})

app.use('/ai', aiRoutes);

module.exports = app;