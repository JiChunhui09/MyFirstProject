// React: core package or framework
// ReactDom:Rendering Related Package

import React from 'react';
import ReactDOM from 'react-dom/client';
// Global style files of Application
import './index.css';
// The root component, the beginning of all components
import App from './App';

// Render the root component of the app to the dom node with id root by calling the render method of ReactDOM
const root = ReactDOM.createRoot(document.getElementById('root'));
// function tick() {
//     const element = (
//         <div>
//             <h1>Hello, world!</h1>
//             <h2>It is {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
//     root.render(element);
// }
//
// setInterval(tick, 1000);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// root.render(<h1>Hello, World!</h1>);

