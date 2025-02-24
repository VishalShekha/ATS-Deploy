import React from "react";
import { Bar } from "react-chartjs-2";
import { Grid, Card, CardContent, CardHeader } from "@mui/material";

const RecruiterBarChart = ({ data }) => {
  const chartData = {
    labels: data.map((item) => item.recruiter),
    datasets: [
      {
        label: "Submissions",
        backgroundColor: "#4CAF50",
        data: data.map((item) => item.submissions),
      },
      {
        label: "Hired",
        backgroundColor: "#FF9800",
        data: data.map((item) => item.hired),
      },
      {
        label: "Interview Stage",
        backgroundColor: "#2196F3",
        data: data.map((item) => item.interviewStage),
      },
      {
        label: "Selected",
        backgroundColor: "#E91E63",
        data: data.map((item) => item.selected),
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
    },
  };

  return (
    <Grid item xs={12} sm={6} md={8}>
      <Card>
        <CardHeader
          title="Recruiter Performance"
          sx={{ textAlign: "center", backgroundColor: "#f5f5f5" }}
        />
        <CardContent>
          <Bar data={chartData} options={options} />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default RecruiterBarChart;
