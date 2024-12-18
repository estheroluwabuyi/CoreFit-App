import { useEffect, useState } from "react";

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
  const [btnActive, setBtnActive] = useState(false);

  return (
    <div>
      <header className="header">
        <NavBar links={links} />

        <section className="hero">
          <div className="hero-texts">
            <div className="hero-texts--text">
              <h1 className="hero-texts--heading">Transform</h1>
              <h2 className="orange-accent hero-texts--heading">Your Body</h2>

              <p class="hero-texts--subtexts">
                Join us to sculpt your dream physique and embrace a healthier,
                more vibrant life!
              </p>
            </div>

            <button
              className={
                btnActive
                  ? "hero__texts-btn hero-btn-active"
                  : "hero__texts-btn b-active"
              }
              onMouseEnter={() => setBtnActive(true)}
              onMouseLeave={() => setBtnActive(false)}
            >
              <a href="#">
                Get Moving
                <span
                  className={
                    btnActive
                      ? "arr-right arr-right-active "
                      : "arr-right b-active"
                  }
                >
                  &rarr;
                </span>
              </a>
            </button>
          </div>

          <div className="hero__imgs">
            <div className="hero__imgs-img hero__imgs-img-female">
              <img
                src="./img/landingPage-female.png"
                alt="gym girl"
                width="300"
                height="300"
              />
            </div>

            <div className="hero__imgs-img hero__imgs-img-male">
              <img
                src="./img/landingPage-male.png"
                alt="gym boy"
                width="300"
                height="300"
              />
            </div>
          </div>
        </section>
        <div className="hero__triangle"></div>
      </header>

      <main className="main"></main>
    </div>
  );
}

function NavBar({ links }) {
  const [slide, setSlide] = useState(false);
  const [hide, setHide] = useState(false);

  function handleSlideMenu() {
    setSlide(!slide);
    setHide(!hide);
  }

  return (
    <nav className="nav-bar">
      <NavBarLogo />
      <NavBarMenuBar slideMenu={handleSlideMenu} />
      {hide && (
        <NavBarSlideCard
          links={links}
          slideMenu={handleSlideMenu}
          slide={slide}
          hide={hide}
        />
      )}
    </nav>
  );
}

function NavBarLogo() {
  return (
    <a href="#" className="nav-bar--logo">
      <figure className="nav-bar--logo-img">
        <img src="./img/logo-orange.png" alt="logo" width="100" height="100" />
      </figure>
      <div className="nav-bar--logo-text">CoreFit</div>
    </a>
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

function NavBarSlideCard({ slide, slideMenu, links, hide }) {
  return (
    <section className={`menuCard ${slide ? "slide-down" : "slide-up"}`}>
      <NavBarCloseBar slideMenu={slideMenu} />
      <NavBarLinks links={links} />
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
