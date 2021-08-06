require('dotenv').config()
const express = require('express');
const app = express();
const connectdb = require('./config/db');

//import Route
const authRoute = require('./routes/auth');
const usersRoute = require('./routes/users');
const movieRoute = require('./routes/movies');
const listRoute = require('./routes/lists');

const PORT = process.env.PORT || 5000;

connectdb();    //call connection to mongoosedb
app.use(express.json()); //Accept json by default -- IMPORTANT -- if u want to post request

//First authentication and create Token user
app.use('/api/auth', authRoute);

//Second user manager
app.use('/api/users', usersRoute);

//Third movie manager
app.use('/api/movies', movieRoute);

//Fourth list manager
app.use('/api/lists', listRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
}) 