import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

export default function DateSelector(props) {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Appointment Date"
        format="dd/MM/yyyy"
        value={props.currDate}
        disablePast
        onChange={(dt) => props.setCurrDate(dt)}
        slotProps={{
          textField: { variant: "outlined", helperText: "dd/mm/yyyy" },
        }}
      />
    </LocalizationProvider>
  );
}
