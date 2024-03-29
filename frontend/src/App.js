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
  const [movimentacoes, setMovimentacoes] = useState([]);
  const [onEdit, setOnEdit] = useState([null]);

  const getMovimentacoes = async () => {
    try{
      const res = await axios.get("http://localhost:8800");
      setMovimentacoes(res.data.sort((a, b) => new Date(a.data) - new Date(b.data)));
    }catch(err){
      toast.error(err);
    }
  };

  useEffect(() => {
    getMovimentacoes();
  }, [setMovimentacoes]);

  return (
    <>
      <Container>
        <Title>Movimentação Financeira</Title>
        <Form onEdit={onEdit} setOnEdit={setOnEdit} getMovimentacoes={getMovimentacoes}/>
        <Grid movimentacoes = {movimentacoes} setMovimentacoes={setMovimentacoes} setOnEdit={setOnEdit}/>
      </Container>
      <ToastContainer autoClose={8800} position="BOTTOM_LEFT" />
      <GlobalStyle />
    </>
  );
}

export default App;
