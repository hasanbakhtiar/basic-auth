const mongoose = require('mongoose');



const connectdb = async()=>{
    try {
        await mongoose.connect(`mongodb+srv://${username}:${password}@cluster.puxjg.mongodb.net/${database}`);
        console.log("mongodb connect is successfully");
    } catch (error) {
        console.log(error);
    }
}

module.exports = connectdb;