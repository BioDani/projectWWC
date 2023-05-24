require("dotenv").config(); // to use enviroment variables
const express = require('express');
const { mongoose } = require("mongoose"); 

// Enviroment variables
const PORT =  process.env.PORT;
const MONGODB_CONNECTION =  process.env.MONGODB_CONNECTION;

const app = express();

const { Wallet } = require('./routes');


app.use(express.json());
app.use("/", Wallet);

const startApp = async () => {
    try {
        await app.listen( PORT , ()=>{
            console.log(`App running in http://localhost:${PORT}`);
        });

    } catch(error) {
        console.error(error);
        process.exit(1); 
    }

    try {
        await mongoose.connect( MONGODB_CONNECTION , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connection has been established successfully to Cluster of MongoDB Atlas.');
    
    } catch(error){
        console.error('Unable to connect to the database:', error);
    };
}

startApp();


