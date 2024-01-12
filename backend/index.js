const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const { PORT } = require("./modules/constants");
const { controllerRouter } = require("./controller");

const { initDatabaseConnection } = require("./database");

const { runTransactionRead } = require("./modules/service/TransactionReadService");

app.use(bodyParser.json());

app.use(cors());

app.use(controllerRouter);

app.listen(PORT, () => {
  try {
    console.log(`Server started on port ${PORT}`);
    // initDatabaseConnection(() => {});
    runTransactionRead();
  } catch (err) {
    console.log("Server encountered error: ", err);
  }
});
