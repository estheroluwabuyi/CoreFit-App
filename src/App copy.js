import { useState } from "react";

const menu = [];

export default function App() {
  // const [slide, setSlide] = useState(false);

  return (
    <div>
      <header className="header">
        <Nav />
        <MenuCard />
        <div className="triangle"></div>
      </header>
    </div>
  );
}

function Nav() {
  return (
    <nav className="nav-bar">
      <Logo />
      <MenuBar>
        <img
          src="./img/burger-bar.png"
          alt="menu-bar"
          width="100"
          height="100"
        />
      </MenuBar>
    </nav>
  );
}

function Logo() {
  return (
    <div className="nav-bar--logo">
      <figure className="nav-bar--logo-img">
        <img src="./img/logo-orange.png" alt="logo" width="100" height="100" />
      </figure>
      <div className="nav-bar--logo-text">CoreFit</div>
    </div>
  );
}

function MenuBar({ children }) {
  return (
    <div className="nav-bar--menu">
      <figure className="nav-bar--menu-img">{children}</figure>
    </div>
  );
}

function MenuCard() {
  return (
    <section className="menuCard">
      <div className="close">
        <MenuBar>
          <img src="./img/close.png" alt="menu-bar" width="100" height="100" />
        </MenuBar>
      </div>

      <div className="menu-lists">
        <MenuList>Home</MenuList>
        <MenuList>Program</MenuList>
        <MenuList>Choose Us</MenuList>
        <MenuList> Pricing</MenuList>
        <MenuList className="menu-lists-btn">Register Now</MenuList>
      </div>
    </section>
  );
}

function MenuList({ children, className }) {
  // const [toggleListsColor, setToggleListsColor] = useState(false);

  function handleToggleListsColor(e) {
    e.preventDefault();
  }

  return (
    <ul className="menu-lists-ul">
      <a href="#">
        <li className={`list ${className}`} onClick={handleToggleListsColor}>
          {children}
        </li>
      </a>
    </ul>
  );
}

// {
//   <li
// className={`list ${toggleListsColor ? "active" : ""}`}
// onClick={handleToggleListsColor}
// ></li>
// }

/*
function NavBarLinks({ links }) {
  return (
    <div className="menu-lists">
      <ul className="menu-lists-ul">
        {links.map((link) => (
          <NavBarLink key={link.Id} link={link} />
        ))}
        <NavBarLinksBtn />
      </ul>
    </div>
  );
}

function NavBarLink({ link }) {
  return (
    <li className="list">
      <a href="#">{link.Title}</a>
    </li>
  );
}
  */

// function NavBarLinksBtn() {
//   function handleClick(e) {
//     e.preventDefault();
//   }

//   return (
//     <button className=" menu-lists-btn" onClick={handleClick}>
//       <a href="#">Register Now</a>
//     </button>
//   );
// }
