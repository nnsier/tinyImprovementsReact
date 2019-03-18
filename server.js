const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
var PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, './public')));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/kudos', { useNewUrlParser: true });

require('./routes/api-routes.js')(app);

app.listen(PORT, function(){
  console.log(`App now listening on PORT ${PORT}.`);
;})