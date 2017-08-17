const express = require('express');
const path = require('path');
//init app
const app = new express();
//view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine','pug');

//app route
let index = require('./routes/index');
app.use("/",index);
//app engine
//app config
app.listen(3000);

