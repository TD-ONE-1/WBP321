import {
  FormGroup,
  FormControlLabel,
  Checkbox,
  Typography,
  TextField,
} from "@mui/material";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
export default function TimingSlot({ formData, setFormData }) {
  const toggle = (key, value) => {
    const list = formData.services[key];
    const updated = list.includes(value)
      ? list.filter((x) => x !== value)
      : [...list, value];

    setFormData({
      ...formData,
      services: { ...formData.services, [key]: updated },
    });
  };

  return (
    <>
      <Typography variant="h6" mt={2}>
        Operating Days
      </Typography>
      <FormGroup>
        {DAYS.map((b) => (
          <FormControlLabel
            key={b}
            control={<Checkbox onChange={() => toggle("bookingTypes", b)} />}
            label={b}
          />
        ))}
      </FormGroup>
      <div className="row">
        <div className="col-3">
          <TextField
            className="w-100"
            label="Opening Time"
            name="offers"
            type="time"
            // onChange={handleChange}
          />
        </div>
        <div className="col-3">
          <TextField
            className="w-100"
            label="Closing Time"
            name="offers"
            type="time"
            // onChange={handleChange}
          />
        </div>
        <div className="col-3">
          <TextField
            className="w-100"
            label="Slot Duration (minutes)"
            name="offers"
            type="number"
            // onChange={handleChange}
          />
        </div>
        <div className="col-3">
          <TextField
            className="w-100"
            label="Maximum Capacity (guests)"
            name="offers"
            type="number"
            // onChange={handleChange}
          />
        </div>
      </div>
    </>
  );
}
