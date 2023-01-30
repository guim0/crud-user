import { Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext } from "react";
import * as Yup from "yup";
import { FormValues } from "../../@types/FormValues";
import { FormContext } from "../../context/userContext";
import { Container, RegisterForm, Submit } from "./styles";

const validationSchema = Yup.object().shape({
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

export const Home = () => {
  const { setName, setSurname, setEmail } = useContext(FormContext);

  const handleSubmit = (values: FormValues) => {
    setName(values.name);
    setSurname(values.surname);
  };
  return (
    <Container>
      <RegisterForm>
        <h1>Create your User</h1>
        <p>Crie seu usuário</p>

        <Formik
          initialValues={{ name: "", email: "", surname: "" }}
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
                name="surname"
                as={TextField}
                label="Sobrenome"
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
              <ErrorMessage name="surname" component="div" />

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
                <Button
                  variant="contained"
                  size="large"
                  type="submit"
                  disabled={!isValid}
                >
                  Submit
                </Button>
              </Submit>
            </Form>
          )}
        </Formik>
      </RegisterForm>
    </Container>
  );
};
