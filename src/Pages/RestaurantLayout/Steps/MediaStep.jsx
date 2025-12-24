import { Box, Button } from "@mui/material";

export default function MediaStep({ formData, setFormData }) {
  const updateMedia = (key, value) => {
    setFormData({
      ...formData,
      media: { ...formData.media, [key]: value },
    });
  };

  return (
    <Box display="grid">
      <p>Restaurant Logo</p>
      <Button component="label" variant="outlined">
        Upload Image
        <input
          hidden
          type="file"
          onChange={(e) => updateMedia("logo", e.target.files[0])}
        />
      </Button>
      <p className="mt-2">Banner / Thumbnail Image</p>
      <Button component="label" variant="outlined">
        Upload Image
        <input
          hidden
          type="file"
          onChange={(e) => updateMedia("banner", e.target.files[0])}
        />
      </Button>
      <p className="mt-2">Gallery Images (Multiple)</p>
      <Button component="label" variant="outlined">
        Upload Image
        <input
          hidden
          type="file"
          multiple
          onChange={(e) => updateMedia("gallery", [...e.target.files])}
        />
      </Button>
    </Box>
  );
}
