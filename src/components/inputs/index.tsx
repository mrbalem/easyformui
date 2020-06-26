import * as React from "react";
import {
  SelectMultiple,
  CheckBox,
  InputFile,
  TextField,
  Select,
} from "./components";
import { InputsProps } from "./type";
/**
 * @author Rony cb
 * @version 1.0.0
 * @param props necesary props for component
 */

const Inputs: React.SFC<InputsProps> = (props) => {
  const { value, variant = "outlined", ...other } = props;

  /**
   * render items if value select exist.
   */
  if (value.select) {
    if (value.multipleSelect) {
      return <SelectMultiple value={value} variant={variant} {...other} />;
    }
    return <Select value={value} variant={variant} {...other} />;
  }

  switch (value.type) {
    /**
     * render input CheckBox if type is checkbox
     */
    case "checkbox":
      return <CheckBox value={value} {...other} />;

    /**
     * render input Iinfile if type es file
     */
    case "file":
      return <InputFile value={value} {...other} />;

    /**
     * render defaul Texfield input for Forms
     */
    default:
      return <TextField value={value} variant={variant} {...other} />;
  }
};

export default Inputs;
