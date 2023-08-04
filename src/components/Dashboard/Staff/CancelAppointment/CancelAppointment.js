import React, { useState } from "react";
import SearchUser from "../../../SearchUser/SearchUser";
import MyAppointments from "../../Patient/MyAppointments/MyAppointments";

export default function CancelAppointment() {
  const [userFound, setUserFound] = useState(false);

  return userFound ? (
    <MyAppointments />
  ) : (
    <SearchUser setUserFound={setUserFound} />
  );
}
