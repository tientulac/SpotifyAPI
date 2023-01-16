const config = require('./configs/_' + process.env.NODE_ENV_LOCAL);
const mongoose = require('mongoose');
const db = config.mongoURI;

module.exports = { connectDB };
async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://tientulac:tienhdtl123@cluster0.aqqajgy.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log(`Connect Database successfully !!!`);
    } catch (err) {
        console.log(err);
    }
}
