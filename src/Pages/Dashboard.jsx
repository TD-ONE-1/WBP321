import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import api from "../Utils/api";
import { Card, CardContent } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Typography,
  Box
} from '@mui/material';

export default function Dashboard() {
  const [reservationCount, setReservationCount] = useState({
    totalReservationCount: 0,
    confirmReservationCount: 0,
    pendingReservationCount: 0,
  });
 const rows = [
    { id: 1, name: 'John Doe', age: "25", department: 'Engineering', salary: '$75,000' },
    { id: 2, name: 'Jane Smith', age: "28", department: 'Marketing', salary: '$65,000' },
    { id: 3, name: 'Bob Johnson', age: "35", department: 'Sales', salary: '$85,000' },
    { id: 4, name: 'Alice Brown', age: "32", department: 'HR', salary: '$60,000' },
    { id: 5, name: 'Charlie Wilson', age: "40", department: 'Engineering', salary: '$95,000' },
  ];

  const getReservationCount = async () => {
    try {
      const response = await api.get("Dashboard/GetReservationCount");
      setReservationCount(response.data);
    } catch (error) {
      console.error("Error fetching reservation count:", error);
    }
  };

  useEffect(() => {
    getReservationCount();
  }, []);

  return (
    <div className="container-fluid p-4 bg-light min-vh-100">
      <div className="dashHeading">Dashboard</div>
      <div className="row g-3 mb-4">
        <div className="col-lg-7 col-md-12">
          <div className="row g-3">
            <div className="col-md-4">
              <Card elevation={3} className="rounded-4">
                <CardContent>
                  <h6 className="text-muted">Total Reservations</h6>
                  <h2 className="fw-bold">
                    {reservationCount?.totalReservationCount}
                  </h2>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-4">
              <Card elevation={3} className="rounded-4">
                <CardContent>
                  <h6 className="text-muted">Total Events</h6>
                  <h2 className="fw-bold">
                    {reservationCount?.totalReservationCount}
                  </h2>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-4">
              <Card elevation={3} className="rounded-4">
                <CardContent>
                  <h6 className="text-muted">Confirmed Reservations</h6>
                  <h2 className="fw-bold">
                    {reservationCount?.confirmReservationCount}
                  </h2>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-4">
              <Card elevation={3} className="rounded-4">
                <CardContent>
                  <h6 className="text-muted">Confirmed Events</h6>
                  <h2 className="fw-bold">
                    {reservationCount?.totalReservationCount}
                  </h2>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-4">
              <Card elevation={3} className="rounded-4">
                <CardContent>
                  <h6 className="text-muted">Pending Reservations</h6>
                  <h2 className="fw-bold">
                    {reservationCount?.pendingReservationCount}
                  </h2>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-4">
              <Card elevation={3} className="rounded-4">
                <CardContent>
                  <h6 className="text-muted">Pending Events</h6>
                  <h2 className="fw-bold">
                    {reservationCount?.pendingReservationCount}
                  </h2>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-4">
              <Card elevation={3} className="rounded-4">
                <CardContent>
                  <h6 className="text-muted">Cancelled Reservations</h6>
                  <h2 className="fw-bold">
                    {reservationCount?.pendingReservationCount}
                  </h2>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-4">
              <Card elevation={3} className="rounded-4">
                <CardContent>
                  <h6 className="text-muted">Cancelled Events</h6>
                  <h2 className="fw-bold">
                    {reservationCount?.totalReservationCount}
                  </h2>
                </CardContent>
              </Card>
            </div>
            <div className="col-md-4">
              <Card elevation={3} className="rounded-4">
                <CardContent>
                  <h6 className="text-muted">Customer Reviews</h6>
                  <h2 className="fw-bold">
                    {reservationCount?.totalReservationCount}
                  </h2>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        <div className="col-lg-5 col-md-12">
          <Card elevation={3} className="rounded-4">
            <CardContent>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </CardContent>
          </Card>
        </div>
      </div>
      <div className="row g-4 mb-4">
        <div className="col-12 bg-white">
          <Box sx={{ p: 1 }}>
            <Typography variant="h5" gutterBottom>
              Recent Bookings
            </Typography>

            <TableContainer component={Paper} sx={{ maxHeight: 400 }}>
              <Table stickyHeader aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell>Reservation Date</TableCell>
                    <TableCell>Client Name</TableCell>
                    <TableCell align="right">Reservation Members</TableCell>
                    <TableCell>Reservation Type</TableCell>
                    <TableCell align="right">Slot</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.id}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.id}
                      </TableCell>
                      <TableCell>{row.name}</TableCell>
                      <TableCell align="right">{row.age}</TableCell>
                      <TableCell>{row.department}</TableCell>
                      <TableCell align="right">{row.salary}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Box>
        </div>
      </div>
    </div>
  );
}
