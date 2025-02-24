import React from "react";
import { Grid, Typography } from "@mui/material";
import Header from "../components/header";
import CustomerStatsCard from "../components/ProgressCircle";
import BarChart from "../components/BarChart";
import BarChart_R from "../components/BarChart_R";
import RequirementBarGraph from "../components/RequirementBarGraph";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
} from "chart.js";

// Register the necessary components
ChartJS.register(
  ArcElement, // For Pie chart
  CategoryScale, // For Bar and Line charts
  LinearScale, // For Bar and Line charts
  BarElement, // For Bar chart
  Title, // For Title of charts
  Tooltip, // For Tooltips
  Legend, // For Legend
  LineElement, // For Line chart
  PointElement // For Line chart points
);

const Dashboard = () => {
  // Pie chart data
  const pieData = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
      },
    ],
  };

  // Bar chart data
  const barData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Sales",
        data: [65, 59, 80, 81, 56],
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  // Line chart data
  const lineData = {
    labels: ["January", "February", "March", "April", "May"],
    datasets: [
      {
        label: "Profit",
        data: [65, 59, 80, 81, 56],
        fill: false,
        borderColor: "#742774",
        tension: 0.1,
      },
    ],
  };

  // Common chart options
  const commonOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right", // You can adjust this based on your needs
        labels: {
          boxWidth: 12, // Optional: adjust the width of the legend boxes
        },
      },
    },
  };
  const activeProjects = 120;
  const activeCustomers = 75;
  const totalCustomers = 100;
  const ongoingRequirements = 50;
  const positionsHired = 30;

  const recruiterData = [
    {
      recruiter: "Shina",
      submissions: 10,
      hired: 4,
      interviewStage: 5,
      selected: 3,
    },
    {
      recruiter: "Viele",
      submissions: 15,
      hired: 7,
      interviewStage: 6,
      selected: 5,
    },
    {
      recruiter: "Mike",
      submissions: 12,
      hired: 5,
      interviewStage: 8,
      selected: 4,
    },
  ];
  const mockData = [
    {
      name: "Requirement A",
      stages: [
        { name: "Active", positions: 25 },
        { name: "Hold", positions: 10 },
        { name: "Closed", positions: 18 },
        { name: "Lost", positions: 7 },
        { name: "Internally Closed", positions: 12 },
      ],
    },
    {
      name: "Requirement B",
      stages: [
        { name: "Active", positions: 20 },
        { name: "Hold", positions: 5 },
        { name: "Closed", positions: 15 },
        { name: "Lost", positions: 10 },
        { name: "Internally Closed", positions: 8 },
      ],
    },
  ];

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Typography variant="h4" component="h1" align="center" gutterBottom>
        Dashboard
      </Typography>

      <Grid container spacing={3} justifyContent="center">
        <BarChart title="Account Manager Stats" />
        <BarChart_R data={recruiterData} />
        <CustomerStatsCard
          totalProjects={activeProjects}
          activeCustomers={activeCustomers}
          totalCustomers={totalCustomers}
          ongoingRequirements={ongoingRequirements}
          positionsHired={positionsHired}
        />
        <RequirementBarGraph title="Requirement Stats" mockData={mockData} />
      </Grid>
    </>
  );
};

export default Dashboard;
