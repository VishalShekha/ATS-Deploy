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

const EditCandidate = () => {
  const requirements = [
    { id: "REQ0001", name: "Software Engineer" },
    { id: "REQ0002", name: "Data Scientist" },
    { id: "REQ0003", name: "DevOps Engineer" },
    { id: "REQ0004", name: "Frontend Developer" },
  ];

  const [formData, setFormData] = useState({
    candidateId: "CNT0001", // Non-editable field
    candidateName: "John Doe",
    candidateGender: "Male", // Dropdown selection
    contactNumber: "9876543210",
    alternateContactNumber: "", // Not required
    email: "john.doe@example.com",
    currentPreviousCompany: "ABC Corp",
    currentPreviousDesignation: "Software Engineer",
    currentJobType: "Permanent", // Dropdown selection
    ifContract: "", // Not required
    technologyUsed: "React, Node.js",
    yearsOfExperience: "5",
    relevantExperience: "3",
    currentSalary: "50000",
    expectedSalary: "60000",
    holdingAnyOffer: "Yes",
    currentLocation: "Bangalore", // Top Cities of India
    preferredLocation: "Mumbai", // Top Cities of India
    noticePeriod: "30 days",
    education: "B.Tech in Computer Science",
    requirementId: "REQ0001", // Non-editable field
    requirementName: "Software Engineer", // Editable field as a dropdown
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "requirementName") {
      const selectedRequirement = requirements.find(
        (req) => req.name === value
      );
      setFormData({
        ...formData,
        requirementId: selectedRequirement.id,
        requirementName: selectedRequirement.name,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleSave = () => {
    console.log("Saved candidate data:", formData);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <Box
        sx={{
          maxWidth: 500,
          mx: "auto",
          mt: 5,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white", // Set background to white
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "black" }}>
          {isEditing ? "Edit Candidate" : "Candidate Details"}
        </Typography>
        {!isEditing ? (
          <Button
            variant="contained"
            onClick={() => setIsEditing(true)}
            sx={{ mb: 2 }}
          >
            Edit
          </Button>
        ) : (
          <Box sx={{ display: "flex", gap: 2, mb: 2 }}>
            <Button variant="contained" color="primary" onClick={handleSave}>
              Save
            </Button>
            <Button variant="outlined" color="secondary" onClick={handleCancel}>
              Cancel
            </Button>
          </Box>
        )}

        <form>
          {/* Requirement Section */}
          <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
            Requirement Details
          </Typography>
          <TextField
            label="Requirement ID"
            name="RequirementID"
            value={formData.requirementId}
            fullWidth
            margin="normal"
            disabled
            sx={{ color: "black" }}
          />
          <FormControl fullWidth margin="normal" disabled={!isEditing}>
            <InputLabel sx={{ color: "black" }}>Requirement Name</InputLabel>
            <Select
              label="requirementName"
              name="requirementName"
              value={formData.requirementName}
              onChange={handleChange}
              sx={{ color: "black" }}
            >
              {requirements.map((req) => (
                <MenuItem key={req.id} value={req.name}>
                  {req.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Personal Details Section */}
          <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
            Personal Details
          </Typography>
          <TextField
            label="Candidate ID"
            name="candidateId"
            value={formData.candidateId}
            fullWidth
            margin="normal"
            disabled
            sx={{ color: "black" }}
          />
          <TextField
            label="Candidate Name"
            name="candidateName"
            value={formData.candidateName}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />
          <FormControl fullWidth margin="normal" disabled={!isEditing}>
            <InputLabel sx={{ color: "black" }}>Candidate Gender</InputLabel>
            <Select
              label="candidate  Gender"
              name="candidateGender"
              value={formData.candidateGender}
              onChange={handleChange}
              sx={{ color: "black" }}
            >
              <MenuItem value="Male">Male</MenuItem>
              <MenuItem value="Female">Female</MenuItem>
              <MenuItem value="Other">Other</MenuItem>
            </Select>
          </FormControl>

          {/* Contact Information Section */}
          <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
            Contact Information
          </Typography>
          <TextField
            label="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />
          <TextField
            label="Alternate Contact Number"
            name="alternateContactNumber"
            value={formData.alternateContactNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />
          <TextField
            label="Email ID"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            disabled={!isEditing}
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
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />
          <TextField
            label="Current/Previous Designation"
            name="currentPreviousDesignation"
            value={formData.currentPreviousDesignation}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />
          <FormControl fullWidth margin="normal" disabled={!isEditing}>
            <InputLabel sx={{ color: "black" }}>Current Job Type</InputLabel>
            <Select
              label="current    Job  Type"
              name="currentJobType"
              value={formData.currentJobType}
              onChange={handleChange}
              sx={{ color: "black" }}
            >
              <MenuItem value="Contract">Contract</MenuItem>
              <MenuItem value="Permanent">Permanent</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="If Contract (Parent Company & Client Depute)"
            name="ifContract"
            value={formData.ifContract}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />
          <TextField
            label="Technology Used"
            name="technologyUsed"
            value={formData.technologyUsed}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />

          {/* Experience & Salary Section */}
          <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
            Experience & Salary Details
          </Typography>
          <TextField
            label="Years of Experience"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />
          <TextField
            label="Relevant Experience"
            name="relevantExperience"
            value={formData.relevantExperience}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />
          <TextField
            label="Current Salary"
            name="currentSalary"
            value={formData.currentSalary}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />
          <TextField
            label="Expected Salary"
            name="expectedSalary"
            value={formData.expectedSalary}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />

          {/* Location & Offer Section */}
          <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
            Location & Offer Details
          </Typography>
          <TextField
            label="Holding Any Offer"
            name="holdingAnyOffer"
            value={formData.holdingAnyOffer}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />
          <TextField
            label="Current Location"
            name="currentLocation"
            value={formData.currentLocation}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />
          <TextField
            label="Preferred Location"
            name="preferredLocation"
            value={formData.preferredLocation}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />

          {/* Education & Notice Period Section */}
          <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
            Education & Notice Period
          </Typography>
          <TextField
            label="Notice Period"
            name="noticePeriod"
            value={formData.noticePeriod}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />
          <TextField
            label="Education"
            name="education"
            value={formData.education}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
            sx={{ color: "black" }}
          />
        </form>
      </Box>
    </>
  );
};

export default EditCandidate;
