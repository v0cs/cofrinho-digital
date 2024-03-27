import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/form"; 
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

const Container = styled.div`
  width: 100%;
  max-width: 1100px;
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h2``;

function App() {

  return (
    <>
      <Container>
        <Title>Movimentação Financeira</Title>
        <Form></Form>
      </Container>
      <ToastContainer autoClose={3000} position="BOTTOM_LEFT" />
      <GlobalStyle />
    </>
  );
}

export default App;
