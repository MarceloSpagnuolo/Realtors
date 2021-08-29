import React, { useState } from "react";
import "./NavBar.css";

function NavBar() {
  const [language, setLanguage] = useState("spanish");
  const [display, setDisplay] = useState(false);

  return (
    <div className="Nav-Container">
      <div
        className={display ? "btnNavbar x" : "btnNavbar"}
        onClick={() => setDisplay(!display)}
      >
        <div className="barritaNav btna"></div>
        <div className="barritaNav btnb"></div>
        <div className="barritaNav btnc"></div>
      </div>

      <div
        className={display ? "containerNavList" : "activeDiv"}
        id="divIdList"
      >
        <div className="divListaMobiles">
          <div className="mlP" onClick={() => setDisplay(!display)}>
            <a href="#about">
              {language === "spanish" ? "Sobre mí" : "About me"}
            </a>
          </div>

          <div className="mlP" onClick={() => setDisplay(!display)}>
            <a href="#projects">
              {language === "spanish" ? "Proyectos" : "Projects"}
            </a>
          </div>
          <div className="mlP" onClick={() => setDisplay(!display)}>
            <a href="#skills">
              {language === "spanish" ? "Tecnologías" : "Skills"}
            </a>
          </div>

          <div
            className="mlP"
            onClick={() => {
              language === "spanish"
                ? setLanguage("english")
                : setLanguage("spanish");
              setDisplay(!display);
            }}
          >
            {language === "spanish" ? "English" : "Español"}
          </div>
          {/* <div className="Nav-Img">
            <a
              href="https://www.linkedin.com/in/marcelo-spagnuolo-97459265/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${url}/images/linkedin.png`}
                alt="linkedin"
                onClick={() => setDisplay(!display)}
              />
            </a>
            <a
              href="https://github.com/MarceloSpagnuolo"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${url}/images/github_menu.png`}
                alt="github"
                onClick={() => setDisplay(!display)}
              />
            </a>
            <a href="mailto: lu4huf@gmail.com">
              <img
                src={`${url}/images/email.png`}
                alt="email"
                onClick={() => setDisplay(!display)}
              />
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=+543516185440"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={`${url}/images/ws.png`}
                alt="whatsapp"
                onClick={() => setDisplay(!display)}
              />
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default NavBar;
