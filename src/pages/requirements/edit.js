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

const EditRequirement = () => {
  const [formData, setFormData] = useState({
    client: "Acme Corp",
    clientId: "CLT0001", // Auto-generated, non-editable
    requirementName: "Software Developer",
    requirementId: "REQ0001", // Auto-generated, non-editable
    jobTitle: "Frontend Developer",
    jobLocation: "New York, USA",
    jobWorkspace: "Hybrid",
    jobType: "Permanent",
    jobDescription: "Developing UI components with React.js",
    requirementCreatedDate: new Date().toISOString().split("T")[0], // Auto-generated
    skillSet: "React, JavaScript, CSS",
    endCustomer: "",
    targetCustomer: "",
    experienceRange: "2-5 years",
    maxCTC: "100000",
    hiringManagerName: "",
    hiringManagerMobile: "",
    hiringManagerEmail: "",
    accountOwner: "Shefeedh Hamsa",
    accountManager: "Ganesh Kumar",
    recruiter: "",
    modifiedDate: new Date().toISOString().split("T")[0], // Auto-generated
    status: "Active",
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSave = () => {
    console.log("Saved requirement data:", formData);
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
          {isEditing ? "Edit Requirement" : "Requirement Details"}
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
          {/* Job Details Section */}
          <Typography variant="h6" color="black" sx={{ mt: 3 }}>
            Job Details
          </Typography>
          <TextField
            label="Job Title"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            disabled={!isEditing}
          />
          <TextField
            label="Job Location"
            name="jobLocation"
            value={formData.jobLocation}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            disabled={!isEditing}
          />

          <FormControl fullWidth margin="normal" disabled={!isEditing}>
            <InputLabel>Job Workspace</InputLabel>
            <Select
              label="jobWorkspace "
              name="jobWorkspace"
              value={formData.jobWorkspace}
              onChange={handleChange}
            >
              <MenuItem value="Full time">Full time</MenuItem>
              <MenuItem value="Hybrid">Hybrid</MenuItem>
              <MenuItem value="WFH">WFH</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" disabled={!isEditing}>
            <InputLabel>Job Type</InputLabel>
            <Select
              label="jobType  "
              name="jobType"
              value={formData.jobType}
              onChange={handleChange}
            >
              <MenuItem value="Contract">Contract</MenuItem>
              <MenuItem value="Permanent">Permanent</MenuItem>
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
            disabled={!isEditing}
          />
          <TextField
            label="Skill Set"
            name="skillSet"
            value={formData.skillSet}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            disabled={!isEditing}
          />
          <TextField
            label="Maximum CTC"
            name="maxCTC"
            type="number"
            value={formData.maxCTC}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            disabled={!isEditing}
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
            disabled={!isEditing}
          />
          <TextField
            label="Target Customer"
            name="targetCustomer"
            value={formData.targetCustomer}
            onChange={handleChange}
            fullWidth
            margin="normal"
            disabled={!isEditing}
          />

          {/* Account Information Section */}
          <Typography variant="h6" color="black" sx={{ mt: 3 }}>
            Account Information
          </Typography>
          <FormControl fullWidth margin="normal" disabled={!isEditing}>
            <InputLabel>Account Owner</InputLabel>
            <Select
              label="accountOwner"
              name="accountOwner"
              value={formData.accountOwner}
              onChange={handleChange}
            >
              <MenuItem value="Shefeedh Hamsa">Shefeedh Hamsa</MenuItem>
              <MenuItem value="Vinayak">Vinayak</MenuItem>
              <MenuItem value="Niveditha">Niveditha</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" disabled={!isEditing}>
            <InputLabel>Account Manager</InputLabel>
            <Select
              label="accountManager"
              name="accountManager"
              value={formData.accountManager}
              onChange={handleChange}
            >
              <MenuItem value="Ganesh Kumar">Ganesh Kumar</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="normal" disabled={!isEditing}>
            <InputLabel>Status</InputLabel>
            <Select
              label="status"
              name="status"
              value={formData.status}
              onChange={handleChange}
            >
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Hold">Hold</MenuItem>
              <MenuItem value="Closed">Closed</MenuItem>
              <MenuItem value="Lost">Lost</MenuItem>
              <MenuItem value="Internally Closed">Internally Closed</MenuItem>
            </Select>
          </FormControl>
        </form>
      </Box>
    </>
  );
};

export default EditRequirement;
