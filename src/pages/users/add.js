import React, { useState } from "react";
import Header from "../../components/header";
import { TextField, Button, Box, Typography } from "@mui/material";

const AddUser = () => {
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    roles: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleRoleSelect = (role) => {
    setFormData((prevData) => {
      const roles = prevData.roles.includes(role)
        ? prevData.roles.filter((r) => r !== role)
        : [...prevData.roles, role];
      return { ...prevData, roles };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    alert("Saved data!");

    // Reset form data to initial values
    setFormData({
      name: "",
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      roles: [],
    });
  };

  return (
    <>
      <Header />
      <br></br>
      <br></br>
      <Box
        sx={{
          maxWidth: 500,
          mx: "auto",
          mt: 5,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white",
        }}
      >
        {/* Changed box background to white */}
        <Typography variant="h4" gutterBottom sx={{ color: "black" }}>
          {/* Changed heading color to black */}
          Add User
        </Typography>
        <form onSubmit={handleSubmit}>
          {/* User Information Section */}
          <Typography variant="h6" gutterBottom sx={{ color: "black" }}>
            {/* Changed heading color to black */}
            User Information
          </Typography>
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Password"
            name="password"
            type="password"
            value={formData.password}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={formData.confirmPassword}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />

          {/* Role Selection with Buttons */}
          <Typography variant="h6" gutterBottom mt={2} sx={{ color: "black" }}>
            {/* Changed heading color to black */}
            Assign Roles
          </Typography>
          <div style={{ marginTop: "20px", display: "flex", gap: "10px" }}>
            {["admin", "recruiter", "account manager"].map((role) => (
              <Button
                key={role}
                variant={
                  formData.roles.includes(role) ? "contained" : "outlined"
                }
                color={formData.roles.includes(role) ? "primary" : "default"}
                onClick={() => handleRoleSelect(role)}
                sx={{
                  color: formData.roles.includes(role) ? "white" : "black", // Text color for contrast
                  borderColor: formData.roles.includes(role)
                    ? "primary.main"
                    : "black", // Border color for contrast
                }}
              >
                {role}
              </Button>
            ))}
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Add User
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddUser;
