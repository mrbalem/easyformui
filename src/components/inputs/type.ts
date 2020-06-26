/**
 * interface forms
 */
import { formtype, FormsProps } from "../forms";

/**
 * omit props OF FormsProps
 */
type omitpProps = Omit<FormsProps, "form" | "onSubmit" | "children">;

/**
 * types props for input Component
 * @author Rony cb
 * @version 1.0.0
 * @param value necesarie for getInput
 * @param erros error capture for input;
 * @param touched If touch input defaul checked errors
 */
export interface InputsProps extends omitpProps {
  value: formtype;
  errors: any;
  touched: any;
  valuesInput: any;
  style?: any;
  className?: string;
}
