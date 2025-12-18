import "bootstrap/dist/css/bootstrap.min.css";
import { Card, CardContent, Button } from "@mui/material";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
const reservationTrend = [
  { day: "Mon", count: 12 },
  { day: "Tue", count: 18 },
  { day: "Wed", count: 10 },
  { day: "Thu", count: 22 },
  { day: "Fri", count: 30 },
  { day: "Sat", count: 40 },
  { day: "Sun", count: 28 },
];

const reservationStatus = [
  { name: "Confirmed", value: 65 },
  { name: "Pending", value: 20 },
  { name: "Cancelled", value: 15 },
];

const COLORS = ["#1976d2", "#ff9800", "#d32f2f"];

export default function Dashboard() {
  return (
    <div className="container-fluid p-4 bg-light min-vh-100">
      <div className="row g-4 mb-4">
        <div className="col-md-8">
          <Card elevation={3} className="rounded-4 h-100">
            <CardContent>
              <h6 className="fw-semibold mb-3">Weekly Reservation Trend</h6>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={reservationTrend}>
                  <XAxis dataKey="day" />
                  <YAxis />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="count"
                    stroke="#1976d2"
                    strokeWidth={3}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
        <div className="col-4">
          <div className="col-md-12">
            <Card elevation={3} className="rounded-4">
              <CardContent>
                <h6 className="text-muted">Total Reservations</h6>
                <h2 className="fw-bold">245</h2>
              </CardContent>
            </Card>
          </div>
          <div className="col-12 mt-3">
            <Card elevation={3} className="rounded-4">
              <CardContent>
                <h6 className="text-muted">Today</h6>
                <h2 className="fw-bold">18</h2>
              </CardContent>
            </Card>
          </div>
          <div className="col-12 mt-3">
            <Card elevation={3} className="rounded-4">
              <CardContent>
                <h6 className="text-muted">Cancelled</h6>
                <h2 className="fw-bold">12</h2>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      <div className="row g-4 mb-4">
        <div className="col-md-8">
          <Card elevation={3} className="rounded-4">
            <CardContent>
              <h6 className="fw-semibold mb-3">Reservation Calendar</h6>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DateCalendar />
              </LocalizationProvider>
            </CardContent>
          </Card>
        </div>
        <div className="col-md-4">
          <Card elevation={3} className="rounded-4 h-100">
            <CardContent>
              <h6 className="fw-semibold mb-3">Reservation Status</h6>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={reservationStatus}
                    dataKey="value"
                    outerRadius={90}
                    label
                  >
                    {reservationStatus.map((entry, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
