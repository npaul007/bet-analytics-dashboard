const fs = require("fs");
const { DATA_FILE } = require("../constants");
const { BetTransactions } = require("../models/BetTransactions");

const writePath = __dirname.replace("modules/service", "static/");

const getTransactionProps = (transaction) => {
  return {
    actual: transaction.actual,
    componentCntBet: transaction.component_cnt_bet,
    selection: transaction.selection,
    isInplay: transaction.is_inplay,
    isActive: transaction.is_active,
    isCashout: transaction.is_cashout,
    currency: transaction.currency,
    bookRiskComponent: transaction.book_risk_component,
    bookProfitGrossComponent: transaction.book_profit_gross_component,
    country: transaction.country,
    state: transaction.state,
    acceptedDatetimeUtc: transaction.accepted_datetime_utc,
    componentPrice: transaction.component_price,
    componentProb: transaction.component_prob,
    betTypeId: transaction.bet_type_id,
    betType: transaction.bet_type,
    bookRisk: transaction.book_risk,
    betPrice: transaction.bet_price,
    betProb: transaction.bet_prob,
    stateId: transaction.state_id,
    sport: transaction.sport,
    season: transaction.season,
    date: transaction.date,
    datetimeUtc: transaction.datetime_utc,
    eventId: transaction.event_id,
    statTypeId: transaction.stat_type_id,
    statType: transaction.stat_type,
    teamAbbr: transaction.team_abbr,
    oppAbbr: transaction.opp_abbr,
    home: transaction.home,
    playerId: transaction.player_id,
    playerName: transaction.player_name,
    posAbbr: transaction.pos_abbr,
    gamePlayed: transaction.game_played,
    gameStarted: transaction.game_started,
    acceptedMinBeforeStart: transaction.accepted_min_before_start,
    settledDate: transaction.settled_date,
    lineAtBet: transaction.line_at_bet,
    probNormAtBet: transaction.prob_norm_at_bet,
    projAtBet: transaction.proj_at_bet,
    marketSuspendedId: transaction.market_suspended_id,
    gamestate: transaction.gamestate,
    period: transaction.period,
  };
};

const saveTransactions = (transactions) => {
  transactions.forEach(async (t) => {
    await BetTransactions.create(getTransactionProps(t));
  });
};

const runTransactionRead = async () => {
  const foundTransactions = await BetTransactions.findAll();

  if (foundTransactions.length === 0) {
    const readStream = fs.createReadStream(`${writePath}${DATA_FILE}`, {
      encoding: "utf8",
      highWaterMark: 1024,
    });

    let capturedData = "";

    readStream.on("data", (chunk) => {
      capturedData += chunk.toString();

      if (capturedData.includes("{") && capturedData.includes("}")) {
        const firstIdx = capturedData.indexOf("{");
        const lastIdx = capturedData.lastIndexOf("}");
        const tranche = capturedData.substring(firstIdx, lastIdx + 1).toString();
        const transactions = JSON.parse(`[ ${tranche} ]`);

        saveTransactions(transactions);

        capturedData = capturedData.substring(lastIdx + 2, capturedData.length);
      }
    });

    readStream.on("end", () => {
      console.log("Finished reading file");
    });

    readStream.on("error", (error) => {
      console.error(`Error reading file: ${error}`);
    });
  }
};

module.exports = {
  runTransactionRead,
};
