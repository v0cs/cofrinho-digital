import React from 'react';
import { Space, Table, Tag } from 'antd';
import styles from './Tabela.module.css';

const { Column, ColumnGroup } = Table;

const data = [
    {
        key: '1',
        tipo: 'John',
        valor: 32,
        descricao: 'New York No. 1 Lake Park',
        categoria: ['nice', 'developer'],
    },
    {
        key: '2',
        tipo: 'Jim',
        valor: 42,
        descricao: 'London No. 1 Lake Park',
        categoria: ['loser'],
    },
    {
        key: '3',
        tipo: 'Joe',
        valor: 32,
        descricao: 'Sydney No. 1 Lake Park',
        categoria: ['cool', 'teacher'],
    },
];

const Tabela = () => (
    <Table dataSource={data} className={styles.tabela}>
        <Column title="Tipo" dataIndex="tipo" key="tipo" />
        <Column
            title="Categoria"
            dataIndex="categoria"
            key="categoria"
            render={(categoria) => (
                <>
                    {categoria.map((tag) => {
                        let color = tag.length > 5 ? 'geekblue' : 'green';
                        if (tag === 'loser') {
                            color = 'volcano';
                        }
                        return (
                            <Tag color={color} key={tag}>
                                {tag.toUpperCase()}
                            </Tag>
                        );
                    })}
                </>
            )}
        />
        <Column title="Descrição" dataIndex="descricao" key="descricao" />
        <Column title="Valor" dataIndex="valor" key="valor" />
        <Column
            title="Ações"
            key="acoes"
            render={(_, record) => (
                <Space size="middle">
                    <a>Editar {record.tipo}</a>
                    <a>Excluir</a>
                </Space>
            )}
        />
    </Table>
);

export default Tabela;