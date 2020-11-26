import {Response} from '../model/apiResponse';
import {createNewFormField, FormFieldType} from '../model/formField';
import {FormData} from '../redux/formSlice';

function getForm(isSuccess: boolean = true) {
  const data: FormData = {
    title: 'Hello World',
    formFields: [
      createNewFormField('A Text Field', FormFieldType.text),
      createNewFormField('A Number Field', FormFieldType.number),
      createNewFormField('A Checkbox Field', FormFieldType.checkbox),
      createNewFormField('A Toggle Field', FormFieldType.toggle),
    ],
  };

  const response: Response<FormData> = isSuccess
    ? {
        status: 200,
        data,
      }
    : {
        status: 500,
        errorMessage:
          'Unable to retrieve your form due to an error on the server',
      };

  return new Promise((resolve) => setTimeout(() => resolve(response), 500));
}

export default {
  getForm,
};
