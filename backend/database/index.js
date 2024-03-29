const { Sequelize } = require("sequelize");
const { eq } = require("lodash");
const fs = require("fs");

const {
  DATABASE_NAME,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_SSL,
} = require("../modules/constants");
const { BetTransactions } = require("../modules/models/BetTransactions");

const Models = [BetTransactions];

let sqlConfigs = {
  host: DATABASE_HOST,
  port: DATABASE_PORT,
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
};

if (eq(DATABASE_SSL, "true")) {
  sqlConfigs["ssl"] = {
    ca: fs.readFileSync(__dirname + "/certs/DigiCertGlobalRootCA.crt.pem"),
  };
}

const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USER, DATABASE_PASSWORD, {
  host: DATABASE_HOST,
  dialect: "mysql",
});

const initModels = () => {
  Models.forEach((model) => {
    model.init(model.getInitProps(), { sequelize, modelName: model.getName() });
  });
};

const initDatabaseConnection = async (_callback = null) => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");

    initModels();

    await sequelize.sync();

    _callback && _callback();
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

module.exports = {
  initDatabaseConnection,
};
