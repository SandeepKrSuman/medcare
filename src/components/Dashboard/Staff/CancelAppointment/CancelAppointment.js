import React, { useState } from "react";
import SearchUser from "../../../SearchUser/SearchUser";
import Appointments from "./Appointments";

export default function CancelAppointment() {
  const [userFound, setUserFound] = useState(false);
  const [patid, setPatid] = useState("");
  const [patname, setPatname] = useState("");

  return userFound ? (
    <Appointments patid={patid} patname={patname} />
  ) : (
    <SearchUser
      heading="Cancel Appointment"
      setUserFound={setUserFound}
      setPatid={setPatid}
      setPatname={setPatname}
    />
  );
}
