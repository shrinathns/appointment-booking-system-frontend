import React, { useState } from "react";
import { TextField, Button, Paper, Typography, Alert, Box } from "@mui/material";
import { api } from "../api";

const BookingForm = ({ selectedSlot, onBooked }) => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", reason: "" });
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(null);

  if (!selectedSlot) {
    return <Typography>Select a time slot to book an appointment.</Typography>;
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setMessage(null);

    if (!form.name || !form.email) {
      setError("Name and Email are required");
      return;
    }

    try {
      await api.post("/", { ...form, ...selectedSlot });
      setMessage("Appointment booked successfully!");
      setForm({ name: "", email: "", phone: "", reason: "" });
      onBooked();
    } catch (err) {
      setError(err.response?.data?.error || "Failed to book appointment");
    }
  };

  return (
    <Paper sx={{ p: 3, mb: 4 }}>
      <Typography variant="h5" gutterBottom>
        Book Appointment
      </Typography>
      <Typography variant="body1" gutterBottom>
        {new Date(selectedSlot.date).toLocaleDateString()} at {selectedSlot.time}
      </Typography>

      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      {message && <Alert severity="success" sx={{ mb: 2 }}>{message}</Alert>}

      <Box component="form" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          required
          sx={{ mb: 2 }}
          value={form.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          required
          sx={{ mb: 2 }}
          type="email"
          value={form.email}
          onChange={handleChange}
        />
        <TextField
          label="Phone"
          name="phone"
          fullWidth
          sx={{ mb: 2 }}
          value={form.phone}
          onChange={handleChange}
        />
        <TextField
          label="Reason / Notes"
          name="reason"
          fullWidth
          multiline
          rows={2}
          inputProps={{ maxLength: 200 }}
          sx={{ mb: 2 }}
          value={form.reason}
          onChange={handleChange}
        />
        <Button type="submit" variant="contained" color="primary">
          Confirm Booking
        </Button>
      </Box>
    </Paper>
  );
};

export default BookingForm;
