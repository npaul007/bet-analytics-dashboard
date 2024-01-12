const SECRET_KEY = process.env.SECRET_KEY;
const PORT = process.env.PORT || 4000;
const ONE_DAY = 24 * 60 * 60 * 1000;

const DATABASE_NAME = process.env.DATABASE_NAME || "";
const DATABASE_HOST = process.env.DATABASE_HOST || "";
const DATABASE_PORT = process.env.DATABASE_PORT || "";
const DATABASE_USER = process.env.DATABASE_USER || "";
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "";
const DATABASE_SSL = process.env.DATABASE_SSL || "";
const NHL_API_HOST = process.env.NHL_API_HOST || "";

const SEASONS = ["20172018", "20182019", "20192020", "20202021", "20212022", "20222023"];

module.exports = {
  SECRET_KEY,
  PORT,
  ONE_DAY,
  DATABASE_NAME,
  DATABASE_HOST,
  DATABASE_PORT,
  DATABASE_USER,
  DATABASE_PASSWORD,
  DATABASE_SSL,
  NHL_API_HOST,
  SEASONS,
};
