import React from 'react';
import ReactDOM from 'react-dom';
import { ConfigProvider } from 'antd';
import './index.css';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Table: {
            headerBg: '#002140',
            colorTextHeading: '#fff'
          },
        },
      }}
    >
      <App />
    </ConfigProvider>
  </React.StrictMode>
);
