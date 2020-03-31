import React, { FC } from "react";
import { Formik, Form, FieldArray } from "formik";
import { Button } from "@material-ui/core";

import { Field, Values, Errors } from "./types/Field";
import {
  TextInputField,
  SelectField,
  RadioGroupField,
  CheckboxField,
  CheckboxGroupField
} from "./fields";
import validation from "./validation";

import "./index.scss";

export const fieldTypes = {
  TEXT: "text",
  CHECKBOX_SINGLE: "checkbox_single",
  CHECKBOX_MULTIPLE: "checkbox_multiple",
  RADIO: "radio",
  SELECT: "select"
};

const fieldsMapper = (
  fields: Array<Field>,
  handleChange: any,
  values: Values,
  errors: Errors
) => {
  return fields.map((field: Field) => {
    const { key, type, label, required, options } = field;
    switch (type) {
      case fieldTypes.TEXT:
        return (
          <TextInputField
            key={key}
            id={key}
            label={label}
            required={required}
            value={values[key]}
            error={errors[key]}
            handleChange={handleChange}
          />
        );
      case fieldTypes.SELECT:
        return (
          <SelectField
            value={values[key]}
            key={key}
            handleChange={handleChange}
            options={options}
            id={key}
            label={label}
            error={errors[key]}
            required={required}
          />
        );
      case fieldTypes.RADIO:
        return (
          <RadioGroupField
            key={key}
            id={key}
            label={label}
            options={options}
            required={required}
            handleChange={handleChange}
            value={values[key]}
            error={errors[key]}
          />
        );
      case fieldTypes.CHECKBOX_SINGLE:
        return (
          <CheckboxField
            key={key}
            id={key}
            label={label}
            handleChange={handleChange}
            required={required}
            value={values[key]}
            error={errors[key]}
          />
        );
      case fieldTypes.CHECKBOX_MULTIPLE:
        return (
          <CheckboxGroupField
            id={key}
            key={key}
            label={label}
            required={required}
            value={values[key]}
            error={errors[key]}
            options={options}
            handleChange={handleChange}
          />
        );
      default:
        throw new Error(`Invalid field type: ${type}`);
    }
  });
};

type BcFormProps = {
  fields: Array<Field>;
};

const getDefaultValue = (type: string) => {
  switch (type) {
    case fieldTypes.CHECKBOX_MULTIPLE:
      return [];
    case fieldTypes.TEXT:
      return "";
    case fieldTypes.CHECKBOX_SINGLE:
      return false;
    default:
      return undefined;
  }
};

const BcForm: FC<BcFormProps> = ({ fields }) => {
  const initialValues = fields.reduce(
    (acc: Values, field: Field) =>
      Object.assign({}, acc, { [field.key]: getDefaultValue(field.type) }),
    {}
  );

  return (
    <Formik
      initialValues={initialValues}
      validateOnChange={false}
      validationSchema={validation(fields)}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 500);
      }}
    >
      {({ values, errors, handleChange, isSubmitting }) => {
        return (
          <Form noValidate className="bc-form">
            <FieldArray name="fields">
              {() => fieldsMapper(fields, handleChange, values, errors)}
            </FieldArray>
            <Button
              className="bc-form__submit-button"
              disabled={isSubmitting}
              type="submit"
              variant="contained"
              color="primary"
            >
              Submit
            </Button>
          </Form>
        );
      }}
    </Formik>
  );
};

export default BcForm;
