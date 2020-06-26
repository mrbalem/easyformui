import * as React from "react";
import { InputsProps } from "../../type";
import { FormControl, FormHelperText } from "@material-ui/core";
import { Field } from "formik";
import { CheckboxWithLabel } from "formik-material-ui";
import { useInputStyle } from "../style";

/**
 * @author Rony cb
 * @version 1.0.0
 * @param props for Component CheckBox
 */

const CheckBox: React.SFC<InputsProps> = (props) => {
  const { errors, value, touched } = props;
  const classes = useInputStyle();
  return (
    <FormControl
      component="fieldset"
      required
      error={errors[value.name] && touched[value.name] ? true : undefined}
      className={classes.formControl}
    >
      <Field
        component={CheckboxWithLabel}
        type={value.type}
        disabled={value.disabled}
        //required={value.required}
        Label={{ label: value.label }}
        name={value.name}
      />
      {errors[value.name] && touched[value.name] && (
        <FormHelperText style={{ textAlign: "center" }}>
          {value.messageValidation ||
            `El campo ${value.name} debe estar marcado *`}
        </FormHelperText>
      )}
    </FormControl>
  );
};

export default CheckBox;
