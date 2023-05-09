const express = require('express');
const path = require('path')

const app = express();

app.use(express.static('public'));

const home = (req, res) => res.sendFile(path.join(__dirname, './views/home.html'));
const register = (req, res) => res.sendFile(path.join(__dirname, './views/register.html'));
const login = (req, res) => res.sendFile(path.join(__dirname, './views/login.html'));

app.get('/', home)
app.get('/register', register)
app.get('/login', login)

const port = process.env.PORT || 3001;
app.listen(port, ()=> console.log(`Servidor corriendo en el puerto ${port}`));

/* const port = 3000;
app.listen(port, () => console.log(`Servidor corriendo en el puerto ${port}`)); */

