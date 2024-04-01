import React, { useState } from 'react';
import { UserOutlined, } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Space, Table, Tag } from 'antd';
import { HiDocumentReport } from "react-icons/hi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import Tabela from "../components/Tabela";

const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}

const items = [
  getItem('Movimentação', '1', <FaMoneyBillTransfer />),
  getItem('Relatório', '2', <HiDocumentReport />),
  getItem('Usuário', '3', <UserOutlined />),
];

const data = [
  {
    key: '1',
    tipo: 'Despesa',
    lastName: 'Brown',
    valor: 32,
    descricao: 'New York No. 1 Lake Park',
    categoria: ['nice', 'developer'],
  },
  {
    key: '2',
    tipo: 'Receita',
    lastName: 'Green',
    valor: 42,
    descricao: 'London No. 1 Lake Park',
    categoria: ['loser'],
  },
  {
    key: '3',
    tipo: 'Despesa',
    lastName: 'Black',
    valor: 32,
    descricao: 'Sydney No. 1 Lake Park',
    categoria: ['cool', 'teacher'],
  },
]

const { Column, ColumnGroup } = Table;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content>
          <Tabela  data={data}/>
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Cofrinho Digital ©{new Date().getFullYear()} Created by Celeste
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;