//Pair programming activity - Mini REST API exercise: Robyn and Zarina

const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + `/index.html`)});

let list = [
    {name: "staff", member: "michelle@techtonica.org"},
    {name: "staff", member: "talea@techtonica.org"},
    {name: "apprentice", member: "robyn@techtonica.org"},
    {name: "apprentice", member: "zarina@techtonica.org"},
    {name: "apprentice", member: "ariel@techtonica.org"},
    {name: "apprentice", member: "zhag@techtonica.org"}
];

app.route("/list").get((req, res) => {
    res.status(200).send(list);
});

app.route("/list/:id")
    .get((req, res) => {
        let index = req.params.id;
        res.status(200).send(`${list[index]}`);
    })
    .put((req, res) => {
        let newName = req.body.name;
        let id = req.params.id;
        list[id] = newName;
        res.status(200).send(`new person is ${list[id]}`);
    })
    .post((req, res) => {
        let newName = req.body.name;
        let id = req.params.id;
        list[id] = newName;
        res.status(200).send(`new person is ${list[id]}`);
    })
    .delete((req, res) => {
        let newName = req.body.name;
        let id = req.params.id;
        list[id] = newName;
        res.status(200).send(`deleted person is ${list[id]}`);
    });

app.listen(port, () => console.log(`Server listening to ${port}`));