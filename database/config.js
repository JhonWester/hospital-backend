require('dotenv').config();
const mongoose = require('mongoose');

//user => mean_user
//pass => ETHWVp7tTUl1jz42
const dbConnection = async() => {
    try {
        
        await mongoose.connect(process.env.DB_CNN);
        console.log('DB online')
    } catch (error) {
        console.log(error);
        throw new Error('Error en la conexion a la BD revisar logs');
    }
};

module.exports = {
    dbConnection
}