import * as React from "react";
import {
  FormControl,
  InputLabel,
  Chip,
  MenuItem,
  Theme,
  useTheme,
  FormHelperText,
} from "@material-ui/core";
import { Select } from "formik-material-ui";
import { Field } from "formik";
import { InputsProps } from "../../type";
import { useInputStyle } from "../style";

/**
 * @author Rony cb
 * @version 1.0.0
 * @param props props component SelectMultiple
 */

const SelectMultiple: React.SFC<InputsProps> = (props) => {
  const { errors, value, variant, touched } = props;

  //[*] hooks style
  const classes = useInputStyle();

  //[*] hooks theme
  const theme = useTheme();

  //render items multiple
  const [element, setElement] = React.useState<string[]>([]);

  function getStyles(name: string, personName: string[], theme: Theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setElement(event.target.value as string[]);
  };

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
        multiple
        name={value.name}
        variant="outlined"
        fullWidth
        type="text"
        inputProps={{
          name: `${value.name}`,
          id: value.name + "selectlabel",
          value: element,
          onChange: handleChange,
        }}
        label={value.label}
        renderValue={(selected: any) => (
          <div className={classes.chips}>
            {(selected as string[]).map((value) => (
              <Chip key={value} label={value} className={classes.chip} />
            ))}
          </div>
        )}
      >
        {value.select &&
          value.select.map((name) => (
            <MenuItem
              key={name.value}
              value={name.value}
              style={getStyles(name.label, ["valor1", "valor2"], theme)}
            >
              {name.label}
            </MenuItem>
          ))}
      </Field>
      {errors[value.name] && touched[value.name] && (
        <FormHelperText>{value.label} es un campo obligatorio</FormHelperText>
      )}
    </FormControl>
  );
};

export default SelectMultiple;
