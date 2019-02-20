const express = require('express');
const app = express();
var bodyParser = require('body-parser')

var todos = []

app.use(bodyParser.json())

app.get('/happy', (req, res) => {
    res.send("What makes Huy happy?");
});

app.get('/todos', (req, res) => {
    res.send(todos)
})

app.post('/todos', (req, res) => {
    var todo = req.body.todo;
    todos.push(todo);
    res.send(todos)
})

const PORT = 3003
app.listen(PORT, () => {
    console.log(`Listening to the radio on PORT ${PORT}`)
})