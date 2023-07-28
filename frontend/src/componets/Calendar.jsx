import * as React from "react";
import dayjs from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { StaticDatePicker } from "@mui/x-date-pickers/StaticDatePicker";

const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};

export default function Calendar() {
  const [value, setValue] = React.useState(dayjs("2022-04-07"));

  return (
    // <LocalizationProvider dateAdapter={AdapterDayjs}>
    //   <StaticDatePicker
    //     orientation="potrait"
    //     openTo="day"
    //     value={value}
    //     shouldDisableDate={isWeekend}
    //     onChange={(newValue) => {
    //       setValue(newValue);
    //     }}
    //     renderInput={(params) => <TextField {...params} />}
    //   />
    // </LocalizationProvider>
    <></>
  );
}
