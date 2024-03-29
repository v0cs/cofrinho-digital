import GlobalStyle from "./styles/global";
import styled from "styled-components";
import Form from "./components/form"; 
import Grid from "./components/Grid";
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
  const [movimentacao, setMovimentacao] = useState([]);
  const [onEdit, setOnEdit] = useState([null]);

  const getMovimentacao = async () => {
    try{
      const res = await axios.get("http://localhost:3000");
      setMovimentacao(res.data.sort((a, b) => new Date(a.data) - new Date(b.data)));
    }catch(err){
      toast.error(err);
    }
  };

  useEffect(() => {
    getMovimentacao();
  }, [setMovimentacao]);

  return (
    <>
      <Container>
        <Title>Movimentação Financeira</Title>
        <Form/>
        <Grid movimentacao = {movimentacao}/>
      </Container>
      <ToastContainer autoClose={3000} position="BOTTOM_LEFT" />
      <GlobalStyle />
    </>
  );
}

export default App;
