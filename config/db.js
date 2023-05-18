const mongoose = require('mongoose');

const connectDB = async () =>{
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI, {
            useCreateIndex: true,
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log(
          `MongoDB connected with ${connect.connection.host}`.yellow.bold
        );

    }catch(err){
        console.error(`Error: ${err.message}`.red.bold.underline);
        process.exit(1)
    }
}

module.exports = connectDB;
