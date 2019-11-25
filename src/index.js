import React from 'react';
import ReactDOM from 'react-dom';
import App from './store.js';

// PWA
// import * as serviceWorker from './serviceWorker';
// <App /> jsx语法 使用时一定要引入react 如果没有引入则会报错
// jsx中，想要使用自己的组件，可以用标签包裹的形式使用，但是首字母必须大写用来区分是html标签还是自定义组件
ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();
