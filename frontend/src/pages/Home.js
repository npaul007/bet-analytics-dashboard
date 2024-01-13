import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Chart from "chart.js/auto";

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem;
`;

const ChartSection = styled.div`
  margin-bottom: 2rem;
`;

const DimensionalAnalysisSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const Dropdown = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
`;

// React functional component
export const Home = () => {
  // Sample data for chart
  const chartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Bet Transactions",
        data: [12, 19, 3, 5, 2],
        borderColor: "rgba(75,192,192,1)",
        borderWidth: 2,
        fill: false,
      },
    ],
  };

  // Sample data for dropdowns
  const dateRanges = [
    "Last 7 Days",
    "Last 30 Days",
    "Last 3 Months",
    "Last 6 Months",
  ];

  // State for selected date range
  const [selectedDateRange, setSelectedDateRange] = useState(dateRanges[0]);
  let chart = null;

  useEffect(() => {
    // Initialize and render the time-series chart
    const timeSeriesCanvas = document.getElementById("timeSeriesChart");
    chart && chart.destroy();
    chart = new Chart(timeSeriesCanvas, {
      type: "line",
      data: chartData,
    });
  }, [chartData, chart]);

  return (
    <Container>
      <ChartSection>
        <h2>Time-Series Analysis</h2>
        <canvas id="timeSeriesChart" width="400" height="200"></canvas>
      </ChartSection>

      <DimensionalAnalysisSection>
        <h2>Dimensional Analysis</h2>
        <div>
          <label>Select Date Range:</label>
          <Dropdown
            onChange={(e) => {
              setSelectedDateRange(e.target.value);
              chart && chart.destroy();
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
      </DimensionalAnalysisSection>
    </Container>
  );
};
