const express = require('express');
const app = express();
const cors = require('cors');
require("dotenv").config();
app.use(express.json());
app.use(cors())


const { connection } = require('./config/db');
const {userRouter}=require('./routes/user.route')

app.get('/', (req, res) => {
    res.send('Welcome To Quiz App!');
});
app.use('/api',userRouter)

const PORT = process.env.port
app.listen(PORT, async () => {
    try {
        await connection;
        console.log(`Server listening on port ${PORT}`);
    } catch (error) {
        console.log(error);
        console.log('No connection');
    }
})
