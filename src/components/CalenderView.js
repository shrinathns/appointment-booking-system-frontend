import React from "react";
import { Grid, Paper, Typography, Button, Box } from "@mui/material";

const CalendarView = ({ available, onSelectSlot }) => {
  if (!available || available.length === 0)
    return <Typography>Loading...</Typography>;

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h5" gutterBottom align="center">
        Available Calendar
      </Typography>

      <Grid container spacing={2} justifyContent="center">
        {available.map((day) => (
          <Grid item xs={12} sm={6} md={2.4} key={day.day}>
            <Paper
              elevation={3}
              sx={{
                p: 1.5,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 3,
              }}
            >
              {/* Date Header */}
              <Typography
                variant="subtitle2"
                align="center"
                sx={{
                  bgcolor: "#1976d2",
                  color: "#fff",
                  px: 1.5,
                  py: 0.5,
                  borderRadius: 2,
                  mb: 1,
                  width: "100%",
                }}
              >
                {new Date(day.day).toLocaleDateString("en-US", {
                  weekday: "short",
                  month: "short",
                  day: "numeric",
                })}
              </Typography>

              {/* Slots */}
              <Box
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(2, 1fr)",
                  gap: 0.5,
                  width: "100%",
                }}
              >
                {day.slots.map((slot) => (
                  <Button
                    key={slot.time}
                    variant={slot.available ? "outlined" : "contained"}
                    color={slot.available ? "primary" : "secondary"}
                    size="small"
                    disabled={!slot.available}
                    onClick={() =>
                      onSelectSlot({ date: day.day, time: slot.time })
                    }
                  >
                    {slot.time}
                  </Button>
                ))}
              </Box>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CalendarView;
