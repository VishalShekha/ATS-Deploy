import React from "react";
import { Bar } from "react-chartjs-2";
import { Grid, Card, CardContent, CardHeader } from "@mui/material";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  ChartData,
} from "chart.js";

// Register the necessary components from Chart.js
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

const stageColors = {
  Active: "#3498db",
  Hold: "#f1c40f",
  Closed: "#2ecc71",
  Lost: "#e74c3c",
  "Internally Closed": "#9b59b6",
};

const BarChart = ({ title, mockData }) => {
  if (!mockData || !Array.isArray(mockData)) {
    console.error("mockData is undefined or not an array");
    return null;
  }

  // Extract unique stage names
  const stageNames = [
    ...new Set(
      mockData.flatMap((req) => req.stages?.map((stage) => stage.name) || [])
    ),
  ];

  // Prepare dataset for each stage
  const datasets = stageNames.map((stageName) => ({
    label: stageName,
    data: mockData.map((req) => {
      const stage = req.stages?.find((stage) => stage.name === stageName);
      return stage ? stage.positions : 0;
    }),
    backgroundColor: stageColors[stageName], // Use predefined colors or fallback
  }));

  // Calculate total positions for each requirement
  const totalPositions = mockData.map((req) =>
    req.stages?.reduce((acc, stage) => acc + (stage.positions || 0), 0)
  );

  const data = {
    labels: mockData.map((req) => req.name), // Requirement names
    datasets,
  };

  const options = {
    indexAxis: "y",
    responsive: true,
    scales: {
      x: { stacked: true },
      y: { stacked: true },
    },
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          boxWidth: 12,
        },
      },
      // Custom plugin to display total positions on top of each column
      tooltip: {
        enabled: true,
        callbacks: {
          label: (context) => {
            const datasetIndex = context.datasetIndex;
            const dataIndex = context.dataIndex;
            const total = totalPositions[dataIndex];
            return `${context.dataset.label}: ${context.raw} (Total: ${total})`;
          },
        },
      },
      // Display total positions on top of the bars
      datalabels: {
        display: true,
        align: "end", // Position at the top of each bar
        formatter: (value, context) => {
          const dataIndex = context.dataIndex;
          const total = totalPositions[dataIndex];
          return total;
        },
        color: "#000", // Color of the label
      },
    },
  };

  return (
    <Grid item xs={12} sm={6}>
      <Card>
        <CardHeader
          title={title}
          sx={{ textAlign: "center", backgroundColor: "#f5f5f5" }}
        />
        <CardContent>
          <Bar data={data} options={options} style={{ height: "350px" }} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default BarChart;
