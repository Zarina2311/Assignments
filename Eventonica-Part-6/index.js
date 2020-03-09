const express = require("express");
const bodyParser = require("body-parser");
const { EventRecommender } = require("./events");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE");
  next();
});

const port = 3000;

const eventRec = new EventRecommender();

// events
app.get("/events", (req, res) => {
  eventRec.getAllEvents().then(events => {
    res.status(200).send(events);
  });
});

app.post("/events", (req, res) => {
  const { name, date, category } = req.body;
  eventRec.addEvent(name, date, category).then(() => {
    res.status(200).send("Event added successfully");
  });
});

app.get("/events/:id", (req, res) => {
  let id = req.params.id;
  eventRec.getEventById(id).then(event => {
    res.status(200).send(event);
  });
});

app.delete("/events/:id", (req, res) => {
  let id = req.params.id;
  eventRec.deleteEvent(id).then(() => {
    res.status(200).send("Event deleted successfully");
  });
});

// users
app.get("/users", (req, res) => {
  eventRec.getAllUsers().then(users => {
    res.status(200).send(users);
  });
});

app.get("/users/:id", (req, res) => {
  let id = req.params.id;
  eventRec.getUserById(id).then(user => {
    res.status(200).send(user);
  });
});

app.post("/users", (req, res) => {
  const name = req.body.name;
  eventRec.addUser(name).then(() => {
    res.status(200).send("User added successfully");
  });
});

app.delete("/users/:id", (req, res) => {
  let id = req.params.id;
  eventRec.deleteUser(id).then(() => {
    res.status(200).send("Event deleted successfully");
  });
});

//find events by date
app.get("/events/date/:date", (req, res) => {
  let date = req.params.date;
  eventRec.findEventsByDate(date).then(events => {
    res.status(200).send(events);
  });
});

//find events by category
app.get("/events/category/:category", (req, res) => {
  let category = req.params.category;
  eventRec.findEventsByCategory(category).then(events => {
    res.status(200).send(events);
  });
});

//save event for user
app.post("/user/events", (req, res) => {
  const { userId, eventId } = req.body;
  eventRec.saveUserEvent(userId, eventId).then(() => {
    res.status(200).send("Saved");
  });
});

app.get("/", (req, res) => res.status(200).send("Hello People!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
