import React, { useState } from "react";
import SearchUser from "../../../SearchUser/SearchUser";
import MakePayment from "../../Patient/MakePayment/MakePayment";

export default function MakePaymentStaff() {
  const [userFound, setUserFound] = useState(false);

  return userFound ? (
    <MakePayment />
  ) : (
    <SearchUser setUserFound={setUserFound} />
  );
}
