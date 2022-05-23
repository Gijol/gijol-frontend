import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ReactGA from 'react-ga';
import App from './App';
import reportWebVitals from './reportWebVitals';

// const trackingID = process.env.REACT_APP_DEV_GOOGLE_ANALYTICS_TRACKING_ID;
// // ReactGA.initialize(trackingID!);

// if (trackingID !== null && trackingID !== undefined) {
//   ReactGA.initialize(trackingID);
// }
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
reportWebVitals();
