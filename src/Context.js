// Importing necessary components and hooks from React
import { createContext, useEffect, useReducer } from "react";

// Creating a new context named themeContext
export const themeContext = createContext();

// Initial state for the theme
const initialState = { darkMode: false };

// Theme reducer function that handles state changes
const themeReducer = (state, action) => {
  switch (action.type) {
    case "toggle":
      // When the action type is "toggle", toggle the darkMode value in the state
      return { darkMode: !state.darkMode };
    default:
      return state; // Return the state as is for other action types
  }
};

// ThemeProvider component that provides the themeContext to its children
export const ThemeProvider = (props) => {
  // Use the useReducer hook to manage the theme state using the themeReducer function and the initialState
  const [state, dispatch] = useReducer(themeReducer, initialState);

  // useEffect hook to initialize the theme state based on the user's preferred color scheme
  useEffect(() => {
    // Check if the user's preferred color scheme is dark
    const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
    
    // Dispatch an action to toggle the darkMode state based on the preferred color scheme
    dispatch({ type: "toggle", payload: prefersDarkMode });
  }, []); // The useEffect runs only once, during the component mount

  // Render the themeContext.Provider with the state and dispatch as value and render its children
  return (
    <themeContext.Provider value={{ state, dispatch }}>
      {props.children}
    </themeContext.Provider>
  );
};
