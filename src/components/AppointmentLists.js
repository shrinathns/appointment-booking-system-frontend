import React from "react";
import { Paper, Typography, List, ListItem, ListItemText, Button, Stack } from "@mui/material";
import { api } from "../api";

const AppointmentsList = ({ appointments, onCancel }) => {
  const handleCancel = async (id) => {
    await api.delete(`/${id}`);
    onCancel();
  };

  if (!appointments || appointments.length === 0)
    return (
      <Paper sx={{ p: 2 }}>
        <Typography>No appointments booked yet.</Typography>
      </Paper>
    );

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h5" gutterBottom>
        Upcoming Appointments
      </Typography>
      <List>
        {appointments.map((appt) => {
          const [date, time] = appt.dateTime.split("T");
          return (
            <ListItem key={appt.id} divider>
              <ListItemText
                primary={`${new Date(date).toLocaleDateString()} ${time}`}
                secondary={`${appt.name} — ${appt.reason || "No reason provided"}`}
              />
              <Stack direction="row" spacing={1}>
                <Button variant="outlined" color="error" onClick={() => handleCancel(appt.id)}>
                  Cancel
                </Button>
              </Stack>
            </ListItem>
          );
        })}
      </List>
    </Paper>
  );
};

export default AppointmentsList;
