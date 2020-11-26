export enum FormFieldType {
  text,
  number,
  toggle,
  checkbox,
}

export function createNewFormField(
  title: string,
  type: FormFieldType,
): FormField {
  switch (type) {
    case FormFieldType.number: {
      return {title, type, value: 0};
    }
    case FormFieldType.toggle: {
      return {title, type, value: false};
    }
    case FormFieldType.checkbox: {
      return {title, type, value: false};
    }
    case FormFieldType.text:
    default: {
      return {title, type, value: ''};
    }
  }
}

interface TextFormField {
  type: FormFieldType.text;
  title: string;
  value: string;
}
interface NumberFormField {
  type: FormFieldType.number;
  title: string;
  value: number;
}
interface CheckboxFormField {
  type: FormFieldType.checkbox;
  title: string;
  value: boolean;
}
interface ToggleFormField {
  type: FormFieldType.toggle;
  title: string;
  value: boolean;
}

export type FormField =
  | TextFormField
  | NumberFormField
  | CheckboxFormField
  | ToggleFormField;

// export type FormField = {
//   type: FormFieldType;
//   title: string;
//   value: boolean | string | number;
// };
