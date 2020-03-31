import React, { FC } from "react";
import { TextField } from "@material-ui/core";
import { HandleChange } from "../../types/Field";

import "./index.scss";

interface TextInputProps {
  id: string;
  label?: string;
  required?: boolean;
  value?: string;
  handleChange: HandleChange;
  error?: string;
}

const TextInputField: FC<TextInputProps> = ({
  id,
  label,
  required = false,
  value,
  handleChange,
  error
}) => {
  return (
    <div>
      <TextField
        margin="normal"
        fullWidth
        id={id}
        required={required}
        helperText={error}
        error={typeof error === "string"}
        label={label}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
};

export default TextInputField;
