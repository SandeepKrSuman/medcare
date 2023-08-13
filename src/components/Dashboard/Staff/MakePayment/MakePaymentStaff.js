import React, { useEffect, useState } from "react";
import SearchUser from "../../../SearchUser/SearchUser";
import { useSearchParams } from "react-router-dom";
import MakePayment from "./MakePayment";

export default function MakePaymentStaff() {
  const [searchParams] = useSearchParams();
  const [patid, setPatid] = useState("");
  const [patname, setPatname] = useState("");
  const [userFound, setUserFound] = useState(false);

  useEffect(() => {
    const pid = searchParams.get("patid");
    setPatid(pid || "");
  }, [searchParams]);

  return patid || userFound ? (
    <MakePayment patid={patid} patname={patname} />
  ) : (
    <SearchUser
      heading="Make Payment"
      setUserFound={setUserFound}
      setPatid={setPatid}
      setPatname={setPatname}
    />
  );
}
