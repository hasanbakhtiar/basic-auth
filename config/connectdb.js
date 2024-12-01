const mongoose = require('mongoose');
require('dotenv').config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
const database = process.env.DB_DATABASE;

const connectdb = async()=>{
    try {
        await mongoose.connect(`mongodb+srv://${username}:${password}@cluster.puxjg.mongodb.net/${database}`);
        console.log("mongodb connect is successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectdb;