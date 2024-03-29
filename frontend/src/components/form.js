import axios from "axios";
import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const Form = ({ getMovimentacoes, onEdit, setOnEdit }) => {
  const ref = useRef();

  useEffect(() => {
    if (onEdit) {
      const movimentacao = ref.current;

      movimentacao.tipo.value = onEdit.tipo;
      movimentacao.categoria.value = onEdit.categoria;
      movimentacao.descricao.value = onEdit.descricao;
      movimentacao.valor.value = onEdit.valor;
      movimentacao.data_movimentacao.value = onEdit.data_movimentacao;
    }
  }, [onEdit]);

  // Lista de opções de categoria
  const categorias = [
    "Alimentação",
    "Transporte",
    "Moradia",
    "Saúde",
    "Educação",
    "Lazer",
    "Vestuário",
    "Impostos",
    "Dívidas/Pagamentos",
    "Salário",
    "Freelance/Trabalho temporário",
    "Investimentos",
    "Aluguéis",
    "Vendas de bens/serviços",
    "Empréstimos recebidos",
    "Reembolsos",
    "Presentes/Doações",
    "Outros rendimentos",
    "Outros gastos"
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();

    const movimentacao = ref.current

    if(
      !movimentacao.tipo.value||
      !movimentacao.categoria.value||
      !movimentacao.descricao.value||
      !movimentacao.valor.value||
      !movimentacao.data_movimentacao.value
    ) {
      return toast.warn("Preencha todos os campos!")
    }

    if (onEdit){
      await axios
        .put("http://localhost:8800/" + onEdit.id, {
          tipo: movimentacao.tipo.value,
          categoria: movimentacao.categoria.value,
          descricao: movimentacao.descricao.value,
          valor: movimentacao.valor.value,
          data_movimentacao: movimentacao.data_movimentacao.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800/", {
          tipo: movimentacao.tipo.value,
          categoria: movimentacao.categoria.value,
          descricao: movimentacao.descricao.value,
          valor: movimentacao.valor.value,
          data_movimentacao: movimentacao.data_movimentacao.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    }

    movimentacao.tipo.value = "";
    movimentacao.categoria.value = "";
    movimentacao.descricao.value = "";
    movimentacao.valor.value = "";
    movimentacao.data_movimentacao.value = "";

    setOnEdit(null);
    getMovimentacoes();
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea>
        <Label>Tipo</Label>
        <select name="tipo">
          <option value="Despesa">Despesa</option>
          <option value="Receita">Receita</option>
        </select>
      </InputArea>
      <InputArea>
        <Label>Categoria</Label>
        <select name="categoria">
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>
              {categoria}
            </option>
          ))}
        </select>
      </InputArea>
      <InputArea>
        <Label>Descricao</Label>
        <input name="descricao" type="text" />
      </InputArea>
      <InputArea>
        <Label>Valor</Label>
        <input name="valor" type="number" />
      </InputArea>
      <InputArea>
        <Label>Data</Label>
        <input name="data_movimentacao" type="date" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
