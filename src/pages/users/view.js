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

const usersData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@example.com",
    avatar: "https://via.placeholder.com/40",
    roles: ["Administrator", "Developer"],
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@example.com",
    avatar: "https://via.placeholder.com/40",
    roles: ["Editor"],
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael.brown@example.com",
    avatar: "https://via.placeholder.com/40",
    roles: ["Developer"],
  },
];

const ViewUser = () => {
  const router = useRouter();
  const [users, setUsers] = useState(usersData);
  const [searchQuery, setSearchQuery] = useState("");
  const [roleFilter, setRoleFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  // Handle search
  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  // Handle role filter
  const handleRoleFilter = (event) => {
    setRoleFilter(event.target.value);
  };

  // Handle sorting
  const handleSort = (event) => {
    setSortOrder(event.target.value);
  };

  // Apply search, filter, and sort
  const filteredUsers = users
    .filter((user) => {
      return (
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .filter((user) => (roleFilter ? user.roles.includes(roleFilter) : true))
    .sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      if (sortOrder === "desc") return b.name.localeCompare(a.name);
      return 0;
    });

  // Handle profile redirection
  const handleProfileRedirect = (id) => {
    router.push(`/users/edit`);
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <h1>View Users</h1>

      {/* Search and Filters Box */}
      <Box sx={{ maxWidth: 800, margin: "auto", marginBottom: 2 }}>
        <Paper
          sx={{ padding: 2, display: "flex", gap: 2, alignItems: "center" }}
        >
          <TextField
            label="Search Profiles"
            name="Search Profiles"
            variant="outlined"
            fullWidth
            onChange={handleSearch}
          />
          {/* TODO:Put an option to clear search filter */}
          <Button variant="contained" onClick={() => setFilterModalOpen(true)}>
            Filters
          </Button>
        </Paper>
      </Box>

      {/* Users Table */}
      <TableContainer component={Paper} sx={{ maxWidth: 800, margin: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Roles Assigned</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredUsers.map((user) => (
              <TableRow key={user.id}>
                <TableCell>{user.name}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.roles.join(", ")}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleProfileRedirect(user.id)}
                  >
                    View Profile
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Filter Modal */}
      <Dialog open={filterModalOpen} onClose={() => setFilterModalOpen(false)}>
        <DialogTitle>Filter Profiles</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="dense">
            <InputLabel>Role</InputLabel>
            <Select
              value={roleFilter}
              onChange={handleRoleFilter}
              label="Role"
              name="Filter by Role"
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Administrator">Administrator</MenuItem>
              <MenuItem value="Developer">Developer</MenuItem>
              <MenuItem value="Editor">Editor</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth margin="dense">
            <InputLabel>Sort by Name</InputLabel>
            <Select
              value={sortOrder}
              onChange={handleSort}
              label="Sort by Name"
              name="Sort by Name"
            >
              <MenuItem value="">None</MenuItem>
              <MenuItem value="asc">A - Z</MenuItem>
              <MenuItem value="desc">Z - A</MenuItem>
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

export default ViewUser;
