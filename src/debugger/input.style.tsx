import * as React from "react";
import clsx from "clsx";
import Forms from "../components/forms/index";
import { Theme, createStyles, makeStyles } from "@material-ui/core";

export interface InpuStyleProps {}

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

const InpuStyle: React.SFC<InpuStyleProps> = () => {
  const classes = useStyle();
  return (
    <Forms
      variant="standard"
      InputProps={{
        disableUnderline: true,
        classes: {
          root: classes.root,
          input: clsx(classes.input, classes.inputSizeMedium, {
            [classes.inputBorder]: true,
          }),
          disabled: classes.disabled,
        },
      }}
      InputLabelProps={{
        shrink: true,
        className: classes.formLabel,
      }}
      onSubmit={(values, { setSubmitting }) => {
        alert(JSON.stringify(values));
        setSubmitting(false);
      }}
      form={[
        {
          title: "Style Title",
          required: true,
          name: "variant_standard",
          label: "variant standard",
          md: 12,
        },
      ]}
    >
      {(isSubmitting) => <button disabled={isSubmitting}>Enviar</button>}
    </Forms>
  );
};

export default InpuStyle;
