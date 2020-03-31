import { ChangeEvent } from "react";

export interface Option {
  label?: string;
  value: string;
}

export interface Field {
  key: string;
  type: string;
  label?: string;
  required?: boolean;
  options?: Array<Option>;
}

export interface Values {
  [key: string]: any;
}

export interface HandleChange {
  (e: ChangeEvent<any> | CustomEvent): void;
}

interface CustomEvent {
  target: {
    name: string;
    value: any;
  };
}

export interface Errors {
  [key: string]: any;
}
