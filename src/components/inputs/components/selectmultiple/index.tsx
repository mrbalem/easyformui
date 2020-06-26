import * as React from "react";
import {
  FormControl,
  InputLabel,
  Chip,
  MenuItem,
  FormHelperText,
} from "@material-ui/core";
import { Select } from "formik-material-ui";
import { Field } from "formik";
import { InputsProps } from "../../type";

/**
 * @author Rony cb
 * @version 1.0.0
 * @param props props component SelectMultiple
 * @description [!] Select not found in React.Strict, alert error for FindDomain,
 * use native select multiple.
 */

const SelectMultiple: React.SFC<InputsProps> = (props) => {
  const { errors, value, variant, touched, style, className } = props;

  //render items multiple
  const [element, setElement] = React.useState<string[]>([]);

  // habdle change multiple native verision
  const handleChangeMultiple = (
    event: React.ChangeEvent<{ value: unknown }>
  ) => {
    const { options } = event.target as HTMLSelectElement;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i += 1) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setElement(value);
  };

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setElement(event.target.value as string[]);
  };

  return (
    <FormControl
      error={errors[value.name] && touched[value.name] ? true : undefined}
      variant={variant}
      style={{ minWidth: "100%", ...style }}
      className={className}
    >
      <InputLabel
        style={{ background: value.labelBackground || "#fff" }}
        shrink={value.shrink}
        htmlFor={value.name + "selectlabel"}
      >
        {value.label}
      </InputLabel>

      <Field
        component={Select}
        multiple
        name={value.name}
        native={value.native}
        variant={variant}
        fullWidth
        type="text"
        inputProps={{
          name: `${value.name}`,
          id: value.name + "selectlabel",
          value: element,
          onChange: value.native ? handleChangeMultiple : handleChange,
        }}
        label={value.label}
        renderValue={
          !value.native
            ? (selected: any) => (
                <div style={{ display: "flex", flexWrap: "wrap" }}>
                  {(selected as string[]).map((value) => (
                    <Chip key={value} label={value} style={{ margin: 1 }} />
                  ))}
                </div>
              )
            : undefined
        }
      >
        {value.select &&
          value.select.map((name, index) =>
            value.native ? (
              <option key={name.value + index.toString()} value={name.value}>
                {name.label}
              </option>
            ) : (
              <MenuItem key={name.value + index.toString()} value={name.value}>
                {name.label}
              </MenuItem>
            )
          )}
      </Field>
      {value.native && value.multipleSelect && !errors[value.name] && (
        <FormHelperText>
          usa Ctrol + click para seleccionar las opciones
        </FormHelperText>
      )}
      {errors[value.name] && touched[value.name] && (
        <FormHelperText>{value.label} es un campo obligatorio</FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectMultiple;
