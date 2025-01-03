import { useState } from "react";

const links = [
  {
    Title: "Home",
    id: 101,
  },
  {
    Title: "List",
    id: 102,
  },
  {
    Title: "Program",
    id: 103,
  },
  {
    Title: "Choose Us",
    id: 104,
  },
  {
    Title: "Register Now",
    id: 105,
  },
];

const mainCards = [
  {
    Img: "/img/icons/lotus.png",
    Heading: "Yoga & Flex",
    subHeading: "Find Your Balance",
    Text: "Improve flexibility, reduce stress, and achieve inner peace with guided yoga sessions.",
    id: 2,
  },
  {
    Img: "/img/icons/body-abs.png",
    Heading: "Strength Build",
    subHeading: "Build Strength, Build You",
    Text: "Target every muscle group with expert-led strength and resistance training.",
    id: 11,
  },
  {
    Img: "/img/icons/dumbbell.png",
    Heading: "Cardio Blast",
    subHeading: "Elevate Your Heart Rate",
    Text: "Burn calories, boost stamina, and energise your body with dynamic cardio workouts",
    id: 9,
  },
  {
    Img: "/img/icons/people.png",
    Heading: "Personal Coach",
    subHeading: "Your Goals, Our Mission",
    Text: "Work one-on-one with certified trainers to achieve your unique fitness goal.",
    id: 27,
  },
];

export default function App() {
  const [btnActive, setBtnActive] = useState(false);

  return (
    <div>
      <header className="header">
        <NavBar links={links} />
        <Hero btnActive={btnActive} setBtnActive={setBtnActive} />
        <HeroTriangle />
      </header>

      <Main main={mainCards} />
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
  const [activeId, setActiveId] = useState(null);

  function handleClick(e, id) {
    e.preventDefault();
    setActiveId(id);
  }

  // pass in the slideCard state and say that if the state is false then the links should state should g bck to null

  return (
    <div className="menu-lists">
      <ul className="menu-lists-ul">
        {links.map((link, index) => (
          <li
            key={link.id}
            className={
              index === links.length - 1
                ? `${
                    activeId === link.id
                      ? "menu-lists-btn btn-active"
                      : "menu-lists-btn"
                  }`
                : activeId === link.id
                ? "link-active list"
                : "not-link-active list"
            }
            onClick={(e) => handleClick(e, link.id)}
          >
            <a href="#">{link.Title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function Hero({ btnActive, setBtnActive }) {
  return (
    <section className="hero">
      <HeroTexts btnActive={btnActive} setBtnActive={setBtnActive} />
      <HeroImgs />
    </section>
  );
}

function HeroTriangle() {
  return <div className="hero__triangle"></div>;
}

function HeroTexts({ btnActive, setBtnActive }) {
  return (
    <div className="hero-texts">
      <div className="hero-texts--text">
        <h1 className="hero-texts--heading">Transform</h1>
        <h2 className="orange-accent hero-texts--heading">Your Body</h2>

        <p className="hero-texts--subtexts">
          Join us to sculpt your dream physique and embrace a healthier, more
          vibrant life!
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
            className={btnActive ? "arr-right arr-right-active " : "arr-right"}
          >
            {/* b-active */}
            &rarr;
          </span>
        </a>
      </button>
    </div>
  );
}

function HeroImgs() {
  return (
    <div className="hero__imgs">
      <HeroImgFemale>
        <img
          src="./img/landingPage-female.png"
          alt="gym girl"
          width="300"
          height="300"
        />
      </HeroImgFemale>

      <HeroImgMale>
        <img
          src="./img/landingPage-male.png"
          alt="gym boy"
          width="300"
          height="300"
        />
      </HeroImgMale>
    </div>
  );
}

function HeroImgFemale({ children }) {
  return <div className="hero__imgs-img hero__imgs-img-female">{children}</div>;
}

function HeroImgMale({ children }) {
  return <div className="hero__imgs-img hero__imgs-img-male">{children}</div>;
}

function Main({ main }) {
  return (
    <main className="main">
      <MainBrandImgsImg />
      <MainCards main={main} />
      <AboutUs />
    </main>
  );
}

function MainBrandImgsImg() {
  const brandImages = [
    "./img/logo4.png",
    "./img/logo1.png",
    "./img/logo2.png",
    "./img/logo3.png",
  ];

  return (
    <div className="main-brand-imgs">
      {brandImages.map((src, index) => (
        <MainBrandImgs key={index}>
          <img src={src} width="100" height="100" alt="brandImg" />
        </MainBrandImgs>
      ))}
    </div>
  );
}

function MainBrandImgs({ children }) {
  return <div className="main-brand-imgs--img">{children}</div>;
}

function MainCards({ main }) {
  return (
    <div>
      <MainHeading
        heading="Our Program"
        subheading="Build your"
        highlight="dream body"
      />
      <MainCardsCards main={main} />
    </div>
  );
}

function MainHeading({ heading, subheading, highlight }) {
  return (
    <div className="main-heading">
      <h2 className="main-heading-title">{heading}</h2>
      <p className="main-heading-subtitle">
        {subheading} <span>{highlight}</span>
      </p>
    </div>
  );
}

function MainCardsCards({ main }) {
  const [activeId, setActiveId] = useState(null);

  return (
    <div className="mainCards-cards">
      {main.map((i) => (
        <section
          key={i.id}
          className={
            activeId === i.id
              ? "mainCards-cards--sect mainCards-cards--sect active"
              : "mainCards-cards--sect"
          }
          onMouseEnter={() => setActiveId(i.id)}
          onMouseLeave={() => setActiveId(null)}
          onTouchStart={() => setActiveId(i.id)}
        >
          <figure className="mainCards-cards--img">
            <img src={i.Img} alt={i.Img} width="50" height="50" />
          </figure>
          <h2 className="mainCards-cards--heading">{i.Heading}</h2>
          <h4
            className={
              activeId === i.id
                ? "mainCards-cards--sub-heading Active"
                : "mainCards-cards--sub-heading"
            }
          >
            {i.subHeading}
          </h4>
          <p className="mainCards-cards--texts">{i.Text}</p>

          {activeId === i.id && (
            <a href="#" className="mainCards-cards--textsArr arr-right">
              &rarr;
            </a>
          )}
        </section>
      ))}
    </div>
  );
}

function AboutUs() {
  return (
    <section className="about-us">
      <AboutUsTexts />
      <AboutUsImages />
      <div className="hero__triangle aboutUs-triangle"></div>
    </section>
  );
}

function AboutUsTexts() {
  return (
    <div className="about-us--texts">
      <MainHeading
        heading="your fitness, our commitment"
        subheading="why"
        highlight="choose us?"
      />
      <AboutUsDetails />

      <div className="about-us--highlight-flex">
        <AboutUsHighlights value="150+" label="Happy Clients" />
        <AboutUsHighlights value="20+" label="Expert Coaches" />
        <AboutUsHighlights value="15+" label="Custom Plans" />
        <AboutUsHighlights value="50+" label="Success Stories" />
      </div>
    </div>
  );
}

function AboutUsDetails() {
  return (
    <p className="about-us--texts-details">
      Your goals are our priority. Experience personalised training, a
      supportive community, and state-of-the-art facilities designed to keep you
      motivated every step of the way.
    </p>
  );
}

function AboutUsHighlights({ value, label }) {
  return (
    <div className="about-us--highlight">
      <h1 className="about-us--highlight-value">{value}</h1>
      <p className="about-us--highlight-label">{label}</p>
    </div>
  );
}

function AboutUsImages() {
  return (
    <div className="">
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
  );
}
