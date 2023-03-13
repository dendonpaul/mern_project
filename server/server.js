const express = require("express");
const app = express();
const cors = require("cors");
// require("dotenv").config({ path: "./config.env" });
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 5001;
const Router = require("./routes/RecordsRouter");
const dbo = require("./db/Connection");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Router);

// app.use(require("./routes/record"));

if (dbo) {
  console.log("DB Connected");
}
app.listen(PORT, () => {
  //   dbo.connectToServer(function (err) {
  //     if (err) console.error(err);
  //   });
  console.log(`Server is running in port no:${PORT}`);
});
