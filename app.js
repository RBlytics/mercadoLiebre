const express = require('express');
const path = require('path')

const app = express();

app.use(express.static('public'));

const port = 3000;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`) );

const home = (req, res) => res.sendFile(path.join(__dirname, './views/home.html'));
const register = (req, res) => res.sendFile(path.join(__dirname, './views/register.html'));

app.get('/', home)
app.get('/register', register)