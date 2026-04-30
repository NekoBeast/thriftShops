"use client";
import NavPage from "./navStyle";
export const Nav = () => {
  return (
    <NavPage>
      <div className="logo">NekoThrift</div>

      <ul className="nav-links">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#">Men</a>
        </li>
        <li>
          <a href="#">Women</a>
        </li>
        <li>
          <a href="#">Accessories</a>
        </li>
      </ul>

      <div className="icons">
        <span>🔍</span>
        <span>🛒</span>
        <span>👤</span>
      </div>

      <div className="menu-toggle" id="menu-toggle"></div>
    </NavPage>
  );
};
