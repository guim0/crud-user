import styled from "styled-components";

export const RegisterForm = styled.main`
  max-width: 550px;
  margin: 0 auto;
  border: 1px solid #595d6a;
  border-radius: 10px;
  padding: 1rem;
`;

export const Submit = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
`;
export const ButtonSubmit = styled.button`
  padding: 1rem 2rem;
  border: none;
  outline: none;
  border-radius: 10px;
  max-width: 250px;
  margin: 0 auto;
  color: white;
  background-color: #000505;
  cursor: pointer;
  :hover {
    filter: brightness(1);
  }
`;
