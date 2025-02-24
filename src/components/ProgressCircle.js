import React from "react";
import { Doughnut } from "react-chartjs-2";
import {
  Grid,
  Card,
  CardContent,
  CardHeader,
  Box,
  Typography,
} from "@mui/material";

const ProgressCircle = ({
  title,
  value,
  percentage,
  color,
  showPercentage,
}) => {
  const data = {
    datasets: [
      {
        data: showPercentage ? [percentage, 100 - percentage] : [1, 0],
        backgroundColor: showPercentage ? [color, "#e0e0e0"] : [color, color],
        borderWidth: 0,
      },
    ],
  };

  const options = {
    cutout: "75%",
    responsive: true,
    plugins: {
      tooltip: { enabled: false },
    },
  };

  return (
    <Box
      textAlign="center"
      position="relative"
      width={120}
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
      <Box position="relative" width={100} height={100}>
        <Doughnut data={data} options={options} />
        <Box
          position="absolute"
          top="50%"
          left="50%"
          sx={{ transform: "translate(-50%, -50%)", textAlign: "center" }}
        >
          <Typography variant="h6" fontWeight="bold" sx={{ lineHeight: 1 }}>
            {value}
          </Typography>
          {showPercentage && (
            <Typography
              variant="caption"
              color="textSecondary"
              sx={{ lineHeight: 1.2 }}
            >
              {percentage.toFixed(1)}%
            </Typography>
          )}
        </Box>
      </Box>
      <Typography
        variant="body2"
        mt={1}
        fontWeight={500}
        sx={{ textAlign: "center", width: "100px" }}
      >
        {title}
      </Typography>
    </Box>
  );
};

const CustomerStatsCard = ({
  totalProjects,
  activeCustomers,
  totalCustomers,
  ongoingRequirements,
  positionsHired,
}) => {
  return (
    <Grid item xs={12} sm={6} md={4}>
      <Card elevation={3}>
        <CardHeader
          title="Customer Stats"
          sx={{ textAlign: "center", backgroundColor: "#f5f5f5" }}
        />
        <CardContent
          sx={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <ProgressCircle
            title="Total Projects"
            value={totalProjects}
            percentage={100}
            color="#007bff"
            showPercentage={false}
          />
          <ProgressCircle
            title="Active Customers"
            value={activeCustomers}
            percentage={(activeCustomers / totalCustomers) * 100}
            color="#28a745"
            showPercentage={true}
          />
          <ProgressCircle
            title="Ongoing Requirements"
            value={ongoingRequirements}
            percentage={(positionsHired / ongoingRequirements) * 100}
            color="#dc3545"
            showPercentage={true}
          />
        </CardContent>
      </Card>
    </Grid>
  );
};

export default CustomerStatsCard;
