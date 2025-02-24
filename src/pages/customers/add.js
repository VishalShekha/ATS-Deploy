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

const AddCustomer = () => {
  const [formData, setFormData] = useState({
    CustomerName: "",
    contactPerson: "",
    email: "",
    contactNumber: "",
    industry: [],
    address: "",
    gst: "",
    pan: "",
    CustomerLocations: "",
    otherNotes: "",
  });

  const industries = [
    "Agriculture/Forestry/Fishing",
    "Meat and Minerals",
    "Energy and Utilities",
    "Construction - Industrial Facilities and Infrastructure",
    "Aerospace and Defense",
    "Automotive and Parts Mfg",
    "Biotechnology/Pharmaceuticals",
    "Chemicals/Petro-Chemicals",
    "Consumer Packaged Goods Manufacturing",
    "Electronics, Components, and Semiconductor Mfg",
    "Manufacturing - Other",
    "Printing and Publishing",
    "Clothing and Textile Manufacturing",
    "Wholesale Trade/Import-Export",
    "Retail",
    "Travel, Transportation and Tourism",
    "Transport and Storage Minerals",
    "Internet Services",
    "Telecommunications Services",
    "Banking",
    "Insurance",
    "Real Estate Property Management",
    "Rental Services",
    "Accounting and Auditing Services",
    "Architectural and Design Services",
    "Management Consulting Services",
    "Computer Hardware",
    "Computer Software",
    "Legal Services",
    "Waste Management",
    "Education",
    "Healthcare Services",
    "Performing and Fine Arts",
    "Sports and Physical Recreation",
    "Hotels and Lodging",
    "Restaurant Food Services",
    "Staffing Employment Agencies",
    "Non Profit Charitable Organisations",
    "Personal and Household Services",
    "Government and Military",
    "Security and Surveillance",
    "Automotive Sales and Repair Services",
    "Business Services - Others",
    "Computer / IT Services",
    "Construction Residential and Commercial Office",
    "Engineering Services",
    "Entertainment Venues and Theaters",
    "Financial Services",
    "Food and Beverage Production",
    "Marine Mfg & Services",
    "Medical Devices and Supplies",
    "Other / Not Classified",
    "Logistics",
    "Courier",
    "Beauty and Personal Care",
    "FMCG",
    "Fitness and Wellness",
    "Fintech",
    "Edtech",
  ];

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
      <Box
        sx={{
          maxWidth: 600,
          mx: "auto",
          mt: 5,
          p: 3,
          backgroundColor: "white",
          boxShadow: 3,
          borderRadius: 2,
        }}
      >
        <Typography variant="h4" color="black" gutterBottom>
          Add Customer
        </Typography>

        <form onSubmit={handleSubmit}>
          {/* General Information Section */}
          <Typography variant="h6" color="black" sx={{ mt: 3 }}>
            General Information
          </Typography>
          <TextField
            label="Customer Name"
            name="CustomerName"
            value={formData.CustomerName}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
          />
          <TextField
            label="Contact Person"
            name="contactPerson"
            value={formData.contactPerson}
            onChange={handleChange}
            fullWidth
            required
            margin="normal"
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
          />
          <TextField
            label="Contact Number"
            name="contactNumber"
            value={formData.contactNumber}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          {/* Industry Information Section */}
          <Typography variant="h6" color="black" sx={{ mt: 3 }}>
            Industry Information
          </Typography>
          <FormControl fullWidth margin="normal">
            <InputLabel>Industry</InputLabel>
            <Select
              multiple
              name="industry"
              label="industry"
              value={formData.industry}
              onChange={handleChange}
            >
              {industries.map((industry) => (
                <MenuItem key={industry} value={industry}>
                  {industry}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          {/* Address and Registration Section */}
          <Typography variant="h6" color="black" sx={{ mt: 3 }}>
            Address & Registration Details
          </Typography>
          <TextField
            label="Registered Address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="GST"
            name="gst"
            value={formData.gst}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="PAN"
            name="pan"
            value={formData.pan}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />

          {/* Customer Specific Details Section */}
          <Typography variant="h6" color="black" sx={{ mt: 3 }}>
            Customer Specific Details
          </Typography>
          <TextField
            label="Customer Locations"
            name="CustomerLocations"
            value={formData.CustomerLocations}
            onChange={handleChange}
            fullWidth
            margin="normal"
          />
          <TextField
            label="Other Notes"
            name="otherNotes"
            value={formData.otherNotes}
            onChange={handleChange}
            fullWidth
            margin="normal"
            multiline
            rows={3}
          />

          {/* Submit Button */}
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 2 }}
          >
            Add Customer
          </Button>
        </form>
      </Box>
    </>
  );
};

export default AddCustomer;
