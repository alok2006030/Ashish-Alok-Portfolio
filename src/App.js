// Importing required components and styles
import Navbar from "./components/Navbar/Navbar"; 
import Intro from "./components/Intro/Intro";
import Skills from "./components/Skills/Skills";
import "./App.css";
import Portfolio from "./components/Portfolio/Portfolio";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { useContext } from "react"; // Importing useContext hook from React
import { themeContext } from "./Context"; // Importing the themeContext from a custom context


// App component function
function App() {
  // Accessing theme state from the context using useContext hook
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;

  // Return statement for rendering the App component
  return (
    // Styling dark mode and light mode based on the state from the context
    <div
      className="App"
      style={{
        background: darkMode ? "black" : "", // Apply black background when in dark mode
        color: darkMode ? "white" : "", // Apply white text color when in dark mode
      }}
    >
      {/* Rendering child components */}
      <Navbar /> {/* Renders the Navbar component */}
      <Intro /> {/* Renders the Intro component */}
      <Skills /> {/* Renders the Skills component */}
      <Portfolio /> {/* Renders the Portfolio component */}
      <Contact /> {/* Renders the Contact component */}
      <Footer /> {/* Renders the Footer component */}
    </div>
  );
}

export default App;
