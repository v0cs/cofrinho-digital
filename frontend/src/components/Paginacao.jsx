import React, { useState } from 'react';
import { UserOutlined, } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { HiDocumentReport } from "react-icons/hi";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom';

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
  getItem('Movimentação', '/movimentacao', <FaMoneyBillTransfer />),
  getItem('Relatório', '/relatorio', <HiDocumentReport />),
  getItem('Usuário', '/usuario', <UserOutlined />),
];

const App = ({children}) => {
  const navigate = useNavigate();

  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout
      style={{
        minHeight: '100vh',
        maxWidth: '100vw'
      }}
    >
      <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
        <div className="demo-logo-vertical" />
        <Menu onClick={({key}) => navigate(key)}  theme="dark" defaultSelectedKeys={[window.location.pathname]} mode="inline" items={items} />
      </Sider>
      <Layout>
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content>
          {children}
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