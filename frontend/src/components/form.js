import React, { useRef, useState } from "react";
import styled from "styled-components";

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

const Form = ({ onEdit }) => {
  const ref = useRef();

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

  return (
    <FormContainer ref={ref}>
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
        <input name="data" type="date" />
      </InputArea>

      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
