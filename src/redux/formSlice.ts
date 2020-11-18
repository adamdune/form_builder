import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {FormField} from '../model/formField';

interface InitialState {
  title: string;
  formFields: FormField[];
}

const initialState: InitialState = {
  title: '',
  formFields: [],
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    addNewFormField: (state, action: PayloadAction<FormField>) => {
      return {...state, formFields: [...state.formFields, action.payload]};
    },
    removeFormField: (state, action: PayloadAction<{index: number}>) => {
      return {
        ...state,
        formFields: [
          ...state.formFields.slice(0, action.payload.index),
          ...state.formFields.slice(action.payload.index + 1),
        ],
      };
    },
    editFormFieldValue: (
      state,
      action: PayloadAction<{
        value: string | number | boolean;
        index: number;
      }>,
    ) => {
      const nextFormFields = [...state.formFields];
      nextFormFields[action.payload.index] = {
        ...nextFormFields[action.payload.index],
        value: action.payload.value,
      } as FormField;
      return {...state, formFields: nextFormFields};
    },
    setTitle: (state, action: PayloadAction<string>) => {
      return {...state, title: action.payload};
    },
    resetForm: () => initialState,
  },
});

export const {
  addNewFormField,
  resetForm,
  editFormFieldValue,
  removeFormField,
  setTitle,
} = formSlice.actions;
export default formSlice.reducer;
