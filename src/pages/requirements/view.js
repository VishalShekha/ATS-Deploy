import { useState } from "react";
import Header from "../../components/header";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  TextField,
  Select,
  FormControl,
  InputLabel,
  MenuItem,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Box,
} from "@mui/material";
import { useRouter } from "next/navigation";

const requirementsData = [
  {
    id: 1,
    client: "ABC Corp",
    requirementName: "Software Engineer",
    jobTitle: "Frontend Developer",
    jobLocation: "New York",
    jobWorkspace: "Hybrid",
    jobType: "Permanent",
    status: "Active",
  },
  {
    id: 2,
    client: "XYZ Ltd",
    requirementName: "Project Manager",
    jobTitle: "Senior Project Manager",
    jobLocation: "San Francisco",
    jobWorkspace: "WFH",
    jobType: "Contract",
    status: "Hold",
  },
];

const ViewRequirement = () => {
  const router = useRouter();
  const [requirements, setRequirements] = useState(requirementsData);
  const [searchQuery, setSearchQuery] = useState("");
  const [jobTypeFilter, setJobTypeFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleJobTypeFilter = (event) => {
    setJobTypeFilter(event.target.value);
  };

  const handleStatusFilter = (event) => {
    setStatusFilter(event.target.value);
  };

  const filteredRequirements = requirements
    .filter((req) =>
      req.requirementName.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((req) => (jobTypeFilter ? req.jobType === jobTypeFilter : true))
    .filter((req) => (statusFilter ? req.status === statusFilter : true));

  const handleViewDetails = (id) => {
    router.push(`/requirements/edit/${id}`);
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <h1>View Requirements</h1>
      <Box sx={{ maxWidth: 800, margin: "auto", marginBottom: 2 }}>
        <Paper
          sx={{ padding: 2, display: "flex", gap: 2, alignItems: "center" }}
        >
          <TextField
            label="Search Requirements"
            variant="outlined"
            fullWidth
            onChange={handleSearch}
          />
          <Button variant="contained" onClick={() => setFilterModalOpen(true)}>
            Filters
          </Button>
        </Paper>
      </Box>
      <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Client</TableCell>
              <TableCell>Requirement Name</TableCell>
              <TableCell>Job Title</TableCell>
              <TableCell>Job Location</TableCell>
              <TableCell>Job Type</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRequirements.map((req) => (
              <TableRow key={req.id}>
                <TableCell>{req.client}</TableCell>
                <TableCell>{req.requirementName}</TableCell>
                <TableCell>{req.jobTitle}</TableCell>
                <TableCell>{req.jobLocation}</TableCell>
                <TableCell>{req.jobType}</TableCell>
                <TableCell>{req.status}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleViewDetails(req.id)}
                  >
                    View Details
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={filterModalOpen} onClose={() => setFilterModalOpen(false)}>
        <DialogTitle>Filter Requirements</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="dense">
            <InputLabel>Job Type</InputLabel>
            <Select
              value={jobTypeFilter}
              label="Job Type"
              name="JobType"
              onChange={handleJobTypeFilter}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Contract">Contract</MenuItem>
              <MenuItem value="Permanent">Permanent</MenuItem>
            </Select>
          </FormControl>
          <FormControl fullWidth margin="dense">
            <InputLabel>Status</InputLabel>
            <Select
              value={statusFilter}
              label="Status"
              name="Status"
              onChange={handleStatusFilter}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Active">Active</MenuItem>
              <MenuItem value="Hold">Hold</MenuItem>
              <MenuItem value="Closed">Closed</MenuItem>
              <MenuItem value="Lost">Lost</MenuItem>
              <MenuItem value="Internally Closed">Internally Closed</MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFilterModalOpen(false)}>Cancel</Button>
          <Button onClick={() => setFilterModalOpen(false)} variant="contained">
            Apply Filters
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default ViewRequirement;
