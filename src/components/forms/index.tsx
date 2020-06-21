import * as React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { Grid, MenuItem } from "@material-ui/core";
import { TextField } from "formik-material-ui";

/**
 * @description se define los tipos de validaciones que soporta el formulario actualmente.
 */

type validation = "email" | "text" | "password" | "phone";

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
   * @description validation for the input default.
   * @type validation
   */
  validation?: validation;
  /**
   * @param variant
   * @description The variant to use for the input.
   */
  variant?: "outlined" | "filled" | "standard";
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
   *@param validation  validation for the input default. type of ("email" | "text" | "password" | "phone")  <br/>
   *@param messageValidation  Show message if is Validation  <br/>
   *@param variant The variant to use for the input. type of("outlined" | "filled" | "standard")    <br/>
   *@param disabled  If true, the input element will be disabled.   <br/>
   *@param multiline  If true, a textarea element will be rendered instead of an input.    <br/>
   *@param rows  Number of rows to display when multiline option is set to true.  <br/>
   *@param shrink  If true, the label is shrunk.   <br/>
   *@param inputProps  Type of the input element. It should be a valid HTML5 input type. [inputProps](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes)  <br/>
   *@param type Type of the input element. It should be a valid HTML5 input type. default "text", type of ("date" | "datatime-local" | "email" | "hidden" | "tel" | "month" | "number" | "password" | "text" | "time" | "url" | "week" | "file") <br/>
   *@param select  Type input select defual values [{value: "", label: ""}]   <br/>
   */
  form: Array<formtype>;
  /**
   *Determines the action of the onSubmit.
   *@param values retorna los elementos capturados del formulario.<br/>
   *@param formikBag Si onSubmites es asíncrona, entonces FORMIK fijará automáticamente isSubmitting a false en su nombre una vez que se haya resuelto. Esto significa que NO necesita llamar formikBag.setSubmitting(false) manualmente. Sin embargo, si su onSubmit función es síncrona, entonces debe llamar setSubmitting(false) por su cuenta.
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
}

/**
 *@version 1.0.0
 *@author [Rony cb ](https://github.com/mrbalem)
 */

const Forms: React.SFC<FormsProps> = (props) => {
  // recuperamos los datos de props
  const { form, onSubmit, children, classNameTitle, styleTitle } = props;

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
   * @description esta funcion nos permite establer ciertas validadciones en nuestro formulario.
   */
  const _getValidationDefault = (type: validation, message?: string) => {
    switch (type) {
      case "text":
        return Yup.string()
          .min(3, "El texto debe tener al menos 3 caracteres")
          .required(message);
      case "email":
        return Yup.string()
          .email("Email invalido")
          .required(`Email es necesario`);
      case "phone":
        return Yup.string()
          .matches(
            /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{3})$/,
            "El número de telefono es incorrecto."
          )
          .required("El campo telefono es obligatorio");
      case "password":
        return Yup.string()
          .min(6, "La contraseña debe tener al menos 6 caracteres")
          .required(`La contraseña es necesario`);
      default:
        throw new Error("no se encontro el tipo de validacion");
    }
  };

  /**
   * @param values Contiene elementos del formulario a iterar.
   * @description esta funcion nos permite determinar las acciones del formulario como si es necesario o tiene que cumplir con una validacicón en especifico
   */
  const _getInitialValidations = (values: Array<formtype>) => {
    const initialValidation: any = {};
    values.forEach((element) => {
      if (element.validation)
        initialValidation[element.name] = _getValidationDefault(
          element.validation,
          element.messageValidation
        );
      if (element.required)
        initialValidation[element.name] = Yup.string().required(
          element.messageRequired
        );
    });

    return initialValidation;
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
                      name={value.name}
                      error={
                        errors[value.name] && touched[value.name]
                          ? true
                          : undefined
                      }
                      select
                      disabled={value.disabled}
                      fullWidth
                      variant={value.variant || "outlined"}
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
                      component={TextField}
                      name={value.name}
                      disabled={value.disabled}
                      type={value.type}
                      multiline={value.multiline}
                      rows={value.rows}
                      inputProps={value.inputProps}
                      InputLabelProps={{ shrink: value.shrink }}
                      error={
                        errors[value.name] && touched[value.name]
                          ? true
                          : undefined
                      }
                      fullWidth
                      variant={value.variant || "outlined"}
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
