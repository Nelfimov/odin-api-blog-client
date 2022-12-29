import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Footer from './components/Footer';
import NotificationProvider from
  './components/Notification/NotificationProvider';
import './styles/index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
      <NotificationProvider>
        <App />
        <Footer />
      </NotificationProvider>
    </React.StrictMode>,
);
