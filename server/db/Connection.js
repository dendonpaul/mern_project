const { MongoClient } = require("mongodb");
const mongoose = require("mongoose");

const Db = process.env.ATLAS_URI;

const Connection = mongoose.connect(Db, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports = Connection;

// const client = new MongoClient(Db, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// let _db;

// module.exports = {
//   connectToServer: function (callback) {
//     client.connect(function (err, db) {
//       if (db) {
//         _db = db.db("employees");
//         console.log("Successfully connected to DB");
//       }
//       return callback(err);
//     });
//   },
//   getDb: function () {
//     return _db;
//   },
// };
