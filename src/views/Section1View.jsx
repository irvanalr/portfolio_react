import { useEffect } from "react";
import "../components/section1.css";
import { section1ViewModel } from "../viewModels/Section1ViewModel";

export function Section1View() {
  useEffect(() => {
    const cleanup = section1ViewModel();
    return cleanup;
  }, []);

  return (
    <section
      id="Profile"
      className="image-bg"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1950&q=80')",
      }}
    >
      <div className="d-flex flex-column align-items-center text-center">
        <div className="personal-info start-hidden-updown text-center w-100">
          <div className="kotak-circle-image mx-auto border border-white border-3 rounded-circle overflow-hidden">
            <img
              src="/image/irvan.jpeg"
              alt="Irvan Al Rasyid"
              className="w-100 h-100 object-cover"
            />
          </div>

          <div className="d-flex align-items-center justify-content-center gap-2 mt-3">
            <img
              src="https://flagcdn.com/w40/id.png"
              style={{ width: "24px", height: "auto" }}
              alt="Bendera Indonesia"
            />

            <h1 className="m-0">Irvan Al Rasyids</h1>

            <img
              src="https://flagcdn.com/w40/id.png"
              style={{ width: "24px", height: "auto" }}
              alt="Bendera Indonesia"
            />
          </div>

          <div className="container-p">
            <p>
              Fullstack Web & Android | AI (Python RAG) | DevOps & Deployment
            </p>
          </div>
        </div>

        <div className="logo-grid-wrapper mt-4 mt-lg-1 mb-lg-2">
          <div className="logo-grid">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
              alt="HTML"
              className="start-hidden-blur"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
              alt="CSS"
              className="start-hidden-blur"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
              alt="Bootstrap"
              className="start-hidden-blur"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="JS"
              className="start-hidden-blur"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
              alt="PHP"
              className="start-hidden-blur"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg"
              alt="Flutter"
              className="start-hidden-blur"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
              alt="ExpressJS"
              style={{ filter: "invert(1)" }}
              className="start-hidden-blur"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg"
              alt="Go"
              className="start-hidden-blur"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
              alt="Python"
              className="start-hidden-blur"
            />
          </div>
        </div>
      </div>

      <div className="scroll-down start-hidden-blur-once position-absolute text-center w-100 opacity-75 mt-lg-2">
        <p data-key="seeMore">
          See More <br data-key="scrollDown" />
          Scroll Down
        </p>
      </div>

      <div className="social-icons-section1 start-hidden-blur-once">
        <a
          href="https://github.com/irvanalr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
            alt="GitHub"
            className="footer-icon"
            style={{ filter: "invert(1)" }}
          />
        </a>

        <a
          href="https://www.linkedin.com/in/irvan-al-rasyid-2b29b8189"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
            alt="LinkedIn"
          />
        </a>

        <a
          href="https://mail.google.com/mail/?view=cm&fs=1&to=irvanalrasyiddeveloper@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/561/561127.png"
            alt="Email"
            style={{ filter: "invert(1)" }}
          />
        </a>

        <a
          href="https://wa.me/6287785337701"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/733/733585.png"
            alt="WhatsApp"
          />
        </a>
      </div>
    </section>
  );
}
