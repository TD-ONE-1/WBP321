import { Box, Button } from "@mui/material";

export default function MediaStep({ formData, setFormData }) {
  const updateMedia = (key, value) => {
    setFormData({
      ...formData,
      media: { ...formData.media, [key]: value },
    });
  };

  return (
    <Box display="grid" gap={2}>
      <Button component="label" variant="outlined">
        Upload Logo
        <input hidden type="file" onChange={e => updateMedia("logo", e.target.files[0])} />
      </Button>

      <Button component="label" variant="outlined">
        Upload Banner
        <input hidden type="file" onChange={e => updateMedia("banner", e.target.files[0])} />
      </Button>

      <Button component="label" variant="outlined">
        Upload Gallery Images
        <input hidden type="file" multiple onChange={e => updateMedia("gallery", [...e.target.files])} />
      </Button>
    </Box>
  );
}
