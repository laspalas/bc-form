import { object, string, boolean, array } from "yup";
import { Field } from "./types/Field";
import { fieldTypes } from "./BcForm";

const getValidationType = (type: string) => {
  switch (type) {
    case fieldTypes.CHECKBOX_SINGLE:
      return boolean();
    case fieldTypes.CHECKBOX_MULTIPLE:
      return array().of(string());
    default:
      return string();
  }
};

const validation = (fields: Array<Field>) => {
  return object().shape(
    fields.reduce((acc, field) => {
      return {
        ...acc,
        [field.key]: field.required
          ? getValidationType(field.type).required("This field is required")
          : getValidationType(field.type)
      };
    }, {})
  );
};

export default validation;
