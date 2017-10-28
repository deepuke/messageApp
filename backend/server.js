var express = require('express');
var app = express();
var cors = require('cors')
var bodyParser = require('body-parser');

var messages = [
    {
        text: "some messages",
        owner: 'Joe'
    },
    {
        text: "other messages",
        owner: "Paul"
    },
    {
        text: "Awesome messages",
        owner: "Deepu"
    }
];

var users = [];

app.use(bodyParser.json());

app.use(cors());

var api = express.Router();
var auth = express.Router();

api.get('/messages', (req, res) => {
    res.json(messages);
});

api.get('/messages/:user', (req, res) => {
	var user  = req.params.user;
	var result = messages.filter(message => message.owner == user);
    res.json(result);
});

api.post('/messages', (req, res) => {
    messages.push(req.body);
    res.json(req.body);
});

auth.post('/register', (req, res) => {
	console.log(req.body);
	users.push(req.body);
    res.json(messages);
});

app.use('/api', api);
app.use('/auth', auth);

app.listen(63145);

