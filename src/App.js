import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  CircularProgress,
} from "@mui/material";
import { api } from "./api";
import CalendarView from "./components/CalenderView";
import AppointmentsList from "./components/AppointmentLists";
import BookingForm from "./components/BookingForm";

function App() {
  const [appointments, setAppointments] = useState([]);
  const [available, setAvailable] = useState([]);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      setLoading(true);
      const [appts, avail] = await Promise.all([
        api.get("/"),
        api.get("/available"),
      ]);
      setAppointments(appts.data);
      setAvailable(avail.data);
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Container
      maxWidth="lg"
      sx={{
        my: 5,
        display: "flex",
        flexDirection: "column",
        gap: 4,
        alignItems: "center",
      }}
    >
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: 700,
          textAlign: "center",
          mb: 3,
          color: "primary.main",
        }}
      >
        Appointment Booking System
      </Typography>

      {loading ? (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 8 }}>
          <CircularProgress size={60} />
        </Box>
      ) : (
        <>
          {/* Calendar View Section */}
          <Paper
            elevation={4}
            sx={{
              width: "100%",
              borderRadius: 3,
              p: 3,
              bgcolor: "#fdfdfd",
              transition: "0.3s",
              "&:hover": { boxShadow: 8 },
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Select Available Slot
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <CalendarView available={available} onSelectSlot={setSelectedSlot} />
          </Paper>

          {/* Booking Form Section */}
          <Paper
            elevation={4}
            sx={{
              width: "100%",
              borderRadius: 3,
              p: 3,
              bgcolor: "#fdfdfd",
              transition: "0.3s",
              "&:hover": { boxShadow: 8 },
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Complete Your Booking
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <BookingForm selectedSlot={selectedSlot} onBooked={fetchData} />
          </Paper>

          {/* Appointments List Section */}
          <Paper
            elevation={4}
            sx={{
              width: "100%",
              borderRadius: 3,
              p: 3,
              bgcolor: "#fdfdfd",
              transition: "0.3s",
              "&:hover": { boxShadow: 8 },
            }}
          >
            <Typography variant="h5" gutterBottom sx={{ fontWeight: 600 }}>
              Your Upcoming Appointments
            </Typography>
            <Divider sx={{ mb: 2 }} />
            <AppointmentsList appointments={appointments} onCancel={fetchData} />
          </Paper>
        </>
      )}
    </Container>
  );
}

export default App;
