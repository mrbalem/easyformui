<!-- | Property          | Type   | Description                                              |
| ----------------- | ------ | -------------------------------------------------------- |
| name \*           | string | Automatically focus Card Number field on render          |
| label \*          | string | Receives a `formData` object every time the form changes |
| md \*             | number | Receives the name of currently focused field             |
| xs                | number | Receives the name of currently focused field             |
| title             | string | Receives the name of currently focused field             |
| initialValue      | any    | Receives the name of currently focused field             |
| required          | true   | Receives the name of currently focused field             |
| messageRequired   | string | Receives the name of currently focused field             |
| validation        | type   | type of ("email", "text", "password", "ruc", "phone")    |
| messageValidation | string | Receives the name of currently focused field             |
| variant           | type   | type of ("outlined", "filled", "standar")                |
| disabled          | true   | Receives the name of currently focused field             |
| multiline         | true   | Receives the name of currently focused field             |
| rows              | true   | Receives the name of currently focused field             |
| shrink            | true   | Receives the name of currently focused field             |
| inputProps        | true   | Receives the name of currently focused field             |
| type              | true   | Receives the name of currently focused field             |
| select            | true   | Receives the name of currently focused field             | -->

## Install

```bash
npm install easyformui
```

`Important: replace ./index.tsx for easyformui`

#### children props:

`(isSubmitting: boolean, submitForm?: any, values?: any) => React.ReactChild`

#### Uso básico:

```tsx
import Forms from "./index.tsx";

<Forms
  onSubmit={(values, { setSubmitting }) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  }}
  form={[
    { title: "Formulario básico", name: "prueba", label: "Prueba", md: 12 },
  ]}
>
  {(isSubmitting) => <button disabled={isSubmitting}>Enviar</button>}
</Forms>;
```

#### Type Input:

```tsx
import Forms from "./index.tsx";

<Forms
  onSubmit={(values, { setSubmitting }) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  }}
  form={[
    {
      title: "Type input",
      name: "text",
      label: "Text",
      md: 6,
    },
    {
      name: "number",
      label: "Number",
      md: 6,
      type: "number",
    },
    {
      name: "email",
      label: "Email",
      md: 6,
      type: "email",
    },
    {
      name: "date",
      label: "Date",
      shrink: true,
      md: 6,
      type: "date",
    },
    {
      name: "password",
      label: "Password",
      md: 6,
      type: "password",
    },
    {
      name: "month",
      label: "Month",
      shrink: true,
      md: 6,
      type: "month",
    },
    {
      name: "time",
      label: "Time",
      shrink: true,
      md: 6,
      type: "time",
    },
    {
      name: "week",
      label: "Week",
      shrink: true,
      md: 6,
      type: "week",
    },
    {
      name: "url",
      label: "Url",
      md: 6,
      type: "url",
    },
    {
      name: "file",
      label: "File",
      shrink: true,
      md: 6,
      type: "file",
    },
  ]}
>
  {() => <button>Enviar</button>}
</Forms>;
```

#### Input Required:

```tsx
import Forms from "./index.tsx";

<Forms
  onSubmit={(values, { setSubmitting }) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  }}
  form={[
    {
      title: "Input Required",
      name: "required",
      label: "Required",
      md: 12,
      required: true,
    },
    {
      title: "Custom message Input Required  ",
      name: "required2",
      label: "Custom message",
      messageRequired: "Custom message is a required field",
      md: 12,
      required: true,
    },
  ]}
>
  {() => <button>Enviar</button>}
</Forms>;
```

#### Input Validations:

```tsx
import Forms from "./index.tsx";

<Forms
  onSubmit={(values, { setSubmitting }) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  }}
  form={[
    {
      title: "Form validations",
      name: "text",
      type: "text",
      label: "Validation Text",
      md: 12,
      validation: true,
    },
    {
      title: "Custom Message",
      name: "email",
      label: "Validation email",
      type: "email",
      messageValidation: "email is not corret",
      md: 12,
      validation: true,
    },
    {
      name: "password",
      label: "Validation password",
      type: "password",
      md: 6,
      validation: true,
    },
    {
      name: "phone",
      label: "Validation phone",
      type: "tel",
      md: 6,
      validation: true,
    },
  ]}
>
  {() => <button>Enviar</button>}
</Forms>;
```

#### Input Multiline:

```tsx
import Forms from "./index.tsx";

<Forms
  onSubmit={(values, { setSubmitting }) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  }}
  form={[
    {
      title: "Input Multiline basic",
      name: "Multiline",
      label: "Multiline",
      multiline: true,
      rows: 2,
      md: 12,
    },
    {
      title: "Input Multiline required",
      name: "Multiline_required",
      label: "Multiline required",
      required: true,
      multiline: true,
      rows: 6,
      md: 12,
    },
  ]}
>
  {(isSubmitting) => <button disabled={isSubmitting}>Enviar</button>}
</Forms>;
```

#### Input Select:

```tsx
import Forms from "./index.tsx";

<Forms
  onSubmit={(values, { setSubmitting }) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  }}
  form={[
    {
      title: "Input Select basic",
      name: "select",
      label: "Select",
      md: 12,
      select: [
        { value: "valor1", label: "Valor 1" },
        { value: "valor2", label: "Valor 2" },
      ],
    },
    {
      title: "Input Select required",
      name: "select2",
      label: "Select required",
      required: true,
      md: 12,
      select: [
        { value: "valor1", label: "Valor 1" },
        { value: "valor2", label: "Valor 2" },
      ],
    },
    {
      title: "Input Select defaulValue",
      name: "select3",
      label: "Select defaulValue",
      initialValue: "valor1",
      md: 12,
      select: [
        { value: "valor1", label: "Valor 1" },
        { value: "valor2", label: "Valor 2" },
      ],
    },
  ]}
>
  {() => <button>Enviar</button>}
</Forms>;
```

#### Input File:

```tsx
import Forms from "./index.tsx";

<Forms
  onSubmit={(values, { setSubmitting }) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  }}
  form={[
    {
      title: "Input File basic",
      name: "file",
      label: "File basic",
      shrink: true,
      md: 12,
      type: "file",
    },
    {
      title: "Input File required",
      name: "file2",
      label: "File required",
      required: true,
      type: "file",
      shrink: true,
      md: 12,
    },
    {
      title: "Input File accept ",
      name: "file4",
      label: "File accept",
      inputProps: { accept: "image/png, image/jpeg" },
      type: "file",
      shrink: true,
      md: 12,
    },
  ]}
>
  {() => <button>Enviar</button>}
</Forms>;
```

#### Input Grid:

```tsx
import Forms from "./index.tsx";

<Forms
  onSubmit={(values, { setSubmitting }) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  }}
  form={[
    { name: "12", label: "md 12", md: 12 },
    { name: "31", label: "md 3", md: 3 },
    { name: "32", label: "md 3", md: 3 },
    { name: "33", label: "md 3", md: 3 },
    { name: "34", label: "md 3", md: 3 },
    { name: "41", label: "md 4", md: 4 },
    { name: "42", label: "md 4", md: 4 },
    { name: "43", label: "md 4", md: 4 },
    { name: "61", label: "md 6", md: 6 },
    { name: "62", label: "md 6", md: 6 },
  ]}
>
  {(isSubmitting) => <button disabled={isSubmitting}>Enviar</button>}
</Forms>;
```

#### Input variant:

```tsx
import Forms from "./index.tsx";

<Forms
  variant="filled"
  onSubmit={(values, { setSubmitting }) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  }}
  form={[
    {
      title: "variant filled",
      name: "variant_filled",
      label: "variant filled",
      md: 12,
    },
    {
      name: "input_one",
      label: "input one",
      md: 6,
    },
    {
      name: "input_tow",
      label: "Input two",
      md: 6,
    },
    {
      name: "input_tree",
      label: "Input Tree",
      md: 12,
    },
  ]}
>
  {(isSubmitting) => <button disabled={isSubmitting}>Enviar</button>}
</Forms>;
```

```tsx
import Forms from "./index.tsx";

<Forms
  variant="standard"
  onSubmit={(values, { setSubmitting }) => {
    alert(JSON.stringify(values));
    setSubmitting(false);
  }}
  form={[
    {
      title: "variant standard",
      name: "variant_standard",
      label: "variant standard",
      md: 12,
    },
    {
      name: "input_one",
      label: "input one",
      md: 6,
    },
    {
      name: "input_tow",
      label: "Input two",
      md: 6,
    },
    {
      name: "input_tree",
      label: "Input Tree",
      md: 12,
    },
  ]}
>
  {(isSubmitting) => <button disabled={isSubmitting}>Enviar</button>}
</Forms>;
```

#### Style Input:

```note
  import { Theme, createStyles, makeStyles } from "@material-ui/core";

  const useStyle = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      padding: 0,
      "label + &": {
        marginTop: theme.spacing(3),
      },
    },
    input: {
      minWidth: theme.spacing(6),
      backgroundColor: theme.palette.common.white,
      "&$disabled": {
        backgroundColor: theme.palette.divider,
      },
    },
    inputBorder: {
      border: "1px solid #e9ddd0",
      "&:focus": {
        color: "black",
        borderColor: theme.palette.secondary.main,
      },
    },
    disabled: {},
    inputSizeSmall: {
      fontSize: 14,
      padding: theme.spacing(1),
      width: `calc(100% - ${theme.spacing(2)}px)`,
    },
    inputSizeMedium: {
      fontSize: 16,
      padding: theme.spacing(2),
      width: `calc(100% - ${theme.spacing(4)}px)`,
    },
    inputSizeLarge: {
      fontSize: 18,
      padding: 22,
      width: `calc(100% - ${22 * 2}px)`,
    },
    inputSizeXlarge: {
      fontSize: 20,
      padding: 25,
      width: `calc(100% - ${25 * 2}px)`,
    },
    formLabel: {
      fontSize: 18,
    },
    select: {
      height: "auto",
      borderRadius: 0,
    },
    selectIcon: {
      top: "50%",
      marginTop: -12,
    },
  })
);



```

```tsx
import Forms from "./index.tsx";
import TexFieldStyle from "./input.style";

//[*] code component

// const TexFieldStyle: React.SFC<> = () => {
//   const classes = useStyle();
//   return (
//     <Forms
//       variant="standard"
//       InputProps={{
//         disableUnderline: true,
//         classes: {
//           root: classes.root,
//           input: clsx(classes.input, classes.inputSizeMedium, {
//             [classes.inputBorder]: true,
//           }),
//           disabled: classes.disabled,
//         },
//       }}
//       InputLabelProps={{
//         shrink: true,
//         className: classes.formLabel,
//       }}
//       onSubmit={(values, { setSubmitting }) => {
//         alert(JSON.stringify(values));
//         setSubmitting(false);
//       }}
//       form={[
//         {
//           title: "Style Title",
//           required: true,
//           name: "variant_standard",
//           label: "variant standard",
//           md: 12,
//         },
//       ]}
//     >
//       {(isSubmitting) => <button disabled={isSubmitting}>Enviar</button>}
//     </Forms>
//   );
// };

<TexFieldStyle />;
```
