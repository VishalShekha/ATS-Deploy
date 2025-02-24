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

const AddUser = () => {
  const [formData, setFormData] = useState({
    candidateName: "",
    candidateGender: "",
    contactNumber: "",
    alternateContactNumber: "",
    emailId: "",
    currentPreviousCompany: "",
    currentPreviousDesignation: "",
    currentJobType: "",
    contractDetails: "",
    technologyUsed: "",
    yearsOfExperience: "",
    relevantExperience: "",
    currentSalary: "",
    expectedSalary: "",
    holdingAnyOffer: "",
    currentLocation: "",
    preferredLocation: "",
    noticePeriod: "",
    education: "",
    requirementName: "",
    requirementId: "",
  });

  const jobTypes = ["Contract", "Permanent"];
  const genders = ["Male", "Female", "Other"];
  const topCities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
  ];
  const requirements = [
    { name: "Software Engineer", id: "DTM00001" },
    { name: "Data Analyst", id: "DTM00002" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    if (name === "requirementName") {
      const selectedRequirement = requirements.find(
        (req) => req.name === value
      );
      setFormData({
        ...formData,
        requirementName: value,
        requirementId: selectedRequirement ? selectedRequirement.id : "",
      });
    }
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
          maxWidth: 600,
          mx: "auto",
          mt: 5,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "black" }}>
          Add Candidate
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* Requirement Section */}
          <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
            Requirement Details
          </Typography>
          <FormControl fullWidth margin="normal" required>
            <InputLabel sx={{ color: "black" }}>Requirement Name</InputLabel>
            <Select
              label="requirementName"
              name="requirementName"
              value={formData.requirementName}
              onChange={handleChange}
            >
              {requirements.map((req) => (
                <MenuItem key={req.name} value={req.name}>
                  {req.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Requirement ID"
            name="requirementId"
            value={formData.requirementId}
            fullWidth
            margin="normal"
            disabled
            sx={{ color: "black" }}
          />

          {/* Candidate Details Section */}
          <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
            Candidate Details
          </Typography>
          <TextField
            label="Candidate Name"
            name="candidateName"
            value={formData.candidateName}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{ color: "black" }}
          />

          <FormControl fullWidth margin="normal" required>
            <InputLabel sx={{ color: "black" }}>Gender</InputLabel>
            <Select
              name="candidateGender"
              label="Gender"
              value={formData.candidateGender}
              onChange={handleChange}
            >
              {genders.map((gender) => (
                <MenuItem key={gender} value={gender}>
                  {gender}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{ color: "black" }}
          />
          <TextField
            label="Alternate Contact Number"
            name="alternateContactNumber"
            value={formData.alternateContactNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
            sx={{ color: "black" }}
          />
          <TextField
            label="Email ID"
            name="emailId"
            value={formData.emailId}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{ color: "black" }}
          />

          {/* Employment Details Section */}
          <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
            Employment Details
          </Typography>
          <TextField
            label="Current/Previous Company"
            name="currentPreviousCompany"
            value={formData.currentPreviousCompany}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{ color: "black" }}
          />
          <TextField
            label="Current/Previous Designation"
            name="currentPreviousDesignation"
            value={formData.currentPreviousDesignation}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{ color: "black" }}
          />

          <FormControl fullWidth margin="normal" required>
            <InputLabel sx={{ color: "black" }}>Current Job Type</InputLabel>
            <Select
              name="currentJobType"
              label="curren tJ  obType"
              value={formData.currentJobType}
              onChange={handleChange}
            >
              {jobTypes.map((type) => (
                <MenuItem key={type} value={type}>
                  {type}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {formData.currentJobType === "Contract" && (
            <TextField
              label="Contract - Parent Company & Client Name"
              name="contractDetails"
              value={formData.contractDetails}
              onChange={handleChange}
              fullWidth
              margin="normal"
              sx={{ color: "black" }}
            />
          )}

          <TextField
            label="Technology Used"
            name="technologyUsed"
            value={formData.technologyUsed}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{ color: "black" }}
          />
          <TextField
            label="Years of Experience"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{ color: "black" }}
          />
          <TextField
            label="Relevant Experience"
            name="relevantExperience"
            value={formData.relevantExperience}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{ color: "black" }}
          />
          <TextField
            label="Current Salary"
            name="currentSalary"
            value={formData.currentSalary}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{ color: "black" }}
          />
          <TextField
            label="Expected Salary"
            name="expectedSalary"
            value={formData.expectedSalary}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{ color: "black" }}
          />
          <TextField
            label="Holding Any Offer"
            name="holdingAnyOffer"
            value={formData.holdingAnyOffer}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{ color: "black" }}
          />

          {/* Location & Education Details Section */}
          <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
            Location & Education Details
          </Typography>
          <FormControl fullWidth margin="normal" required>
            <InputLabel sx={{ color: "black" }}>Current Location</InputLabel>
            <Select
              name="currentLocation"
              label="currentLocation*"
              value={formData.currentLocation}
              onChange={handleChange}
            >
              {topCities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" required>
            <InputLabel sx={{ color: "black" }}>Preferred Location</InputLabel>
            <Select
              name="preferredLocation"
              label="preferredLocation*"
              value={formData.preferredLocation}
              onChange={handleChange}
            >
              {topCities.map((city) => (
                <MenuItem key={city} value={city}>
                  {city}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <TextField
            label="Notice Period"
            name="noticePeriod"
            value={formData.noticePeriod}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{ color: "black" }}
          />
          <TextField
            label="Education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            sx={{ color: "black" }}
          />

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Add Candidate
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddUser;
