import { useState } from "react";

const links = [
  {
    Title: "Home",
    Id: 101,
  },
  {
    Title: "List",
    Id: 102,
  },
  {
    Title: "Program",
    Id: 103,
  },
  {
    Title: "Choose Us",
    Id: 104,
  },
  {
    Title: "Register Now",
    Id: 105,
  },
];

export default function App() {
  return (
    <div>
      <header className="header">
        <NavBar links={links} />

        <div className="triangle"></div>
      </header>

      <main className="main"></main>
    </div>
  );
}

function NavBar({ links }) {
  const [slide, setSlide] = useState(false);

  function handleSlideMenu() {
    setSlide(!slide);
  }

  return (
    <nav className="nav-bar">
      <NavBarLogo />
      <NavBarMenuBar slideMenu={handleSlideMenu} />
      <NavBarSlideCard
        links={links}
        slideMenu={handleSlideMenu}
        slide={slide}
      />
    </nav>
  );
}

function NavBarLogo() {
  return (
    <div className="nav-bar--logo">
      <figure className="nav-bar--logo-img">
        <img src="./img/logo-orange.png" alt="logo" width="100" height="100" />
      </figure>
      <div className="nav-bar--logo-text">CoreFit</div>
    </div>
  );
}

function NavBarMenuBar({ slideMenu }) {
  return (
    <div
      className="nav-bar--menu"
      onClick={slideMenu}
      role="button"
      aria-label="Open menu"
    >
      <figure className="nav-bar--menu-img">
        <img
          src="./img/burger-bar.png"
          alt="menu-bar"
          width="100"
          height="100"
        />
      </figure>
    </div>
  );
}

function NavBarSlideCard({ slide, slideMenu, links }) {
  return (
    <section
      className={`menuCard ${slide ? "slide-down" : "slide-up"}`}
      // onClick={slideMenu}
    >
      <NavBarCloseBar slideMenu={slideMenu} />
      <NavBarLinks links={links} />
      {/* <NavBarLinksLinks /> */}
    </section>
  );
}

function NavBarCloseBar({ slideMenu }) {
  return (
    <div
      className="close"
      onClick={slideMenu}
      role="button"
      aria-label="Close menu"
    >
      <figure className="nav-bar--menu-img">
        <img src="./img/close.png" alt="close-bar" width="100" height="100" />
      </figure>
    </div>
  );
}

function NavBarLinks({ links }) {
  const [activeID, setActiveID] = useState(null);

  function handleClick(e, id) {
    e.preventDefault();
    setActiveID(id);
  }

  // pass in the slideCard state and say that if the state is false then the links should state should g bck to null

  return (
    <div className="menu-lists">
      <ul className="menu-lists-ul">
        {links.map((link, index) => (
          <li
            key={link.Id}
            className={
              index === links.length - 1
                ? `${
                    activeID === link.Id
                      ? "menu-lists-btn btn-active"
                      : "menu-lists-btn"
                  }`
                : activeID === link.Id
                ? "link-active list"
                : "not-link-active list"
            }
            onClick={(e) => handleClick(e, link.Id)}
          >
            <a href="#">{link.Title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
