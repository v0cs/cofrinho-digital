// src/components/Formulario.js
import React from 'react';
import { Form, Input, Button, Select } from 'antd';
import styles from './Formulario.module.css'; // Certifique-se de ter esse arquivo CSS

const { Option } = Select;

const Formulario = ({ onAdd }) => {
    const [form] = Form.useForm();

    const onFinish = (values) => {
        onAdd(values);
        form.resetFields();
    };

    return (
        <Form
            form={form}
            layout="inline"
            onFinish={onFinish}
            className={styles.formulario} // Adicione a classe para estilização
            style={{ marginBottom: '20px', gap: '10px' }}
        >
            <Form.Item
                name="tipo"
                label="Tipo"
                rules={[{ required: true, message: 'Por favor, insira o tipo!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="categoria"
                label="Categoria"
                rules={[{ required: true, message: 'Por favor, selecione a categoria!' }]}
            >
                <Select mode="multiple" allowClear>
                    <Option value="nice">Nice</Option>
                    <Option value="developer">Developer</Option>
                    <Option value="loser">Loser</Option>
                    <Option value="cool">Cool</Option>
                    <Option value="teacher">Teacher</Option>
                </Select>
            </Form.Item>
            <Form.Item
                name="descricao"
                label="Descrição"
                rules={[{ required: true, message: 'Por favor, insira a descrição!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="valor"
                label="Valor"
                rules={[{ required: true, message: 'Por favor, insira o valor!' }]}
            >
                <Input type="number" />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit">
                    Adicionar
                </Button>
            </Form.Item>
        </Form>
    );
};

export default Formulario;
