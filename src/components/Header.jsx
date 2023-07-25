import { NavLink } from "react-router-dom";
const Header = () => {
  return (
    <>
      <div className="navbar drop-shadow-lg bg-white z-50">
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
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              {/* <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li> */}
              <li>
              <NavLink to="/expense">Expense</NavLink>

              </li>
              <li>
              <NavLink to="/income">Income</NavLink>

              </li>
            </ul>
          </div>
          <a className="btn btn-ghost hover:bg-white normal-case text-xl">E/I Tracker </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 ">
            <li>
            <NavLink to="/">Home</NavLink>

            </li>
            {/* <li tabIndex={0}>
              <details>
                <summary  className="hover:bg-stone-50">Parent</summary>
                <ul className="p-2">
                  <li>
                    <a  className="hover:bg-stone-50">Submenu 1</a>
                  </li>
                  <li>
                    <a  className="hover:bg-stone-50">Submenu 2</a>
                  </li>
                </ul>
              </details>
            </li> */}
            <li>
              <NavLink to="/expense">Expense</NavLink>

              </li>
              <li>
              <NavLink to="/income">Income</NavLink>

              </li>
          </ul>
        </div>
        <div className="navbar-end">
          <label className="swap swap-flip text-2xl">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            <div className="swap-on">🌙</div>
            <div className="swap-off">🌞</div>
          </label>
        </div>
      </div>
    </>
  );
};

export default Header;
