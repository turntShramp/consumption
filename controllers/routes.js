const express = require("express");
const router = express.Router();
const thing = require("../models/thing.js");

// Routes
router.get("/", (req, res) => {
    thing.all(data => {
        let hbsObject = {
            things: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/api/things", (req, res) => {
    thing.create([
        "thing_name", "digested"
    ], [
        req.body.name, false
    ], result => {
        res.json({
            id: result.insertId
        });
    });
});

router.put("/api/things/:id", (req, res) => {
    let condition = "id = " + req.params.id;
    console.log("condition", condition);
    thing.update({
        digested: req.body.digested
    }, condition, result => {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

router.delete("/api/things/:id", (req, res) => {
    let condition = "id = " + req.params.id;

    thing.delete(condition, result => {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;