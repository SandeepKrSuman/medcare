import React from "react";
import { Grid } from "@mui/material";
import Navbar from "../../../Navbar/Navbar";
import styles from "./ViewFeedbacks.module.css";
import FeedbackCard from "./FeedbackCard";

const feedbacks = [
  {
    review:
      "Everything was smooth. Received best treatment. I am doing fine now.",
    rating: 5,
    email: "patient1@example.com",
  },
  {
    review: "Dr. Arya is one of the finest doctors. Most recommended.",
    rating: 4,
    email: "patient2@example.com",
  },
  {
    review:
      "Excellent service and friendly staff. Highly satisfied with the treatment.",
    rating: 5,
    email: "patient3@example.com",
  },
  {
    review:
      "The doctor patiently listened to all my concerns and provided effective solutions.",
    rating: 4,
    email: "patient4@example.com",
  },
  {
    review:
      "Great experience overall. The medical facility is clean and well-maintained.",
    rating: 4,
    email: "patient5@example.com",
  },
  {
    review:
      "I had a positive experience during my visit. The staff was courteous and attentive.",
    rating: 5,
    email: "patient6@example.com",
  },
  {
    review:
      "The treatment didn't work as expected. Disappointed with the results.",
    rating: 2,
    email: "patient7@example.com",
  },
  {
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla nec interdum neque. Curabitur eu varius est. Donec aliquet elit eu tempor pellentesque. Fusce pharetra neque vitae quam facilisis, ac lacinia elit ultricies. Pellentesque quis velit vel tortor iaculis facilisis vel et nisi. Vestibulum lobortis mi in lorem tempus, ac ultricies mi sodales.",
    rating: 1,
    email: "patient8@example.com",
  },
];

export default function ViewFeedbacks() {
  return (
    <div className={styles.container}>
      <Navbar />
      <div className={styles.cardContainer}>
        <Grid container spacing={3}>
          {feedbacks.map((feedback, index) => (
            <Grid key={index} item xs={12}>
              <FeedbackCard feedback={feedback} />
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
}
