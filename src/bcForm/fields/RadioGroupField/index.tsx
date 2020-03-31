import React, { FC } from "react";
import {
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
  FormHelperText
} from "@material-ui/core";

import { Option, HandleChange } from "../../types/Field";
import "./index.scss";

interface RadioGroupFieldProps {
  id: string;
  label?: string;
  options?: Array<Option>;
  required?: boolean;
  handleChange: HandleChange;
  value?: string;
  error?: string;
}

const RadioGroupField: FC<RadioGroupFieldProps> = ({
  id,
  label,
  options = [],
  required = false,
  value,
  handleChange,
  error
}) => {
  return (
    <div>
      <FormControl required={required} fullWidth margin="normal">
        <FormLabel>{label}</FormLabel>
        <RadioGroup name={id} value={value} onChange={handleChange}>
          {options.map(({ value, label }: Option) => {
            return (
              <FormControlLabel
                key={value}
                value={value}
                control={<Radio />}
                label={label}
              />
            );
          })}
        </RadioGroup>
        <FormHelperText error={typeof error === "string"}>
          {error}
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default RadioGroupField;
