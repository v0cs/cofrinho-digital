import React, { useState } from 'react';
import {UserOutlined,} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer, Sider } = Layout;
function getItem(label, key, icon, children) {
  return {
    key,
    icon,
    children,
    label,
  };
}
import { HiDocumentReport } from "react-icons/hi";
import { FaMoneyBillTransfer } from "react-icons/fa6";

const items = [
  getItem('Movimentação', '1', <FaMoneyBillTransfer/>),
  getItem('Relatório', '2', <HiDocumentReport />),
  getItem('Usuário', '3', <UserOutlined />),
];
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
        </Content>
        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Programacao WEB ©{new Date().getFullYear()} Created by Celeste
        </Footer>
      </Layout>
    </Layout>
  );
};
export default App;