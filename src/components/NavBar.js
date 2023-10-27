import React from "react";
import { TbClick } from "react-icons/tb";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import Logo from "../assets/imgs/Logo1.png";
function NavBar() {
  const [isActive, setActive] = React.useState("home");
  const [isShow, setShow] = React.useState(false);
  const [showNavbar, setShowNavbar] = React.useState(true);

  React.useEffect(() => {
    let prevScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY) {
        // Scrolling down, hide the navbar
        setShowNavbar(false);
      } else {
        // Scrolling up, show the navbar
        setShowNavbar(true);
      }

      prevScrollY = currentScrollY;
    };

    // Attach the scroll event listener when the component mounts
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  function updateActive(value) {
    setActive(value);
    setShow(!isShow);
  }
  return (
    <header>
      <div className="container">
        <nav
          className={`${isShow ? "showMob" : ""}${showNavbar ? "" : "hideNav"}`}
        >
          <div className="nav-logo">
            <img src={Logo} alt="Abdellatif Logo" />
          </div>
          {isShow ? (
            <FaXmark
              className="menu-toggler"
              onClick={() => setShow(!isShow)}
            />
          ) : (
            <FaBarsStaggered
              className="menu-toggler"
              onClick={() => setShow(!isShow)}
            />
          )}
          <div className="nav-menu">
            <div className={`nav-links ${isShow ? "showMob" : ""}`}>
              <ul>
                <li>
                  <a
                    className={isActive === "home" ? "active" : ""}
                    onClick={() => updateActive("home")}
                    href="#home"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className={isActive === "skills" ? "active" : ""}
                    onClick={() => updateActive("skills")}
                    href="#skills"
                  >
                    Skills
                  </a>
                </li>
                <li>
                  <a
                    className={isActive === "projects" ? "active" : ""}
                    onClick={() => updateActive("projects")}
                    href="#projects"
                  >
                    Projects
                  </a>
                </li>
                <li>
                  <a
                    className={isActive === "contact" ? "active" : ""}
                    onClick={() => updateActive("contact")}
                    href="#contact"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <div className="nav-btn">
                    <a href="#contact">
                      <button
                        className="main-btn"
                        onClick={() => setShow(!isShow)}
                      >
                        Get in Touch <TbClick />
                      </button>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default NavBar;
