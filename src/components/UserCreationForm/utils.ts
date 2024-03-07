import * as yup from "yup";

export const userFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .min(3, "Le prénom doit avoir au minimum 3 caractère")
    .required("Le Prénom est obligatoire"),
  lastName: yup
    .string()
    .min(3, "Le nom doit avoir au minimum 3 caractère")
    .required("Le Nom est obligatoire"),
  email: yup
    .string()
    .email("Email est invalid")
    .required("l'adresse email est obligatoire"),
});
