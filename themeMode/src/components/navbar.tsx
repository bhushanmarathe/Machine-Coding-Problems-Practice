import { Link } from "react-router-dom";
import { useTheme } from "../theme-context";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="navbar">
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/blog">Blog</Link>

      <button onClick={toggleTheme}>
        {theme === "light" ? "Dark mode" : "Light mode"}
      </button>
    </div>
  );
};

export default Navbar;
