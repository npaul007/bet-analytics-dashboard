const express = require("express");
const Router = express.Router;
const controllerRouter = new Router();
const { BetTransactions } = require("../modules/models/BetTransactions.js");

const getTransactionsRoute = async (req, res) => {
  const { statType, country } = req.query;

  const foundDates = await BetTransactions.findAll({
    where: {
      country: country,
      statType: statType,
    },
    attributes: ["period"],
    group: "period",
  });

  const periods = foundDates.map((fdObj) => fdObj?.period);
  let transactionCount = {};

  for (let i = 0; i < periods.length; i++) {
    const period = periods[i];

    const { count } = await BetTransactions.findAndCountAll({
      where: {
        country: country,
        statType: statType,
        period: period,
      },
    });

    transactionCount[period] = count;
  }

  res.status(200).json({
    data: {
      periods,
      transactionCount,
    },
  });
};

controllerRouter.get("/transactions", getTransactionsRoute);

module.exports = { controllerRouter };
