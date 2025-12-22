import { FormGroup, FormControlLabel, Checkbox, Typography } from "@mui/material";

const OFFERS = ["Breakfast", "Lunch", "Dinner"];
const BOOKINGS = ["Table", "Private"];

export default function ServicesStep({ formData, setFormData }) {
  const toggle = (key, value) => {
    const list = formData.services[key];
    const updated = list.includes(value)
      ? list.filter(x => x !== value)
      : [...list, value];

    setFormData({
      ...formData,
      services: { ...formData.services, [key]: updated },
    });
  };

  return (
    <>
      <Typography variant="h6">Offers</Typography>
      <FormGroup>
        {OFFERS.map(o => (
          <FormControlLabel
            key={o}
            control={<Checkbox onChange={() => toggle("offers", o)} />}
            label={o}
          />
        ))}
      </FormGroup>

      <Typography variant="h6" mt={2}>Booking Types</Typography>
      <FormGroup>
        {BOOKINGS.map(b => (
          <FormControlLabel
            key={b}
            control={<Checkbox onChange={() => toggle("bookingTypes", b)} />}
            label={b}
          />
        ))}
      </FormGroup>
    </>
  );
}
