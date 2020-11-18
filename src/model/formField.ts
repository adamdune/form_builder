interface TextFormField {
  title: String;
  value: String;
}
interface NumberFormField {
  title: String;
  value: Number;
}
interface ToggleFormField {
  title: String;
  value: boolean;
}
interface CheckboxFormField {
  title: String;
  value: boolean;
}
export type FormField =
  | TextFormField
  | NumberFormField
  | ToggleFormField
  | CheckboxFormField;
