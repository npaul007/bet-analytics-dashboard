const { Model, DataTypes, Deferrable } = require("sequelize");

class BetTransactions extends Model {}

BetTransactions.getInitProps = () => {
  return {
    actual: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    componentCntBet: { type: DataTypes.INTEGER, allowNull: true },
    selection: { type: DataTypes.STRING, allowNull: true },
    isInplay: { type: DataTypes.BOOLEAN, allowNull: true },
    isActive: { type: DataTypes.VIRTUAL, allowNull: true },
    isCashout: { type: DataTypes.VIRTUAL, allowNull: true },
    currency: { type: DataTypes.STRING, allowNull: true },
    bookRiskComponent: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    bookProfitGrossComponent: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    country: { type: DataTypes.STRING, allowNull: true },
    state: { type: DataTypes.VIRTUAL, allowNull: true },
    acceptedDatetimeUtc: { type: DataTypes.DATE, allowNull: true },
    componentPrice: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    componentProb: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    betTypeId: { type: DataTypes.INTEGER, allowNull: true },
    betType: { type: DataTypes.STRING, allowNull: true },
    bookRisk: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    betPrice: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    betProb: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    stateId: { type: DataTypes.VIRTUAL, allowNull: true },
    sport: { type: DataTypes.STRING, allowNull: true },
    season: { type: DataTypes.INTEGER, allowNull: true },
    date: { type: DataTypes.STRING, allowNull: true },
    datetimeUtc: { type: DataTypes.DATE, allowNull: true },
    eventId: { type: DataTypes.INTEGER, allowNull: true },
    statTypeId: { type: DataTypes.INTEGER, allowNull: true },
    statType: { type: DataTypes.STRING, allowNull: true },
    teamAbbr: { type: DataTypes.STRING, allowNull: true },
    oppAbbr: { type: DataTypes.STRING, allowNull: true },
    home: { type: DataTypes.BOOLEAN, allowNull: true },
    playerId: { type: DataTypes.INTEGER, allowNull: true },
    playerName: { type: DataTypes.STRING, allowNull: true },
    posAbbr: { type: DataTypes.STRING, allowNull: true },
    gamePlayed: { type: DataTypes.INTEGER, allowNull: true },
    gameStarted: { type: DataTypes.INTEGER, allowNull: true },
    acceptedMinBeforeStart: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    settledDate: { type: DataTypes.STRING, allowNull: true },
    lineAtBet: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    probNormAtBet: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    projAtBet: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    marketSuspendedId: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
    gamestate: { type: DataTypes.STRING, allowNull: true },
    period: { type: DataTypes.DECIMAL(10, 2), allowNull: true },
  };
};

BetTransactions.getName = () => {
  return "bet_transactions";
};

module.exports = {
  BetTransactions,
};
