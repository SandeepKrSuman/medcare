import React from "react";
import { useNavigate } from "react-router-dom";
import { Grid, Card, CardContent, Typography } from "@mui/material";

import styles from "./DashTabs.module.css";

export default function DashTabs({ tabs }) {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <Grid className={styles.grid} container spacing={3}>
        {tabs.map((tab, index) => (
          <Grid key={index} item xs={12} md={6} lg={4}>
            <Card
              className={styles.card}
              sx={{ maxWidth: "100%" }}
              variant="outlined"
              onClick={() => navigate(tab.redirect)}
            >
              <CardContent>
                <br /> <br />
                <Typography variant="h4" component="div">
                  {tab.title}
                </Typography>
                <br /> <br />
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
