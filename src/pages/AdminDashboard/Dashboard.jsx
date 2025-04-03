import React, { useEffect, useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Grid,
  AppBar,
  Toolbar,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebase";
import { Link } from "react-router-dom";

const Dashboard = () => {
  const [preorders, setPreorders] = useState([]);
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const fetchPreorders = async () => {
      const querySnapshot = await getDocs(collection(db, "preorders"));
      const orders = querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
      setPreorders(orders);
    };

    fetchPreorders();
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ padding: 4, backgroundColor: "#e0f7fa", minHeight: "100vh" }}>
      <AppBar position="static" sx={{ backgroundColor: "#00796b" }}>
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            My Dashboard
          </Typography>
          <Link to="/login">
          <Button color="inherit">Logout</Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Box sx={{ marginTop: 2 }}>
        <Tabs value={activeTab} onChange={handleTabChange} variant="fullWidth">
          <Tab label="Preorders" />
        </Tabs>

        {activeTab === 0 && (
          <Grid container spacing={4} sx={{ marginTop: 2 }}>
            <Grid item xs={12}>
              <TableContainer component={Paper}>
                <Table>
                  <TableHead>
                    <TableRow>
                      <TableCell><strong>Company Name</strong></TableCell>
                      <TableCell><strong>Company Description</strong></TableCell>
                      <TableCell><strong>First Name</strong></TableCell>
                      <TableCell><strong>Last Name</strong></TableCell>
                      <TableCell><strong>Email</strong></TableCell>
                      <TableCell><strong>Phone</strong></TableCell>
                      <TableCell><strong>Billing Address</strong></TableCell>
                      <TableCell><strong>Address</strong></TableCell>
                      <TableCell><strong>City</strong></TableCell>
                      <TableCell><strong>State</strong></TableCell>
                      <TableCell><strong>Zip</strong></TableCell>
                      <TableCell><strong>Country</strong></TableCell>
                      <TableCell><strong>Quantity</strong></TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {preorders.map((order) => (
                      <TableRow key={order.id}>
                        <TableCell>{order.companyName}</TableCell>
                        <TableCell>{order.companyDescription}</TableCell>
                        <TableCell>{order.firstName}</TableCell>
                        <TableCell>{order.lastName}</TableCell>
                        <TableCell>{order.email}</TableCell>
                        <TableCell>{order.phone}</TableCell>
                        <TableCell>{order.billingAddress}</TableCell>
                        <TableCell>{order.address}</TableCell>
                        <TableCell>{order.city}</TableCell>
                        <TableCell>{order.state}</TableCell>
                        <TableCell>{order.zip}</TableCell>
                        <TableCell>{order.country}</TableCell>
                        <TableCell>{order.quantity}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Grid>
          </Grid>
        )}
      </Box>
    </Box>
  );
};

export default Dashboard;
