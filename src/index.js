import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'react-jss';
import './index.css';
import App from './components/App/App';
import reportWebVitals from './reportWebVitals';
import theme from './consts/theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept('./components/App/App', () => {
    // eslint-disable-next-line global-require
    const NextApp = require('./components/App/App').default;
    ReactDOM.render(
      <React.StrictMode>
        <ThemeProvider theme={theme}>
          <NextApp />
        </ThemeProvider>
      </React.StrictMode>,
      document.getElementById('root'),
    );
  });
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
