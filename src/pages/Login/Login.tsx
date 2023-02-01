import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { routes } from "../../routes";
import { Button, TextField } from "@mui/material";
import { ContainerLogin } from "./styles";
import { useAuth } from "../../context/AuthProvider/useAuth";
import { toast } from "react-toastify";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const LoginForm: React.FC = () => {
  const [serverError, setServerError] = useState("");
  const auth = useAuth();

  const navigate = useNavigate();
  const handleSubmit = async (values: LoginFormValues) => {
    try {
      await auth.authenticate(values.email, values.password);
      navigate(routes.home);
    } catch (error) {
      toast.error("Email ou Senha inválidos");
    }
  };

  return (
    <ContainerLogin>
      <div>
        <h3>Acesse sua conta</h3>
        <p>
          não possui conta?{" "}
          <span onClick={() => navigate(routes.register)}>acesse aqui</span>
        </p>
      </div>
      <Formik
        initialValues={{ email: "", password: "" }}
        validationSchema={LoginSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field
              label="Email"
              type="email"
              name="email"
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <ErrorMessage name="email" component="div" />

            <Field
              label="Senha"
              type="password"
              name="password"
              as={TextField}
              variant="outlined"
              margin="normal"
              fullWidth
              required
            />
            <ErrorMessage name="password" component="div" />

            <Button variant="contained" type="submit" disabled={isSubmitting}>
              Login
            </Button>
          </Form>
        )}
      </Formik>
    </ContainerLogin>
  );
};

export default LoginForm;
