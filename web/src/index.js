import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import 'semantic-ui-css/semantic.min.css';

import './index.css';
import App from './containers/App';
import createStore from "./store";

const store = createStore();

// setTimeout(function () {
//     store.dispatch({
//         type: "SET_CARDS",
//         payload: [
//             {
//                 id: 0,
//                 front: "Привет-привет",
//                 back: "Пока-пока"
//             }
//         ]
//     })
// }, 1000);

ReactDOM.render(  //импортируем контейнер App, который в свою очередь импортирует компонент App
  <React.StrictMode>
    <Provider store={store}>
        <App/>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);
