import { TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { IFormValues } from "../../@types/FormValues";

import { ButtonSubmit } from "../../components/ButtonSubmit";
import { FormContext } from "../../context/userContext";
import { routes } from "../../routes";
import { formValidation } from "../../validation/FormValidation";
import { Container, RegisterForm } from "./styles";

export const Register = () => {
  const { setName, setSurname, setEmail } = useContext(FormContext);

  const navigate = useNavigate();

  const handleSubmit = (values: IFormValues) => {
    setName(values.name);
    setSurname(values.surname);
    setEmail(values.email);

    console.log(values);
    if (values) return navigate(routes.home);
  };
  return (
    <Container>
      <RegisterForm>
        <h1>Create your User</h1>
        <p>Crie seu usuário</p>

        <Formik
          initialValues={{ name: "", email: "", surname: "" }}
          validationSchema={formValidation}
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

              <ButtonSubmit isValid={!isValid} title="Concluir" />
            </Form>
          )}
        </Formik>
      </RegisterForm>
    </Container>
  );
};
