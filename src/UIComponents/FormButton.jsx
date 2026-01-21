import { Button } from "@mui/material";

const FormButton = ({ onClick, loading = false, text = "Submit", type = "button", sx = {} }) => {
  return (
    <Button
      fullWidth
      variant="contained"
      onClick={onClick}
      type={type}
      disabled={loading}
      className="CustomButton"
    >
      {loading ? `${text}` : text}
    </Button>
  );
};

export default FormButton;
