const express = require('express');
require('dotenv').config();
const { dbConnection } =  require('./database/config');
const app = express();
const cors = require('cors')

//Cors
app.use(cors());
//Base de datos
dbConnection();
 


// Rutas
app.get('/', (req, res) => {
    res.json({
        ok: true,
        msg: 'Hola mundo'
    });
});

app.listen(process.env.PORT, () => {
    console.log('Corriendo en el puerto ' + process.env.PORT)
})