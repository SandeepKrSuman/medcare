import React, { useState } from "react";
import SearchUser from "../../../SearchUser/SearchUser";
import BookAppointment from "./BookAppointment";

export default function BookAppointmentStaff() {
  const [userFound, setUserFound] = useState(false);
  const [patid, setPatid] = useState("");
  const [patname, setPatname] = useState("");

  return userFound ? (
    <BookAppointment patid={patid} patname={patname} />
  ) : (
    <SearchUser
      heading="Book Appointment"
      setUserFound={setUserFound}
      setPatid={setPatid}
      setPatname={setPatname}
    />
  );
}
