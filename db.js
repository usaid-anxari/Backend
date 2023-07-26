const mongoose = require('mongoose');
const mongoURI = "mongodb+srv://codebyusaid:090078601@ibook.lb334ct.mongodb.net/"

const connectToMongo = async () => {
try {
    mongoose.set('strictQuery', false)
    mongoose.connect(mongoURI) 
    console.log('Connected to mongo')
}
catch(error) {
    console.log(error)
    process.exit()
}
}
module.exports = connectToMongo;