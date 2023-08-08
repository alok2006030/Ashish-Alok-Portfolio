// Importing React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom';

// Importing the main App component from './App'
import App from './App';

// Importing the ThemeProvider from './Context'
import { ThemeProvider } from './Context';

// Rendering the App component wrapped with the ThemeProvider to provide theme context to all descendants
ReactDOM.render(
  // Wrap the App component with the ThemeProvider
  <ThemeProvider>
    <App />
  </ThemeProvider>,
  // Rendering the JSX content inside the 'root' element in the HTML file
  document.getElementById('root')
);
