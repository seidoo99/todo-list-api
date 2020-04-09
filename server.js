var express = require('express');
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const port = process.env.PORT || 3000
var todoList = [{
    id: 1,
    todo: "Implement a REST API"
}];

// GET /api/todos
app.get('/api/todos', function(req, res, next) {
    res.json(todoList);
})


// GET /api/todos/:id
app.get('/api/todos/:id', function(req, res, next) {
        let id = parseInt(req.params.id);
        let foundId = todolist.find(function(item) {
            return item.id === id;
        })
        res.send(foundId)
    })
    // POST /api/todos
app.post('/api/todos', function(req, res, next) {
        let nextId = todoList.reduce((acc, element) => {
            if (element.id > acc) {
                return element.id
            }
            return acc++
        }, 0) + 1

        let toDoObj = {
            id: nextId,
            todo: req.body.todo
        }
        todoList.push(toDoObj)
        res.send(toDoObj)

    })
    // PUT /api/todos/:id
app.put('/api/todos/:id', function(req, res, next) {
        let id = parseInt(req.params.id);
        let updateId = todolist.find(todo => {
                return todo.id === id;
            })
            // let updateObj = {
            //     id: updateId,
            //     todo: req.body.todo
            // }
        var name = req.body.todo;
        // todoList.push(updateObj)
        res.send(name);
        // res.send(updateId)

    })
    // DELETE /api/todos/:id
app.delete('/api/todos/:id', function(req, res) {
    let id = parseInt(req.params.id);
    let deleteId = todolist.find(function(item) {
        return item.id === id;
    })
    res.send(deleteId)
})
app.listen(port, function() {
    console.log(`Todo List API is now listening on port ${port}...`);
})