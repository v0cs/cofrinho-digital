import React from "react";
import styled from "styled-components";
import axios from "axios";
import { FaTrash, FaEdit } from "react-icons/fa"
import { toast } from "react-toastify";


const Table = styled.table`
  width: 100%;
  background-color: #fff;
  padding: 20px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  max-width: 1120px;
  margin: 20px auto;
  word-break: break-all;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

export const Th = styled.th`
  text-align: start;
  border-bottom: inset;
  padding-bottom: 5px;
`;

export const Td = styled.td`
  padding-top: 15px;
  text-align: ${(props) => (props.alignCenter ? "center" : "start")};
  width: ${(props) => (props.width ? props.width : "auto")};
`;

const Grid = ({ movimentacao }) => {
    const formatDate = (dateString) => {
        const options = { day: "numeric", month: "numeric", year: "numeric" };
        return new Date(dateString).toLocaleDateString("pt-BR", options);
    };

    return (
        <Table>
            <Thead>
                <Th>Tipo</Th>
                <Th>Categoria</Th>
                <Th>Descrição</Th>
                <Th>Valor</Th>
                <Th>Data</Th>
                <Th></Th>
                <Th></Th>
            </Thead>
            <Tbody>
                {movimentacao.map((item, i) => (
                    <Tr key={i}>
                        <Td width="10%">{item.tipo}</Td>
                        <Td width="30%">{item.categoria}</Td>
                        <Td width="20%">{item.descricao}</Td>
                        <Td width="20%">{item.valor}</Td>
                        <Td width="20%">{formatDate(item.data)}</Td>
                        <Td alignCenter width={"5%"} style={{ paddingRight: "5px" }}>
                            <FaEdit />
                        </Td>
                        <Td alignCenter width={"5%"} style={{ paddingLeft: "5px" }}>
                            <FaTrash/>
                        </Td>
                    </Tr>
                ))}
            </Tbody>
        </Table>
    );
};

export default Grid;