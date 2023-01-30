import * as Yup from "yup";

export const formValidation = Yup.object().shape({
  name: Yup.string()
    .required("Nome é obrigatório")
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(50, "Nome pode ter até 50 caracteres"),
  surname: Yup.string()
    .required("Sobrenome é obrigatório")
    .min(2, "Sobrenome deve ter pelo menos 2 caracteres")
    .max(50, "Sobrenome pode ter até 50 caracteres"),
  email: Yup.string()
    .required("Email é obrigatório")
    .email("endereço de email inválido")
    .max(255, "Email pode ter até 255 caracteres"),
});
