import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar p-0 ">
      <div className="flex-1">
        <a className=" text-2xl font-bold">Coffee Book</a>
      </div>
      <div className="flex-none">
        <ul className="menu-horizontal flex gap-4 text-lg font-medium">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/Coffee">Coffee</NavLink>
          </li>
          <li>
            <NavLink to="/Dashboard">Dashboard</NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
