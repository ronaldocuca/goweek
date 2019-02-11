const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://goweek-ronaldo:goweek123@cluster0-shard-00-00-rzyfe.mongodb.net:27017,cluster0-shard-00-01-rzyfe.mongodb.net:27017,cluster0-shard-00-02-rzyfe.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true', 
{
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;

    return next();
});


app.use(cors());
app.use(express.json());
app.use(require('./routes'));

server.listen(3000, () => {
    console.log('Server started on port 3000');
});