import React, { FC } from "react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  FormHelperText
} from "@material-ui/core";

import { HandleChange } from "../../types/Field";

import "./index.scss";

interface CheckboxFieldProps {
  label?: string;
  value: boolean;
  id: string;
  handleChange: HandleChange;
  error?: string;
  required?: boolean;
}

const CheckboxField: FC<CheckboxFieldProps> = ({
  label,
  value,
  id,
  handleChange,
  error,
  required = false
}) => {
  return (
    <div>
      <FormControl fullWidth margin="normal">
        <FormGroup>
          <FormControlLabel
            label={label}
            control={
              <Checkbox checked={value} name={id} onChange={handleChange} />
            }
          ></FormControlLabel>
        </FormGroup>
        <FormHelperText error={typeof error === "string"}>
          {error}
        </FormHelperText>
      </FormControl>
    </div>
  );
};

export default CheckboxField;
