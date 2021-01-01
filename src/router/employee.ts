var express = require("express");
const employees = require('../server/db.json')
var router = express.Router();

router.get("/", function (req, res, next) {
    res.json(employees);
});

router.delete('/:id', function (req, res) {
    console.log("Delete")
    let found = employees.find(function (item) {
        return item.id === parseInt(req.params.id);
    });
    if (found) {
        let Index = employees.indexOf(found);
        employees.splice(Index, 1);
    }
    res.sendStatus(204);
});

router.post('/', function (req, res) {
    let newEmployee = {
        id: req.body.id,
        team_id: req.body.team_id,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        email: req.body.email,
        password: req.body.password
    };
    employees.push(newEmployee);

    res.status(201).json(newEmployee);
});

router.put('/:id', function (req, res) {
    let found = employees.find(function (item) {
        return item.id === parseInt(req.params.id);
    });

    if (found) {
        let updated = {
            id: req.body.id,
            team_id: req.body.team_id,
            first_name: req.body.first_name,
            last_name: req.body.last_name,
            email: req.body.email,
            password: req.body.password
        };
        let targetIndex = employees.indexOf(found);
        employees.splice(targetIndex, 1, updated);

        res.sendStatus(204);
    } else {
        res.sendStatus(404);
    }
});
module.exports = router;