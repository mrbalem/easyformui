import { Theme, createStyles } from "@material-ui/core";

// style componetns inputs
const InputStyleStyles = (theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
      "& .MuiFormControlLabel-root": {
        justifyContent: "center",
      },
    },
    chips: {
      display: "flex",
      flexWrap: "wrap",
    },
    chip: {
      margin: 2,
    },
  });

export default InputStyleStyles;
