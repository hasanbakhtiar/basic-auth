const mongoose = require('mongoose');

const username = "";
const password = "";
const database = ""

const connectdb = async()=>{
    try {
        await mongoose.connect(`mongodb+srv://${username}:${password}@cluster.ytdyti0.mongodb.net/${database}`);
        console.log("mongodb connect is successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectdb;