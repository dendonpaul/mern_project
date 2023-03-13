const mongoose = require("mongoose");
const RecordModel = require("../models/RecordModel");

//List All Records
const AllRecords = async (req, res) => {
  const allRecords = await RecordModel.find({});
  if (allRecords) {
    return res
      .status(200)
      .json({ message: "All records listed", data: allRecords });
  }
};

//View single record

//Add Records
const AddRecord = async (req, res) => {
  const saveRecord = new RecordModel(req.body);
  console.log(req.body);
  //check if uid exists
  const uid = await RecordModel.findOne({ employeeuid: req.body.employeeuid });
  if (uid)
    return res.status(301).json({
      message: "EmployeeUid already exists. Try with another",
    });
  await saveRecord
    .save()
    .then((data) =>
      res.status(200).json({ message: "Record Created.", data: data })
    );
};

module.exports = { AllRecords, AddRecord };
