import { Button, TextField } from "@mui/material";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContext } from "react";
import { IFormValues } from "../../@types/FormValues";

import { ButtonSubmit } from "../../components/ButtonSubmit";
import { FormContext } from "../../context/userContext";
import { formValidation } from "../../validation/FormValidation";

import { FormContainer, PreviewData, Table } from "./styles";

export const Home = () => {
  const { name, surname, email, setName, setSurname, setEmail } =
    useContext(FormContext);

  const handleSubmit = (values: IFormValues) => {
    setName(values.name);
    setSurname(values.surname);
    setEmail(values.email);

    console.log(values);
  };
  return (
    <main>
      <PreviewData>
        <h3>
          Olá {name} {surname ?? surname}
        </h3>

        <h2>Aqui você pode visualizar e editar seus dados</h2>
        <h4>Atualmente seus dados são</h4>
        <Table>
          <tr>
            <th>Nome</th>
            <th>Sobrenome</th>
            <th>Email</th>
          </tr>
          <tr>
            <td>{name}</td>
          </tr>
          <tr>
            <td></td>
            <td>{surname}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td>{email}</td>
          </tr>
        </Table>
      </PreviewData>

      <FormContainer>
        <h3>Caso queira atualizar seus dados</h3>
        <Formik
          initialValues={{ name: name, surname: surname, email: email }}
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
      </FormContainer>
    </main>
  );
};
