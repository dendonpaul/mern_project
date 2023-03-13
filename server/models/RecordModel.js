const mongoose = require("mongoose");

const RecordSchema = new mongoose.Schema({
  name: String,
  employeeuid: String,
  position: String, //web developer, full stack developer, it support, accounting, hr
  level: String, //intern, junior,senior
});

const RecordModel = mongoose.model("employees", RecordSchema);

module.exports = RecordModel;
