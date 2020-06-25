import * as React from "react";
import { FormsProps, formtype } from "../forms";
import { Field } from "formik";
import {
  CheckboxWithLabel,
  TextField,
  Select,
  SimpleFileUpload,
} from "formik-material-ui";
import {
  MenuItem,
  InputLabel,
  FormControl,
  Theme,
  createStyles,
  makeStyles,
  FormHelperText,
} from "@material-ui/core";

/**
 * omit props OF FormsProps
 */

type omitpProps = Omit<FormsProps, "form" | "onSubmit" | "children">;

/**
 * @param value necesarie for getInput
 * @param erros error capture for input;
 * @param touched If touch input defaul checked errors
 */

export interface InputsProps {
  value: formtype;
  errors: any;
  touched: any;
  valuesInput: any;
}

// style
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: "100%",
      "& .MuiFormControlLabel-root": {
        justifyContent: "center",
      },
    },
  })
);

/**
 * @author Rony cb
 * @version 1.0.0
 * @param props necesary props for component
 */

const Inputs: React.SFC<InputsProps & omitpProps> = (props) => {
  const {
    value,
    InputProps,
    variant = "outlined",
    errors,
    touched,
    valuesInput,
    InputLabelProps,
  } = props;

  const classes = useStyles();

  console.log(valuesInput);

  if (value.select) {
    return (
      <FormControl
        error={errors[value.name] && touched[value.name] ? true : undefined}
        variant={variant}
        className={classes.formControl}
      >
        <InputLabel htmlFor={value.name + "selectlabel"}>
          {value.label}
        </InputLabel>
        <Field
          component={Select}
          name={value.name}
          error={errors[value.name] && touched[value.name] ? true : undefined}
          variant={variant}
          fullWidth
          inputProps={{
            name: `${value.name}`,
            id: value.name + "selectlabel",
          }}
          label={value.label}
        >
          {value.select.map((ele, index) => (
            <MenuItem key={ele.value + index.toString()} value={ele.value}>
              {ele.label}
            </MenuItem>
          ))}
        </Field>
        {errors[value.name] && touched[value.name] && (
          <FormHelperText>{value.label} es un campo obligatorio</FormHelperText>
        )}
      </FormControl>
    );
  }

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

  switch (value.type) {
    case "checkbox":
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

    /**
     *  typee file no suport for multiple and access archivos
     */

    case "file":
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

    default:
      return (
        <Field
          autoComplete={value.autoComplete}
          autoFocus={value.autoFocus}
          component={TextField}
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
  }
};

export default Inputs;
