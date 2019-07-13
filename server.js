const express = require('express');
var cors = require('cors');
const connectDB = require('./config/db');

const app = express();

//CROS Cross Origin Resource Sharing solution 1
app.use(cors());

//CROS Cross Origin Resource Sharing solution 2
/*app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});*/

//Connect Database
connectDB();

//Models
const User = require('./models/User');
const Profile = require('./models/Profile');

app.get('/', (req, res) => res.send('API RUNNING...'));

//Init Middlware
app.use(express.json({ extended: false }));

//Define Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
