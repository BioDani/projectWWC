require('dotenv').config();
const express = require('express');
const { mongoose } = require("mongoose");
const app = express();

PORT = process.env.PORT;
MONGODB_CONNECTION = process.env.MONGODB_CONNECTION;

app.use(express.json());

startApp = async () => {
    try {
        await app.listen(PORT, () => {
            console.log(`App running in http://localhost:${PORT}`);
        });
    } catch (error) {
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
};

startApp();
