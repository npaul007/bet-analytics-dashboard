import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { countries, statTypes } from "../modules/constants";
import {
  Container,
  ChartSection,
  DimensionalAnalysisSection,
  Dropdown,
} from "../components/HomeComponents";
import { fetchTransactions } from "../modules/api";
import { get } from "lodash";

const getChartData = (data) => {
  return {
    labels: ["1.0", "2.0", "3.0", "4.0"],
    datasets: [
      {
        label: "Bet Transactions",
        data: data,
        borderColor: "rgba(255,0,255,1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };
};

export const Home = () => {
  let [chartData, setChartData] = useState(getChartData([]));

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedStatType, setSelectedStatType] = useState(statTypes[0]);

  let chart = null;

  useEffect(() => {
    fetchTransactions(
      { country: selectedCountry, statType: selectedStatType },
      (data) => {
        const transactionCount = get(data, "transactionCount", {});
        let newData = [];
        for (const key in transactionCount) {
          if (key.includes(".00")) {
            newData.push(transactionCount[key]);
          }
        }

        setChartData(getChartData(newData));
      }
    );
  }, [selectedCountry, selectedStatType, setChartData]);

  useEffect(() => {
    const timeSeriesCanvas = document.getElementById("timeSeriesChart");
    // eslint-disable-next-line
    chart = new Chart(timeSeriesCanvas, {
      type: "line",
      data: chartData,
    });

    return () => {
      chart.destroy();
    };
  }, [chartData, chart]);

  return (
    <Container>
      <ChartSection>
        <h2>Quarter-by-Quarter Time-Series Analysis</h2>
        <h3>Minnesota Timberwolves vs Utah Jazz 11-04-2023</h3>
        <canvas id="timeSeriesChart" width="400" height="200"></canvas>
      </ChartSection>

      <DimensionalAnalysisSection>
        <p>Dimensional Analysis</p>
        <div>
          <label>Select Stat Type:</label>
          <br />
          <Dropdown
            onChange={(e) => {
              chart && chart.destroy();
              setSelectedStatType(e.target.value);
            }}
            value={selectedStatType}
          >
            {statTypes.map((st, index) => (
              <option key={index} value={st}>
                {st}
              </option>
            ))}
          </Dropdown>
        </div>
        <div>
          <label>Select Country:</label>
          <br />
          <Dropdown
            onChange={(e) => {
              chart && chart.destroy();
              setSelectedCountry(e.target.value);
            }}
            value={selectedCountry}
          >
            {countries.map((ct, index) => (
              <option key={index} value={ct}>
                {ct}
              </option>
            ))}
          </Dropdown>
        </div>
      </DimensionalAnalysisSection>
    </Container>
  );
};
