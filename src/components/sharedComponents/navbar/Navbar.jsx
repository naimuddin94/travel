import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  const navLi = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/destination">Destination</NavLink>
      </li>
      <li>
        <NavLink to="/blog">Blog</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLi}
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost normal-case text-xl ">
          <img
            src="/images/frame.png"
            alt="logo image"
            className="w-20 filter-grayscale"
          />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex"></div>
      <div className="navbar-end gap-8">
        <ul className="menu menu-horizontal px-1 space-x-1 text-white">
          {navLi}
        </ul>
        <a className="btn btn-warning normal-case">Login</a>
      </div>
    </div>
  );
};

export default Navbar;
