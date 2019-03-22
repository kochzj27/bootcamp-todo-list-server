// Express Framework
const express = require("express");
const app = express();

// Body Parser Library for Post Data
const bodyParser = require("body-parser");
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Static Route to Serve the React App
app.use(express.static(__dirname + "/build/"));

// Pseudo Database in Express
let nextId = 2;
const tasks = [
  { id: 1, text: 'learn to ride a bike', status: 'active' },
];

// RESTFUL ROUTES:

// GET ALL
app.get("/tasks", (request, response) => {
  response.json({
    payload: tasks,
    status: true
  })
})

// "/tasks/:id" ===     "/tasks/3"      ==  request.params.id => 3
// "/tasks/:id" ===     "/tasks/hello"  == request.params.id => 'hello'

// GET 1
app.get("/tasks/:id", (request, response) => {
  const note = tasks.find((note) => {
    console.log(note);
    console.log(request.params.id)
    if (note.id == request.params.id) {
      return note;
    } else return false;

  })
  console.log(note);
  response.json({
    status: true,
    task: note
  })
})

// CREATE 1
app.post("/tasks", (request, response) => {
  console.log(request.body)
  tasks.push({
    id: nextId++,
    text: request.body.text,
    status: 'active',
  });
  response.json({
    status: true,
    tasks: tasks
  })
})

// DELETE 1
app.delete("/tasks/:id", (request, response) => {
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id == request.params.id) {
      tasks.splice(i, 1);
      break;
    }
  }
  response.json({
    status: true,
    tasks: tasks
  })
})

// UPDATE 1
app.put("/tasks/:id", (request, response) => {
  console.log(request.body);
  console.log(request.params.id);
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id == request.params.id) {
      tasks[i] = Object.assign({}, tasks[i], request.body);
    }
  }
  response.json({
    status: true,
    tasks: tasks
  })
})


// SERVER LISTENING
app.listen(1337, () => {
  console.log("Server restarted...")
});