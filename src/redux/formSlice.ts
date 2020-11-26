import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import fakeApi from '../api/fakeApi';
import {Response} from '../model/apiResponse';
import {FormField} from '../model/formField';

enum StateStatus {
  pending,
  fulfilled,
  rejected,
}

export interface FormData {
  title: string;
  formFields: FormField[];
}
interface InitialState extends FormData {
  status: StateStatus;
  errorMessage: string;
}

const initialState: InitialState = {
  status: StateStatus.fulfilled,
  title: '',
  formFields: [],
  errorMessage: '',
};

export const fetchInitialState = createAsyncThunk(
  'form/fetchInitialState',
  async (isSuccess: boolean) => {
    const response: any = await fakeApi.getForm(isSuccess);
    return response;
  },
);

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
  extraReducers: (builder) => {
    builder.addCase(
      fetchInitialState.fulfilled,
      (state, action: PayloadAction<Response<FormData>>) => {
        if (action.payload.status === 200) {
          return {
            ...state,
            status: StateStatus.fulfilled,
            ...action.payload.data,
          };
        } else {
          return {...initialState, errorMessage: action.payload.errorMessage};
        }
      },
    );
    builder.addCase(fetchInitialState.rejected, (_) => {
      return {
        ...initialState,
        errorMessage: 'Unable to retrieve your form due to an error',
      };
    });
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
