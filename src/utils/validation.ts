import { number, object, string } from "yup";

export const errorsMessage = {
  requiredMsg: "Please complete this field",
};

export const creativeSchema = object().shape({
  title: string().required(errorsMessage.requiredMsg).trim(),
  description: string().required(errorsMessage.requiredMsg).trim(),
  content: string().required(errorsMessage.requiredMsg).trim(),
});

export const formatSchema = object().shape({
  width: number().min(1).required(errorsMessage.requiredMsg).truncate(),
  height: number().min(1).required(errorsMessage.requiredMsg).truncate(),
});
