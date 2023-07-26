import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

import styles from "./DashTabs.module.css";

export default function DashTabs({ tabs }) {
  return (
    <div className={styles.container}>
      <Grid className={styles.grid} container spacing={3}>
        {tabs.map((tab, index) => (
          <Grid key={index} item xs={12} md={6} lg={4}>
            <Card
              className={styles.card}
              sx={{ maxWidth: "100%" }}
              variant="outlined"
              //   onClick={() => handleClick(props.cardTitle)}
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
