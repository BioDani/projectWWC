require("dotenv").config(); // to use enviroment variables
const express = require('express');
const { mongoose } = require("mongoose");
const sequelize = require('./utils/postgresql.config');
const { authMiddleware } = require('./middlewares')
const http = require('http')
const { Server } = require("socket.io")
const { io_ws } = require('./controllers/io.controller')


// Enviroment variables
const PORT =  process.env.PORT;
const MONGODB_CONNECTION =  process.env.MONGODB_CONNECTION;

const app = express();
const server = http.createServer(app);
const io = new Server(server , {
    cors: { origins: "*" }
})

const { Login ,Account, User } = require("./routes");


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
        await mongoose.connect( MONGODB_CONNECTION , {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connection has been established successfully to Cluster of MongoDB Atlas.');
    
    } catch(error){
        console.error('Unable to connect to the database:', error);
    };

    try {
        await sequelize.authenticate();
        await sequelize.sync();
        console.log('Connection has been established successfully to postgreSQL database.');

    } catch (error) {
        
    }

    try {
        io.on("Connection" , io_ws);

    } catch (error) {
        
    }

}

startApp();


