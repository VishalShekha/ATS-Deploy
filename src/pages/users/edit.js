import React, { useState } from "react";
import Header from "../../components/header";
import { TextField, Button, Box, Typography } from "@mui/material";

const EditUser = () => {
  const [formData, setFormData] = useState({
    name: "John Doe",
    username: "johndoe",
    email: "johndoe@example.com",
    password: "",
    confirmPassword: "",
    roles: ["admin"],
  });

  const [isEditing, setIsEditing] = useState(false);

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

  const handleSave = () => {
    // TODO: better save data UI
    alert("Saved data!");
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
      <br />
      <Box
        sx={{
          maxWidth: 500,
          mx: "auto",
          mt: 5,
          p: 3,
          boxShadow: 3,
          borderRadius: 2,
          backgroundColor: "white", // White background for the box
        }}
      >
        <Typography variant="h4" gutterBottom sx={{ color: "#000000" }}>
          {" "}
          {/* Black heading */}
          {isEditing ? "Edit User" : "User Details"}
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
          <Typography variant="h6" gutterBottom sx={{ color: "#000000" }}>
            {" "}
            {/* Black heading */}
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
            disabled={!isEditing}
          />
          <TextField
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
            disabled={!isEditing}
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
            disabled={!isEditing}
          />
          {isEditing && (
            <>
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
            </>
          )}
          <Typography
            variant="h6"
            gutterBottom
            mt={2}
            sx={{ color: "#000000" }}
          >
            {" "}
            {/* Black heading */}
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
                onClick={() => isEditing && handleRoleSelect(role)}
                sx={{
                  color: formData.roles.includes(role) ? "white" : "#000000", // Text color for button
                  borderColor: formData.roles.includes(role)
                    ? "primary.main"
                    : "#000000", // Border color for button
                }}
              >
                {role}
              </Button>
            ))}
          </div>
        </form>
      </Box>
    </>
  );
};

export default EditUser;
