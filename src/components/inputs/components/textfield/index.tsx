import * as React from "react";
import { InputsProps } from "../../type";
import { Field } from "formik";
import { TextField as MuiTextField } from "formik-material-ui";

/**
 * @version 1.0.0
 * @author Rony CB
 */
const TextField: React.SFC<InputsProps> = (props) => {
  const {
    value,
    errors,
    touched,
    variant,
    InputProps,
    InputLabelProps,
  } = props;

  /**
   *@param multiline determina el estado de multina
   *@param rows determina el estado de rows
   *@description esta funcion determina el estado del error de multiline verficiando los 2 parametros de entrada
   */
  const _captureHandleErrorMultiline = (
    multiline: boolean | undefined,
    rows: number | undefined
  ) => {
    if (multiline) {
      if (rows && rows > 1) return true;
      else
        throw new Error(
          "Por favor establesca el numero de filas a mostrar, el numero de filas tiene que ser mayor a 1.su número de fila es: " +
            rows
        );
    } else {
      return undefined;
    }
  };

  return (
    <Field
      autoComplete={value.autoComplete}
      autoFocus={value.autoFocus}
      component={MuiTextField}
      name={value.name}
      inputRef={value.inputRef}
      disabled={value.disabled}
      type={value.type}
      multiline={_captureHandleErrorMultiline(value.multiline, value.rows)}
      rows={value.rows}
      inputProps={value.inputProps}
      InputProps={InputProps}
      InputLabelProps={{
        shrink: value.shrink,
        ...InputLabelProps,
      }}
      error={errors[value.name] && touched[value.name] ? true : undefined}
      fullWidth
      variant={variant}
      label={value.label}
    />
  );
};

export default TextField;
