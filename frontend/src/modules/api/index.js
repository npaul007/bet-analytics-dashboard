import axios from "axios";
import { API_HOST } from "../constants";

export const fetchTransactions = async ({ country, statType }, _callback) => {
  try {
    const response = await axios.get(
      `${API_HOST}transactions?country=${country}&statType=${statType}`
    );

    const { data } = response;

    if (data) {
      _callback(data.data);
    } else {
      _callback({
        periods: [],
        transactionCount: {},
      });
    }
  } catch (err) {
    console.log("Failed to make request due to error:", err);
  }
};
