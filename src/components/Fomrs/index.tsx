/** @format */

import * as React from 'react';
import * as Yup from 'yup';
import { Formik, Form, Field } from 'formik';
import { Grid, MenuItem } from '@material-ui/core';
import { TextField } from 'formik-material-ui';

/**
 * -------------------------[validation]---------------------------
 *  ---------------------------------------------------------------
 * @description se define los tipos de validaciones que soporta el formulario actualmente.
 */

type validation = 'email' | 'text' | 'password' | 'ruc' | 'phone';

/**
 * @type form
 * @description especifica los valores nesarios para el funcionamiento del formulario. *
 * @param inputProps Atributos aplicados al inputelemento. mas info --->  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes
 */
type formtype = {
	name: string; // especifica el nombre del input a indentificar
	label: string;
	md: 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12; // especifica el tamaños del input a ocupar.
	xs?: 'auto' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;
	title?: string;
	initialValue?: any; // valor inicial del input
	required?: true;
	messageRequired?: string;
	validation: validation;
	messageValidation?: string;
	disabled?: true;
	multiline?: true; // especifica si el input es de formato textArea
	rows?: number; // es requerio si se usa multine. donde especifica la fila del textArea
	shrink?: true; // especifica si el label se esconde por defecto es undefinde.
	inputProps?: any; // Atributos aplicados al inputelemento. mas info --->  https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes
	type?:
		| 'date'
		| 'datatime-local'
		| 'email'
		| 'hidden'
		| 'month'
		| 'number'
		| 'password'
		| 'radio'
		| 'text'
		| 'time'
		| 'url'
		| 'week'
		| 'file';
	select?: Array<{ value: string; label: string }>; // especica si el input es de tipo select
};

export interface FomrsProps {
	form: Array<formtype>;
	onSubmit: (element: any) => void;
	children: (
		isSubmitting: boolean,
		submitForm?: () => void,
		values?: any
	) => React.ReactChild;
}

/**
 * @interface FomrsProps
 * @type formtype
 * @param props.form especifica los valores necesarios para el funcionamiento del formulario.
 * @form
 * [valores props.form is Required *]
 * ----------------------------------
 * @name string : Name attribute of the input element.
 * @label string : The label content.
 * @md : Defines the number of grids the component is going to use. It's applied for the md breakpoint and wider screens if not overridden.
 * [valores props.form is not Required *]
 * --------------------------------------
 * @initialValue : The default value of the input element.
 * @required true : If true, the label is displayed as required and the input element` will be required.
 * @disabled true : If true, the input element will be disabled.
 * @multiline true : If true, a textarea element will be rendered instead of an input.
 * @rows : Number of rows to display when multiline option is set to true.
 * @shrink : 	If true, the label is shrunk.
 * @xs : Defines the number of grids the component is going to use. It's applied for all the screen sizes with the lowest priority.
 * @inputProps : Attributes applied to the input element.
 * @type : Type of the input element. It should be a valid HTML5 input type.
 * @select : Type input select defual values [{value: "", label: ""}]
 * @validation : validation for the input default.
 * @messageRequired : Show message if is requerid
 * @messageValidation : Show message if is Validation
 * [props.onSubmit]
 * ----------------
 * @param props.unSubmie  Your form submission handler. It is passed your forms values and the "FormikBag", which includes an object containing a subset of the injected props and methods (i.e. all the methods with names that start with set<Thing> + resetForm) and any props that were passed to the wrapped component.
 * @description  If onSubmit is async, then Formik will automatically set isSubmitting to false on your behalf once it has resolved. This means you do NOT need to call formikBag.setSubmitting(false) manually. However, if your onSubmit function is synchronous, then you need to call setSubmitting(false) on your own
 * [props.hildren]
 * ----------------
 * @description return isSubmitting, submitForm, values -> () => React.ReactChild "Button type submit is necesary for React.ReactChild"
 */

const Fomrs: React.SFC<FomrsProps> = props => {
	// recuperamos los datos de props
	const { form, onSubmit, children } = props;

	/**
	 * @param values los elementos a recuperar.
	 * @description esta función nos permite recuperar los valores iniciales del formulario
	 */
	const _getInitialValue = (values: Array<formtype>) => {
		const initialValues: any = {};
		values.forEach(ele => {
			initialValues[ele.name] = ele.initialValue || '';
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
			case 'text':
				return Yup.string()
					.min(3, 'El texto debe tener al menos 3 caracteres')
					.required(message);
			case 'email':
				return Yup.string()
					.email('Email invalido')
					.required(`Email es necesario`);
			case 'password':
				return Yup.string()
					.min(6, 'La contraseña debe tener al menos 6 caracteres')
					.required(`La contraseña es necesario`);
			default:
				throw new Error('no se encontro el tipo de validacion');
		}
	};

	/**
	 * @param values Contiene elementos del formulario a iterar.
	 * @description esta funcion nos permite determinar las acciones del formulario como si es necesario o tiene que cumplir con una validacicón en especifico
	 */
	const _getInitialValidations = (values: Array<formtype>) => {
		const initialValidation: any = {};
		values.forEach(element => {
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
			onSubmit={onSubmit}>
			{({ errors, isSubmitting, submitForm, values, touched }) => (
				<Form>
					<Grid container spacing={2}>
						{form.map((value, index) => (
							<React.Fragment key={value.name + index.toString()}>
								{value.title && (
									<Grid item xs={12} md={12}>
										{value.title}
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
											variant='outlined'
											label={value.label}>
											{value.select.map((ele, index) => (
												<MenuItem
													key={ele.value + index.toString()}
													value={ele.value}>
													{ele.label}
												</MenuItem>
											))}
										</Field>
									) : (
										<Field
											component={TextField}
											name={value.name}
											disabled={value.disabled}
											error={
												errors[value.name] && touched[value.name]
													? true
													: undefined
											}
											fullWidth
											variant='outlined'
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

export default Fomrs;
