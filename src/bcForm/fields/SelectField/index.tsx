import React, { FC } from "react";
import {
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText
} from "@material-ui/core";
import { Option, HandleChange } from "../../types/Field";

import "./index.scss";

interface SelectFieldType {
  id: string;
  label?: string;
  options?: Array<Option>;
  handleChange: HandleChange;
  value?: string;
  required?: boolean;
  error?: string;
}

const SelectField: FC<SelectFieldType> = ({
  id,
  label,
  value,
  options = [],
  handleChange,
  required = false,
  error
}) => {
  return (
    <div>
      <FormControl required={required} fullWidth margin="normal">
        <InputLabel id={id}>{label}</InputLabel>
        <Select
          labelId={id}
          id={id}
          value={value}
          onChange={e => {
            handleChange({
              target: {
                name: id,
                value: e.target.value
              }
            });
          }}
        >
          {options.map(({ value, label }: Option) => {
            return (
              <MenuItem key={value} value={value}>
                {label}
              </MenuItem>
            );
          })}
        </Select>
        <FormHelperText error={typeof error === "string"}>
          {error}
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default SelectField;
