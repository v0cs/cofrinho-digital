import React from 'react';
import { Button, Form, Input } from 'antd';
import { FaUser } from "react-icons/fa";
import { FaKey } from "react-icons/fa";

const FormLogin = ({onFinish}) => (
  <Form
    name="basic"
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    autoComplete="off"
  >
    <Form.Item
      name="Usuario"
      rules={[
        {
          required: true,
          message: 'Por favor insira o Usuario!',
        },
      ]}
    >
      <Input placeholder='Usuário' prefix={<FaUser color='#1677ff' style={{marginRight: '5px'}}/>}/>
    </Form.Item>

    <Form.Item
      name="Senha"
      rules={[
        {
          required: true,
          message: 'Por favor insira a Senha!',
        },
      ]}
    >
      <Input.Password placeholder='Senha' prefix={<FaKey color='#1677ff' style={{marginRight: '5px'}} />} />
    </Form.Item>

    <Form.Item>
      <Button block type="primary" htmlType="submit">
        Entrar
      </Button>
    </Form.Item>
  </Form>
);

export default FormLogin;