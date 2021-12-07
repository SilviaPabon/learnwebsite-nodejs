const express = require('express');
//para saber si ando en win o linux
const path = require('path')

//servidor
const app = express();

//settings
app.set('port', 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs'); //motor de vista

//middlewares


//routes
app.use(require('./routes/index'));


//static files
//cualquier archivo creado aquí, accesible desde el navegador 
app.use(express.static(path.join(__dirname, 'public')))

app.listen(app.get('port'), () => {
    console.log('Server listening', app.get('port'));
});