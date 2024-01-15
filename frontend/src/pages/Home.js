import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto";
import { countries, statTypes, dateRanges } from "../modules/constants";
import {
  Container,
  ChartSection,
  DimensionalAnalysisSection,
  Dropdown,
} from "../components/HomeComponents";

export const Home = () => {
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Bet Transactions",
        data: [12, 19, 3, 5, 2],
        borderColor: "rgba(255,0,255,1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  const [selectedDateRange, setSelectedDateRange] = useState(dateRanges[0]);
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedStateType, setSelectedStatType] = useState(statTypes[0]);

  let chart = null;

  useEffect(() => {
    const timeSeriesCanvas = document.getElementById("timeSeriesChart");
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
          <label>Select Date Range:</label>
          <br />
          <Dropdown
            onChange={(e) => {
              chart && chart.destroy();
              setSelectedDateRange(e.target.value);
            }}
            value={selectedDateRange}
          >
            {dateRanges.map((range, index) => (
              <option key={index} value={range}>
                {range}
              </option>
            ))}
          </Dropdown>
        </div>
        <div>
          <label>Select Stat Type:</label>
          <br />
          <Dropdown
            onChange={(e) => {
              chart && chart.destroy();
              setSelectedDateRange(e.target.value);
            }}
            value={selectedDateRange}
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
              setSelectedDateRange(e.target.value);
            }}
            value={selectedDateRange}
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
