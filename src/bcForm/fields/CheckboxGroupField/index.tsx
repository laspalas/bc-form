import React, { FC } from "react";
import {
  FormControl,
  FormGroup,
  FormLabel,
  FormControlLabel,
  Checkbox,
  FormHelperText
} from "@material-ui/core";
import { Option, HandleChange } from "../../types/Field";

import "./index.scss";

interface CheckboxGroupFieldProps {
  label?: string;
  value: Array<string>;
  id: string;
  handleChange: HandleChange;
  error?: string;
  options?: Array<Option>;
  required?: boolean;
}

const CheckboxGroupField: FC<CheckboxGroupFieldProps> = ({
  label,
  value,
  id,
  handleChange,
  error,
  options = [],
  required = false
}) => {
  return (
    <div>
      <FormControl required={required} fullWidth margin="normal">
        <FormLabel>{label}</FormLabel>
        <FormGroup>
          {options.map(({ value: v, label }: Option) => {
            return (
              <FormControlLabel
                label={label}
                key={v}
                control={
                  <Checkbox
                    checked={value.includes(v)}
                    name={id}
                    onChange={e => {
                      handleChange({
                        target: {
                          name: id,
                          value: e.target.checked
                            ? [...value, v]
                            : value.filter((cv: string) => cv !== v)
                        }
                      });
                    }}
                  />
                }
              ></FormControlLabel>
            );
          })}
        </FormGroup>
        <FormHelperText error={typeof error === "string"}>
          {error}
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default CheckboxGroupField;
