const { Model, DataTypes, Deferrable } = require("sequelize");

class Transactions extends Model {}

Transactions.getInitProps = () => {
  return {
    componentCntBet: DataTypes.INTEGER,
    selection: DataTypes.STRING,
    isInplay: DataTypes.BOOLEAN,
    isActive: DataTypes.VIRTUAL,
    isCashout: DataTypes.VIRTUAL,
    currency: DataTypes.STRING,
    bookRiskComponent: DataTypes.DECIMAL(10, 2),
    bookProfitGrossComponent: DataTypes.DECIMAL(10, 2),
    country: DataTypes.STRING,
    state: DataTypes.VIRTUAL,
    acceptedDatetimeUtc: DataTypes.DATE,
    componentPrice: DataTypes.DECIMAL(10, 2),
    componentProb: DataTypes.DECIMAL(10, 2),
    betTypeId: DataTypes.INTEGER,
    betType: DataTypes.STRING,
    bookRisk: DataTypes.DECIMAL(10, 2),
    betPrice: DataTypes.DECIMAL(10, 2),
    betProb: DataTypes.DECIMAL(10, 2),
    stateId: DataTypes.VIRTUAL,
    sport: DataTypes.STRING,
    season: DataTypes.INTEGER,
    date: DataTypes.STRING,
    datetimeUtc: DataTypes.DATE,
    eventId: DataTypes.INTEGER,
    statTypeId: DataTypes.INTEGER,
    statType: DataTypes.STRING,
    teamAbbr: DataTypes.STRING,
    oppAbbr: DataTypes.STRING,
    home: DataTypes.BOOLEAN,
    playerId: DataTypes.INTEGER,
    playerName: DataTypes.STRING,
    posAbbr: DataTypes.STRING,
    gamePlayed: DataTypes.INTEGER,
    gameStarted: DataTypes.INTEGER,
    acceptedMinBeforeStart: DataTypes.DECIMAL(10, 2),
    settledDate: DataTypes.STRING,
    lineAtBet: DataTypes.DECIMAL(10, 2),
    probNormAtBet: DataTypes.DECIMAL(10, 2),
    projAtBet: DataTypes.DECIMAL(10, 2),
    marketSuspendedId: DataTypes.DECIMAL(10, 2),
    gamestate: DataTypes.STRING,
    period: DataTypes.DECIMAL(10, 2),
  };
};

Transactions.getName = () => {
  return "transactions";
};

module.exports = {
  Transactions,
};
