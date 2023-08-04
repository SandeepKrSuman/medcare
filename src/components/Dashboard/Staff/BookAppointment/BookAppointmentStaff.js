import React, { useState } from "react";
import SearchUser from "../../../SearchUser/SearchUser";
import BookAppointment from "../../Patient/BookAppointment/BookAppointment";

export default function BookAppointmentStaff() {
  const [userFound, setUserFound] = useState(false);

  return userFound ? (
    <BookAppointment />
  ) : (
    <SearchUser setUserFound={setUserFound} />
  );
}
