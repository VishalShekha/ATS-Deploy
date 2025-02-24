import React, { useState } from "react";
import Header from "../../components/header";
import {
  TextField,
  Button,
  Box,
  Typography,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const AddRequirement = () => {
  const [formData, setFormData] = useState({
    client: "",
    requirementName: "",
    jobTitle: "",
    jobLocation: "",
    jobWorkspace: "",
    jobType: "",
    jobDescription: "",
    skillSet: "",
    endCustomer: "",
    targetCustomer: "",
    experienceRange: "",
    maxCTC: "",
    hiringManagerName: "",
    hiringManagerMobile: "",
    hiringManagerEmail: "",
    accountOwner: "",
    accountManager: "",
    recruiter: "",
    status: "",
  });

  const jobWorkspaces = ["Full time", "Hybrid", "WFH"];
  const jobTypes = ["Contract", "Permanent"];
  const accountOwners = ["Shefeedh Hamsa", "Vinayak", "Niveditha"];
  const accountManagers = ["Ganesh Kumar"];
  const recruiters = [
    "Kishoth Kumar",
    "Sonali Sinha",
    "Kaushal BA",
    "Ganesh Kumar",
    "Shruthi Ravikumar",
    "Aishwarya R",
  ];
  const statuses = ["Active", "Hold", "Closed", "Lost", "Internally Closed"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <Box
        sx={{
          maxWidth: 800,
          mx: "auto",
          mt: 5,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" gutterBottom color="black">
          Add Requirement
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* Job Details Section */}
          <Typography variant="h6" color="black" sx={{ mt: 3 }}>
            Job Details
          </Typography>
          <TextField
            label="Client"
            name="client"
            value={formData.client}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Requirement Name"
            name="requirementName"
            value={formData.requirementName}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Job Title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Job Location"
            name="jobLocation"
            value={formData.jobLocation}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />

          <FormControl fullWidth margin="normal" required>
            <InputLabel>Job Workspace</InputLabel>
            <Select
              label="jobWorkspace"
              name="jobWorkspace"
              value={formData.jobWorkspace}
              onChange={handleChange}
            >
              {jobWorkspaces.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" required>
            <InputLabel>Job Type</InputLabel>
            <Select
              label="jobType"
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
            >
              {jobTypes.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Job Description"
            name="jobDescription"
            value={formData.jobDescription}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            multiline
            rows={3}
          />
          <TextField
            label="Skill Set"
            name="skillSet"
            value={formData.skillSet}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Maximum CTC"
            name="maxCTC"
            value={formData.maxCTC}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            type="number"
          />

          {/* Customer Information Section */}
          <Typography variant="h6" color="black" sx={{ mt: 3 }}>
            Customer Information
          </Typography>
          <TextField
            label="End Customer"
            name="endCustomer"
            value={formData.endCustomer}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Target Customer"
            name="targetCustomer"
            value={formData.targetCustomer}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Experience Range"
            name="experienceRange"
            value={formData.experienceRange}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />

          {/* Account Information Section */}
          <Typography variant="h6" color="black" sx={{ mt: 3 }}>
            Account Information
          </Typography>
          <FormControl fullWidth margin="normal" required>
            <InputLabel>Account Owner</InputLabel>
            <Select
              label="accountOwner"
              value={formData.accountOwner}
              onChange={handleChange}
            >
              {accountOwners.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" required>
            <InputLabel>Account Manager</InputLabel>
            <Select
              label="accountManager"
              value={formData.accountManager}
              onChange={handleChange}
            >
              {accountManagers.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal">
            <InputLabel>Recruiter</InputLabel>
            <Select
              label="recruiter"
              value={formData.recruiter}
              onChange={handleChange}
            >
              {recruiters.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" required>
            <InputLabel>Status</InputLabel>
            <Select
              label="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              {statuses.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Add Requirement
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddRequirement;
