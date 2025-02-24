import React from "react";
import { Bar } from "react-chartjs-2";
import { Grid, Card, CardContent, CardHeader } from "@mui/material";

const BarChart = ({ title }) => {
  const data = {
    labels: ["Alice", "Bob", "Charlie", "David", "Emma"], // Account Manager names
    datasets: [
      {
        label: "Completed on Time",
        data: [30, 25, 35, 20, 28], // Number completed on time
        backgroundColor: "blue",
      },
      {
        label: "Total Requirements",
        data: [50, 40, 55, 30, 45], // Total requirements (including missed ones)
        backgroundColor: "red",
      },
    ],
  };

  const options = {
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
    },
  };

  return (
    <Grid item xs={12} sm={4}>
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
