import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { HashRouter } from 'react-router-dom';
import App from './App';
import './App.scss'
import { store } from './redux/store';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  //BrowserRouter если на хостинг выкладываем - HashRouter для deploy на локальном ПК и просмотре
<HashRouter>
<Provider store={store}>
 <App />
</Provider>
</HashRouter>
 );
