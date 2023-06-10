import dotenv from "dotenv"; // to use enviroment variables
import express from "express";
import mongoose from "mongoose";
import sequelize from './utils/postgresql.config';
import { authMiddleware } from './middlewares';

dotenv.config();
// Enviroment variables
const PORT =  process.env.PORT;
const MONGODB_CONNECTION =  process.env.MONGODB_CONNECTION;

const app = express();

import { Login, Account, User } from "./routes";


app.use(express.json());
app.use("/", Account);
app.use("/", User);
app.use("/", Login);
app.use(authMiddleware.isAuth);


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
        if (MONGODB_CONNECTION){ 
            await mongoose.connect( MONGODB_CONNECTION , {
                //useNewUrlParser: true,
                //useUnifiedTopology: true,
            });
            console.log('Connection has been established successfully to Cluster of MongoDB Atlas.');
        }
    } catch(error){
        console.error('Unable to connect to the database:', error);
    };

    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully to postgreSQL database.');

    } catch (error) {
        
    }
}

startApp();


