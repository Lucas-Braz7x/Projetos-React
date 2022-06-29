import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import 'antd/dist/antd.css';
import { ConfigProvider } from 'antd';
import ptBr from "antd/lib/locale/pt_BR";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ConfigProvider locale={ptBr}>
      <App />

    </ConfigProvider>
  </React.StrictMode>
);
