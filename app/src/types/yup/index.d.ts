import { StringSchema } from 'yup';

declare module 'yup' {
  interface StringSchema {
    password(): StringSchema;
  }
}
