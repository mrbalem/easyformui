import * as React from "react";

import { InputsProps } from "../../type";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { Field } from "formik";
import { Select as MuiSelect } from "formik-material-ui";

/**
 * @author Rony CB
 * @param props props component select
 * @version 1.0.0
 */

const Select: React.SFC<InputsProps> = (props) => {
  const { errors, value, variant, touched, style, className } = props;

  //[*] get Error for component select values
  const getError = (
    select: Array<{ label: string; value: string }> | undefined
  ) => {
    if (!select) throw new Error("Porfavor especifique valores en select");
    return select;
  };
  return (
    <FormControl
      error={errors[value.name] && touched[value.name] ? true : undefined}
      variant={variant}
      style={{ minWidth: "100%", ...style }}
      className={className}
    >
      <InputLabel
        style={{ background: value.labelBackground }}
        shrink={value.shrink}
        htmlFor={value.name + "selectlabel"}
      >
        {value.label}
      </InputLabel>
      <Field
        component={MuiSelect}
        native={value.native}
        name={value.name}
        variant={variant}
        fullWidth
        inputProps={{
          name: `${value.name}`,
          id: value.name + "selectlabel",
        }}
        label={value.label}
      >
        {getError(value.select).map((ele, index) =>
          value.native ? (
            <option key={ele.value + index.toString()} value={ele.value}>
              {ele.label}
            </option>
          ) : (
            <MenuItem key={ele.value + index.toString()} value={ele.value}>
              {ele.label}
            </MenuItem>
          )
        )}
      </Field>
      {errors[value.name] && touched[value.name] && (
        <FormHelperText>{value.label} es un campo obligatorio</FormHelperText>
      )}
    </FormControl>
  );
};

export default Select;
