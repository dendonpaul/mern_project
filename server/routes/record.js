const express = require("express");
const { ObjectId } = require("mongodb");
const recordRoutes = express.Router();
const dbo = require("../db/conn");
const objectId = require("mongodb").ObjectId;

//listing all the records
recordRoutes.route("/record").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("records")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

//listing record by ID
recordRoutes.route("/record/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myQuery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").findOne(myQuery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//creating new record
recordRoutes.route("/record/add").post(function (req, res) {
  let db_connect = dbo.getDb();
  let myObj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect.collection("records").insertOne(myObj, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

//updating by id
recordRoutes.route("/update/:id").post(function (req, res) {
  let db_connect = dbo.getDb();
  let myQuery = { _id: ObjectId(req.params.id) };
  let newData = {
    $set: {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    },
  };
  db_connect
    .collection("records")
    .updateOne(myQuery, newData, function (err, result) {
      if (err) throw err;
      console.log("one document updated");
      res.json(result);
    });
});

//delete record
recordRoutes.route("/:id").delete((req, res) => {
  let db_connect = dbo.getDb();
  let myQuery = { _id: ObjectId(req.params.id) };
  db_connect.collection("records").deleteOne(myQuery, function (err, result) {
    if (err) throw err;
    res.json(result);
  });
});

module.exports = recordRoutes;
