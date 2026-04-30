import styled from "styled-components";

const NavPage = styled.div`
  
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 30px;
    background-color: black;
    color: white;
  
  .logo {
    font-size: 22px;
    font-weight: bold;
  }

  .nav-links {
    display: flex;
    list-style: none;
    gap: 25px;
  }

  .nav-links a {
    text-decoration: none;
    color: white;
    transition: 0.3s;
  }

  .nav-links a:hover {
    color: #f39c12;
  }

  .icons span {
    margin-left: 15px;
    cursor: pointer;
  }

  /* Hamburger menu (hidden on desktop) */
  .menu-toggle {
    display: none;
    font-size: 22px;
    cursor: pointer;
  }

  /* 📱 Responsive Design */
  @media (max-width: 768px) {
    .nav-links {
      position: absolute;
      top: 60px;
      left: 0;
      width: 100%;
      background: black;
      flex-direction: column;
      align-items: center;
      display: none;
    }

    .nav-links.active {
      display: flex;
    }

    .menu-toggle {
      display: block;
    }
  }
`;

export default NavPage;
