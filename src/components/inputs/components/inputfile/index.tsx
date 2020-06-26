import * as React from "react";
import { Field } from "formik";
import { InputsProps } from "../../type";
import { SimpleFileUpload } from "formik-material-ui";

/**
 * @author Rony cb
 * @version 1.0.0
 * @description [!] el component Inputfile no soporta carga de multiples archivos y
 * no discrimina los tipos de archivos a seleccionar
 */

const InputFile: React.SFC<InputsProps> = (props) => {
  const { value } = props;
  return (
    <Field
      inputProps={value.inputProps}
      component={SimpleFileUpload}
      disabled={value.disabled}
      //   InputProps={{
      //     inputProps: { ...value.inputProps },
      //     type: "file",
      //   }}
      name={value.name}
      label={value.label}
    />
  );
};

export default InputFile;
