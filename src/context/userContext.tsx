import React, { createContext, useState } from "react";

export const FormContext = createContext({
  name: "",
  setName: (name: string) => {},
  surname: "",
  setSurname: (surname: string) => {},
  email: "",
  setEmail: (email: string) => {},
  editMode: false,
  setEditMode: (editMode: boolean) => {},
});

export const FormContextProvider: React.FC = ({ children }) => {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [editMode, setEditMode] = useState(false);

  return (
    <FormContext.Provider
      value={{
        name,
        setName,
        surname,
        setSurname,
        email,
        setEmail,
        editMode,
        setEditMode,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};
