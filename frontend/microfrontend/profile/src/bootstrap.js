import React from 'react';
import ReactDOM from 'react-dom';

// const mount = (el) => {
//   ReactDOM.render(<App />, el);
// };

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.getElementById('_auth-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

export { mount };