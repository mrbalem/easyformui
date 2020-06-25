import * as React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Grid, MenuItem } from "@material-ui/core";
import { TextField } from "formik-material-ui";

/**
 * @type form
 * @description especifica los valores nesarios para el funcionamiento del formulario. *
 * @param inputProps Atributos aplicados al inputelemento. mas info --->  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes
 */
type formtype = {
  /**
   * @param name
   * @description Name attribute of the input element.
   */
  name: string;
  /**
   * @param label
   * @description The label content.
   */
  label: string;
  /**
   * @param md
   * @param xs
   * @description Defines the number of grids the component is going to use. It's applied for the md breakpoint and wider screens if not overridden.
   */
  md: "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; // especifica el tamaños del input a ocupar.
  xs?: "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
  /**
   * @param title
   * @description Title atrtibute of the input element
   */
  title?: string;
  /**
   * @param initialValue
   * @description The default value of the input element.
   */
  initialValue?: any;
  /**
   * @param required
   * @description If true, the label is displayed as required and the input element` will be required.
   */
  required?: true;
  /**
   * @param messageRequired
   * @description Show message if is requerid
   */
  messageRequired?: string;
  /**
   * @param validation
   * @description validation for the input default. suport "email", "text", "password", "tel";
   */
  validation?: true;
  /**
   * @param messageValidation
   * @description Show message if is Validation
   */
  messageValidation?: string;
  /**
   * @param disabled
   * @description If true, the input element will be disabled.
   */
  disabled?: true;
  /**
   * @param multiline
   * @description  If true, a textarea element will be rendered instead of an input.
   */
  multiline?: true;
  /**
   * @param rows
   * @description Number of rows to display when multiline option is set to true.
   */
  rows?: number;
  /**
   * @param shrink
   * @description If true, the label is shrunk.
   */
  shrink?: true;
  /**
   * @param inputProps
   * @description Attributes applied to the input element.
   * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes
   */
  inputProps?: any;
  /**
   * @param inputRef
   * @description Pass a ref to the input element.
   */
  inputRef?: React.RefObject<HTMLInputElement>;
  /**
   * @param type
   * @description Type of the input element. It should be a valid HTML5 input type.
   */
  type?:
    | "date"
    | "datatime-local"
    | "email"
    | "hidden"
    | "month"
    | "number"
    | "password"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week"
    | "file";

  /**
   * @param autoComplete
   * Necesary autoComplete for input
   */
  autoComplete?: string;
  /**
   * @param autoFocus
   * Autofocus input
   */
  autoFocus?: true;
  /**
   * @param select
   * @description Type input select defual values [{value: "", label: ""}]
   */
  select?: Array<{ value: string; label: string }>;
};

/**
 *Forms properties.
 */
export interface FormsProps {
  /**
   *Necessary elements for the forms.
   *@param name is required. Name attribute of the input element. <br/>
   *@param label is required. The label content. <br/>
   *@param md is required.  Defines the number of grids the component is going to use. It's applied for the md breakpoint and wider screens if not overridden. type of("auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12) <br/>
   *@param title Title atrtibute of the input element <br/>
   *@param initialValue If true, the label is displayed as required and the input element` will be required. <br/>
   *@param required If true, the label is displayed as required and the input element` will be required.  <br/>
   *@param messageRequired  Show message if is requerid  <br/>
   *@param validation  validation for the input default. suport "email", "text", "password" y "phone"  <br/>
   *@param messageValidation  Show message if is Validation  <br/>
   *@param disabled  If true, the input element will be disabled.   <br/>
   *@param multiline  If true, a textarea element will be rendered instead of an input.    <br/>
   *@param rows  Number of rows to display when multiline option is set to true.  <br/>
   *@param shrink  If true, the label is shrunk.   <br/>
   *@param inputProps  Type of the input element. It should be a valid HTML5 input type. [inputProps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes)  <br/>
   *@param inputRef Pass a ref to the input element. <br/>
   *@param type Type of the input element. It should be a valid HTML5 input type. default "text", type of ("date" | "datatime-local" | "email" | "hidden" | "tel" | "month" | "number" | "password" | "text" | "time" | "url" | "week" | "file") <br/>
   *@param select  Type input select defual values [{value: "", label: ""}]   <br/>
   *@param autoComplete Necesary autoComplete for input
   *@param autoFocus If true, autofocus input automa.
   */
  form: Array<formtype>;
  /**
   *Determines the action of the onSubmit.
   *@param values returns the captured elements of the form..<br/>
   *@param formikBag If onSubmites is asynchronous, then FORMIK will automatically set isSubmitting to false on your behalf once it has been resolved. This means that you DO NOT need to call formikBag.setSubmitting (false) manually. However, if your onSubmit function is synchronous, then you must call setSubmitting (false) on your own.
   */
  onSubmit: (values: any, formikBag?: any) => void | Promise<any>;
  children: (
    isSubmitting: boolean,
    submitForm?: () => void,
    values?: any
  ) => React.ReactChild;
  /**
   *Determine the classes necessary for the title of the form.
   */
  classNameTitle?: string;
  /**
   *Determine the styles of the form title.
   */
  styleTitle?: React.CSSProperties;
  /**
   * The variant to use for the input. type of("outlined" | "filled" | "standard"), default "outlined"
   */
  variant?: "outlined" | "filled" | "standard";
  /**
   * css propertis for input
   */
  style?: React.CSSProperties;
  /**
   * classes for component input
   */
  className?: string;
  /**
   * Option InputProps config
   * @see https://material-ui.com/api/text-field/
   */
  InputProps?: {};
  /**
   * OPtion InputLabelProps config
   * @see https://material-ui.com/api/text-field/
   */
  InputLabelProps?: {};
  /**
   * Option SelectProps config
   * @see https://material-ui.com/api/text-field/
   */
  SelectProps?: {};
}

/**
 *@version 1.0.0
 *@author [Rony cb ](https://github.com/mrbalem)
 */

const Forms: React.SFC<FormsProps> = (props) => {
  // recuperamos los datos de props
  const {
    form,
    onSubmit,
    children,
    className,
    style,
    classNameTitle,
    styleTitle,
    InputProps,
    InputLabelProps,
    SelectProps,
    variant = "outlined",
  } = props;

  /**
   * @param values los elementos a recuperar.
   * @description esta función nos permite recuperar los valores iniciales del formulario
   */
  const _getInitialValue = (values: Array<formtype>) => {
    const initialValues: any = {};
    values.forEach((ele) => {
      initialValues[ele.name] = ele.initialValue || "";
    });
    return initialValues;
  };

  /**
   * @param type Se especifca el tipo de validacion.
   * @param message Se especifica el mensage a mostrar cuando ocurrre un error.
   * @param label Recuperamos el label para mostrar un error por defecto
   * @description esta funcion nos permite establer ciertas validadciones en nuestro formulario.
   */
  const _getValidationDefault = (
    type: string,
    label?: string,
    message?: string
  ) => {
    switch (type) {
      case "text":
        return Yup.string()
          .min(3, "El texto debe tener al menos 3 caracteres")
          .required(message || label + " es un campo obligatorio");
      case "email":
        return Yup.string()
          .email(message || "Email invalido")
          .required(`Email es un campo obligatorio`);
      case "tel":
        return Yup.string()
          .matches(
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/,
            message || "El número de telefono es incorrecto."
          )
          .required("Telefono es un campo obligatorio");
      case "password":
        return Yup.string()
          .min(6, message || "La contraseña debe tener al menos 6 caracteres")
          .required(`Contraseña es un campo obligatorio`);
      default:
        throw new Error(
          "No se encontro el tipo de validación para este formulario, actualmente soporta las siguientes validaciones email, text, password y tel"
        );
    }
  };

  /**
   * @param values Contiene elementos del formulario a iterar.
   * @description esta funcion nos permite determinar las acciones del formulario como si es necesario o tiene que cumplir con una validacicón en especifico
   */
  const _getInitialValidations = (values: Array<formtype>) => {
    const initialValidation: any = {};
    values.forEach((element) => {
      if (element.validation && element.type)
        initialValidation[element.name] = _getValidationDefault(
          element.type,
          element.label,
          element.messageValidation
        );
      if (element.required)
        initialValidation[element.name] = Yup.string().required(
          element.messageRequired || element.label + " es un campo obligatorio"
        );
    });

    return initialValidation;
  };

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
    <Formik
      initialValues={_getInitialValue(form)}
      validationSchema={Yup.object().shape(_getInitialValidations(form))}
      onSubmit={onSubmit}
    >
      {({ errors, isSubmitting, submitForm, values, touched }) => (
        <Form>
          <Grid container spacing={2}>
            {form.map((value, index) => (
              <React.Fragment key={value.name + index.toString()}>
                {value.title && (
                  <Grid item xs={12} md={12}>
                    <div className={classNameTitle} style={styleTitle}>
                      {value.title}
                    </div>
                  </Grid>
                )}
                <Grid item xs={value.xs} md={value.md}>
                  {value.select ? (
                    <Field
                      component={TextField}
                      autoFocus={value.autoFocus}
                      autoComplete={value.autoComplete}
                      InputProps={InputProps}
                      InputLabelProps={InputLabelProps}
                      SelectProps={SelectProps}
                      name={value.name}
                      error={
                        errors[value.name] && touched[value.name]
                          ? true
                          : undefined
                      }
                      select
                      disabled={value.disabled}
                      fullWidth
                      variant={variant}
                      label={value.label}
                    >
                      {value.select.map((ele, index) => (
                        <MenuItem
                          key={ele.value + index.toString()}
                          value={ele.value}
                        >
                          {ele.label}
                        </MenuItem>
                      ))}
                    </Field>
                  ) : (
                    <Field
                      className={className}
                      autoComplete={value.autoComplete}
                      autoFocus={value.autoFocus}
                      style={style}
                      component={TextField}
                      name={value.name}
                      inputRef={value.inputRef}
                      disabled={value.disabled}
                      type={value.type}
                      multiline={_captureHandleErrorMultiline(
                        value.multiline,
                        value.rows
                      )}
                      rows={value.rows}
                      inputProps={value.inputProps}
                      InputProps={InputProps}
                      InputLabelProps={{
                        shrink: value.shrink,
                        ...InputLabelProps,
                      }}
                      error={
                        errors[value.name] && touched[value.name]
                          ? true
                          : undefined
                      }
                      fullWidth
                      variant={variant}
                      label={value.label}
                    />
                  )}
                </Grid>
              </React.Fragment>
            ))}
          </Grid>
          <br />
          {children(isSubmitting, submitForm, values)}
        </Form>
      )}
    </Formik>
  );
};

export default Forms;
