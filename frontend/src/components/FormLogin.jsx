import React from 'react';
import { Button, Checkbox, Form, Input } from 'antd';

const onFinish = (values) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const FormLogin = () => (
  <Form
    name="basic"
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}
    initialValues={{
      remember: true,
    }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item
      label="Usuario"
      name="Usuario"
      rules={[
        {
          required: true,
          message: 'Por favor insira o Usuario!',
        },
      ]}
    >
      <Input />
    </Form.Item>

    <Form.Item
      label="Senha"
      name="Senha"
      rules={[
        {
          required: true,
          message: 'Por favor insira a Senha!',
        },
      ]}
    >
      <Input.Password />
    </Form.Item>

    <Form.Item
      wrapperCol={{
        offset: 8,
        span: 16,
      }}
    >
      <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
        Entrar
      </Button>
    </Form.Item>
  </Form>
);

export default FormLogin;