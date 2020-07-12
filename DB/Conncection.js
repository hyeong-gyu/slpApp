const mongoose = require('mongoose');

const URI = "mongodb+srv://slp-admin:slp-admin@slp-bdw6q.gcp.mongodb.net/test?retryWrites=true&w=majority";

const connectDB = async () => {
    await mongoose.connect(URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });
    console.log('db connected..!');
};

module.exports = connectDB;