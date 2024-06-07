import React from "react";
import { Box, Typography, Grid, Paper, Rating } from "@mui/material";

const MainContent = () => {
  return (
    <Box p={4}>
      <Typography variant="h4" gutterBottom>
        We back visionary companies that are changing the way we live, work, and
        play.
      </Typography>
      <Typography variant="h6" color="textSecondary" gutterBottom>
        Portfolio Companies
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "8px", textAlign: "center" }}>
            <Typography variant="h5">Infosys</Typography>
            <Rating name="read-only" value={4} readOnly />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "8px", textAlign: "center" }}>
            <Typography variant="h5">JPMorgan</Typography>
            <Rating name="read-only" value={5} readOnly />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "8px", textAlign: "center" }}>
            <Typography variant="h5">Mahindra</Typography>
            <Rating name="read-only" value={3} readOnly />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "8px", textAlign: "center" }}>
            <Typography variant="h5">Wipro</Typography>
            <Rating name="read-only" value={4} readOnly />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "8px", textAlign: "center" }}>
            <Typography variant="h5">Tata</Typography>
            <Rating name="read-only" value={3.5} readOnly />
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: "8px", textAlign: "center" }}>
            <Typography variant="h5">Accenture</Typography>
            <Rating name="read-only" value={4} readOnly />
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent;
