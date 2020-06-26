import { makeStyles } from "@material-ui/core/styles";

import InputStyleStyles from "./input.style";

/**
 * @author RonyCB
 * @version 1.0.0
 */
const useInputStyle = makeStyles(InputStyleStyles, {
  name: "InputStyle",
});

export { useInputStyle };
export { default } from "./input.style";
