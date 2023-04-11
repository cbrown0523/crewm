import { Outlet, Link } from "react-router-dom";
import Home from "./Home";
const Layout = () => {
  return (
    <div>
      <nav>
        <ul>
          <li className="home-link" key="home-button">
            <h1>Crew Mates</h1>

            <Link style="" to="/">
              Home
            </Link>
            <Link to="/create">Create New Crewmate</Link>
          </li>
        </ul>
      </nav>
      {/* use Outlet so that all of the other components we will be rendering will be placed at that location, meaning that with all of our later pages, the Home button will be at the top of every page. */}

      <Outlet />
    </div>
  );
};

export default Layout;
