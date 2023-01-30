import { Button } from "@mui/material";

interface IButtonSubmit {
  title: string;
  isValid: boolean;
}

export const ButtonSubmit = (props: IButtonSubmit) => {
  return (
    <Button
      variant="contained"
      size="large"
      type="submit"
      disabled={props.isValid}
    >
      {props.title}
    </Button>
  );
};
