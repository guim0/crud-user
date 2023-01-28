import { TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { FormValues } from "../@types/FormValues";
import { ButtonSubmit, RegisterForm, Submit } from "./styles";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .required("Nome é obrigatório")
    .min(2, "Nome deve ter pelo menos 2 caracteres")
    .max(50, "Nome pode ter até 50 caracteres"),
  lastname: Yup.string()
    .required("Sobrenome é obrigatório")
    .min(2, "Sobrenome deve ter pelo menos 2 caracteres")
    .max(50, "Sobrenome pode ter até 50 caracteres"),
  email: Yup.string()
    .required("Email é obrigatório")
    .email("endereço de email inválido")
    .max(255, "Email pode ter até 255 caracteres"),
});

export const Home = () => {
  const handleSubmit = (values: FormValues) => {
    console.log(values);
  };
  return (
    <RegisterForm>
      <h1>Create your User</h1>
      <p>Crie seu usuário</p>

      <Formik
        initialValues={{ name: "", email: "", lastname: "" }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => (
          <Form>
            <Field
              name="name"
              as={TextField}
              label="Nome"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <ErrorMessage name="name" component="div" />
            <Field
              name="lastname"
              as={TextField}
              label="Sobrenome"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <ErrorMessage name="lastname" component="div" />

            <Field
              name="email"
              as={TextField}
              label="Email"
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <ErrorMessage name="email" component="div" />

            <Submit>
              <ButtonSubmit type="submit" disabled={!isValid}>
                Submit
              </ButtonSubmit>
            </Submit>
          </Form>
        )}
      </Formik>
    </RegisterForm>
  );
};
