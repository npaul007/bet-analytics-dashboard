const fs = require("fs");
const { get } = require("lodash");
const { DATA_FILE } = require("../constants");

const writePath = __dirname.replace("modules/service", "static/");

const saveTransactions = () => {};

const runTransactionRead = async () => {
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

      capturedData = capturedData.substring(lastIdx + 2, capturedData.length);
    }
  });

  readStream.on("end", () => {
    console.log("Finished reading file");
  });

  readStream.on("error", (error) => {
    console.error(`Error reading file: ${error}`);
  });
};

module.exports = {
  runTransactionRead,
};
