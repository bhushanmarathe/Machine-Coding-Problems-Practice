import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Navbar from "./components/navbar";
import { ThemeProvider, useTheme } from "./theme-context";

// Small helper so we can use useTheme
const ThemedLayout = () => {
  const { theme } = useTheme();

  return (
    <div className={`app-root ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </div>
  );
};

function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <ThemedLayout />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
