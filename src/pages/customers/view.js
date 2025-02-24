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

const customersData = [
  {
    id: 1,
    name: "Acme Corp",
    contactPerson: "Alice Johnson",
    email: "alice@acmecorp.com",
    industry: "Manufacturing",
  },
  {
    id: 2,
    name: "Tech Solutions",
    contactPerson: "Bob Smith",
    email: "bob@techsolutions.com",
    industry: "IT Services",
  },
  {
    id: 3,
    name: "Green Energy Ltd",
    contactPerson: "Charlie Brown",
    email: "charlie@greenenergy.com",
    industry: "Renewable Energy",
  },
];

const ViewCustomers = () => {
  const router = useRouter();
  const [customers, setCustomers] = useState(customersData);
  const [searchQuery, setSearchQuery] = useState("");
  const [industryFilter, setIndustryFilter] = useState("");
  const [sortOrder, setSortOrder] = useState("");
  const [filterModalOpen, setFilterModalOpen] = useState(false);

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleIndustryFilter = (event) => {
    setIndustryFilter(event.target.value);
  };

  const handleSort = (event) => {
    setSortOrder(event.target.value);
  };

  const filteredCustomers = customers
    .filter((customer) => {
      return (
        customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchQuery.toLowerCase())
      );
    })
    .filter((customer) =>
      industryFilter ? customer.industry === industryFilter : true
    )
    .sort((a, b) => {
      if (sortOrder === "asc") return a.name.localeCompare(b.name);
      if (sortOrder === "desc") return b.name.localeCompare(a.name);
      return 0;
    });

  const handleProfileRedirect = (id) => {
    router.push(`/customers/edit`);
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <h1>View Customers</h1>

      <Box sx={{ maxWidth: 800, margin: "auto", marginBottom: 2 }}>
        <Paper
          sx={{ padding: 2, display: "flex", gap: 2, alignItems: "center" }}
        >
          <TextField
            label="Search Customers"
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
              <TableCell>Customer Name</TableCell>
              <TableCell>Contact Person</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Industry</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredCustomers.map((customer) => (
              <TableRow key={customer.id}>
                <TableCell>{customer.name}</TableCell>
                <TableCell>{customer.contactPerson}</TableCell>
                <TableCell>{customer.email}</TableCell>
                <TableCell>{customer.industry}</TableCell>
                <TableCell>
                  <Button
                    variant="outlined"
                    size="small"
                    onClick={() => handleProfileRedirect(customer.id)}
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
        <DialogTitle>Filter Customers</DialogTitle>
        <DialogContent>
          <FormControl fullWidth margin="dense">
            <InputLabel>Industry</InputLabel>
            <Select
              value={industryFilter}
              label="Industry"
              onChange={handleIndustryFilter}
            >
              <MenuItem value="">All</MenuItem>
              <MenuItem value="Manufacturing">Manufacturing</MenuItem>
              <MenuItem value="IT Services">IT Services</MenuItem>
              <MenuItem value="Renewable Energy">Renewable Energy</MenuItem>
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

export default ViewCustomers;
