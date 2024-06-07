import React from "react";
import { Grid, Paper, Typography, Box } from "@mui/material";

const companies = [
  { name: "Infosys", logo: require("../images/infosys.png")},
  { name: "Wipro", logo: require("../images/wipro.png")},
  { name: "JPMorgan", logo: require("../images/jp morgan.png")},
  { name: "Mahindra", logo: require("../images/Mahindra.png")},
  { name: "Tata", logo: require("../images/Tata.png")},
  { name: "Accenture", logo: require("../images/Accenture.png")},

];

const FeaturedCompanies = () => {
  return (
    <Box p={4} bgcolor="#f8f8f8">
      <Typography variant="h6" gutterBottom>
        Featured
      </Typography>
      <Grid container spacing={3}>
        {companies.map((company) => (
          <Grid item xs={12} sm={6} md={3} key={company.name}>
            <Paper
              elevation={3}
              style={{ padding: "16px", textAlign: "center" }}
            >
              <Box
                component="img"
                src={company.logo}
                alt={company.name}
                width="100%"
                height="100px"
              />
              <Typography variant="subtitle1" gutterBottom>
                {company.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeaturedCompanies;
