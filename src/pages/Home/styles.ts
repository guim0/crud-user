import styled from "styled-components";

export const FormContainer = styled.section`
  max-width: 550px;
  width: 100%;
  background-color: white;
  padding: 1rem;
  border-radius: 10px;
  margin: 0 auto;
  text-align: center;
`;

export const Table = styled.table`
  text-align: center;
  background-color: white;
  border-radius: 10px;
  padding: 0.5rem;
  margin: 0 auto;
  td,
  td {
    width: 120px;
  }
`;

export const PreviewData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 1rem;
`;
