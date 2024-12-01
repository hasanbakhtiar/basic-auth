const express = require('express');
const connectdb = require('./config/connectdb');
const cors = require('cors');
const app = express();


// middleware start
app.use(cors());
app.use(express.json());
// middleware end

const userRouter = require('./routers/user');
const weatherRouter = require('./routers/weather');

app.use('/',userRouter);
app.use('/weather',weatherRouter);




connectdb();
app.listen(3000, () => {
    console.log('3000 port is running');
})