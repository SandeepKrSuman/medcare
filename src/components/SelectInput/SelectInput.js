import { Box, InputLabel, Select, MenuItem } from "@mui/material";

export default function SelectInput(props) {
  return (
    <Box
      component="div"
      sx={{
        alignSelf: "self-start",
        marginBottom: "10px",
      }}
    >
      <InputLabel id="select">{props.label}</InputLabel>
      <Select
        labelId="select"
        id="select"
        label={props.label}
        value={props.value}
        name="select"
        onChange={(event) => props.setValue(event.target.value)}
      >
        <MenuItem value={props.options[0]} selected>
          {props.options[0]}
        </MenuItem>

        {props.options.slice(1).map((option, index) => (
          <MenuItem key={index} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </Box>
  );
}
