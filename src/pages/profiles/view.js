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
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { useRouter } from "next/navigation";

const profilesData = [
  {
    id: 1,
    name: "John Doe",
    email: "john@example.com",
    location: "Bangalore",
    experience: "5 Years",
    requirement: "Frontend Developer",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane@example.com",
    location: "Hyderabad",
    experience: "3 Years",
    requirement: "Backend Developer",
  },
  {
    id: 3,
    name: "Michael Johnson",
    email: "michael@example.com",
    location: "Chennai",
    experience: "7 Years",
    requirement: "Full Stack Developer",
  },
];

const ViewProfiles = () => {
  const router = useRouter();
  const [profiles, setProfiles] = useState(profilesData);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterModalOpen, setFilterModalOpen] = useState(false);
  const [filters, setFilters] = useState({
    location: "",
    experience: "",
    requirement: "",
  });

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilters({ ...filters, [event.target.name]: event.target.value });
  };

  const applyFilters = () => {
    setFilterModalOpen(false);
  };

  const filteredProfiles = profiles
    .filter(
      (profile) =>
        profile.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        profile.email.toLowerCase().includes(searchQuery.toLowerCase())
    )
    .filter((profile) =>
      filters.location ? profile.location === filters.location : true
    )
    .filter((profile) =>
      filters.experience ? profile.experience === filters.experience : true
    )
    .filter((profile) =>
      filters.requirement ? profile.requirement === filters.requirement : true
    );

  const handleProfileRedirect = (id) => {
    router.push(`/profiles/edit`);
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <h1>View Profiles</h1>

      <Paper
        sx={{
          padding: 2,
          display: "flex",
          gap: 2,
          alignItems: "center",
          maxWidth: 800,
          margin: "auto",
          marginBottom: 2,
        }}
      >
        <TextField
          label="Search Profiles"
          name="SearchProfiles"
          variant="outlined"
          fullWidth
          onChange={handleSearch}
        />
        <Button variant="contained" onClick={() => setFilterModalOpen(true)}>
          Filters
        </Button>
      </Paper>

      <Dialog open={filterModalOpen} onClose={() => setFilterModalOpen(false)}>
        <DialogTitle>Filter Profiles</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="dense">
            <InputLabel>Location</InputLabel>
            <Select
              label="location"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Bangalore">Bangalore</MenuItem>
              <MenuItem value="Hyderabad">Hyderabad</MenuItem>
              <MenuItem value="Chennai">Chennai</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <InputLabel>Experience</InputLabel>
            <Select
              label="experience"
              name="experience"
              value={filters.experience}
              onChange={handleFilterChange}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="3 Years">3 Years</MenuItem>
              <MenuItem value="5 Years">5 Years</MenuItem>
              <MenuItem value="7 Years">7 Years</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <InputLabel>Requirement</InputLabel>
            <Select
              label="requirement-"
              name="requirement"
              value={filters.requirement}
              onChange={handleFilterChange}
            >
              <MenuItem value="All">All</MenuItem>
              <MenuItem value="Frontend Developer">Frontend Developer</MenuItem>
              <MenuItem value="Backend Developer">Backend Developer</MenuItem>
              <MenuItem value="Full Stack Developer">
                Full Stack Developer
              </MenuItem>
            </Select>
          </FormControl>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setFilterModalOpen(false)}>Cancel</Button>
          <Button onClick={applyFilters} variant="contained">
            Apply Filters
          </Button>
        </DialogActions>
      </Dialog>

      <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Candidate Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Location</TableCell>
              <TableCell>Experience</TableCell>
              <TableCell>Requirement</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredProfiles.map((profile) => (
              <TableRow key={profile.id}>
                <TableCell>{profile.name}</TableCell>
                <TableCell>{profile.email}</TableCell>
                <TableCell>{profile.location}</TableCell>
                <TableCell>{profile.experience}</TableCell>
                <TableCell>{profile.requirement}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleProfileRedirect(profile.id)}
                  >
                    View Profile
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ViewProfiles;
