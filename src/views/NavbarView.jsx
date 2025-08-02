import { useEffect, useState } from "react";
import "../components/navbar.css";
import {
  initNavbarLogic,
  useDownloadAlertViewModel,
  useNavbarToggleViewModel,
} from "../viewModels/NavbarViewModel";

export function NavbarView() {
  const {
    showAlert,
    downloadLabel,
    handleClick,
    handleDownloadConfirm,
    handleDownloadCancel,
  } = useDownloadAlertViewModel();

  const { menuVisible, toggleMenu } = useNavbarToggleViewModel();

  useEffect(() => {
    if (showAlert) {
      const cleanup = initNavbarLogic();
      return cleanup;
    } else {
      const cleanup = initNavbarLogic();
      return cleanup;
    }
  }, [showAlert]);

  return (
    <>
      <nav className="navbars w-100 start-hidden-blur-once-navigate">
        <div id="hamburger-menu" onClick={toggleMenu}>
          <i className="bi bi-list"></i>
        </div>

        <div className="lang-toggle-wrapper">
          <div className="lang-flags d-flex gap-2">
            <button
              className="btn btn-outline-light p-1 flag-btn"
              data-lang="en"
              id="btn-en"
            >
              <img src="https://flagcdn.com/24x18/gb.png" alt="English" />
            </button>
            <button
              className="btn btn-outline-light p-1 flag-btn"
              data-lang="id"
              id="btn-id"
            >
              <img src="https://flagcdn.com/24x18/id.png" alt="Indonesia" />
            </button>
          </div>
        </div>

        <ul
          className={`nav-links gap-2 gap-lg-3 gap-xl-4 gap-xxl-5 m-0 fw-semibold ${
            menuVisible ? "show" : ""
          }`}
        >
          <li className="my-3">
            <a
              href="#Profile"
              className="active text-decoration-none"
              data-key="profile"
            >
              Profile
            </a>
          </li>
          <li className="my-3">
            <a
              href="#Projects"
              className="text-decoration-none"
              data-key="projects"
            >
              Projects
            </a>
          </li>
          <li className="my-3">
            <a
              href="#About Me"
              className="about-link text-decoration-none"
              data-key="about"
            >
              About Me
            </a>
          </li>
          <li className="my-3">
            <a
              href="#Case Study"
              className="text-decoration-none"
              data-key="caseStudy"
            >
              Case Study
            </a>
          </li>
          <li className="my-3">
            <a
              href="#Challenges"
              className="text-decoration-none"
              data-key="challenges"
            >
              Challenges
            </a>
          </li>
          <li className="my-3">
            <a
              href="#Technical Experiments"
              className="text-decoration-none"
              data-key="technicalExperiments"
            >
              Technical Experiments
            </a>
          </li>
          <li className="my-3">
            <a
              href="#Experiments"
              className="text-decoration-none"
              data-key="experiments"
            >
              Experiments
            </a>
          </li>
          <li className="my-3">
            <a
              href="#Certificates"
              className="text-decoration-none"
              data-key="certificates"
            >
              Certificates
            </a>
          </li>
        </ul>

        <div className="download-buttons">
          <button
            className="download-apk-btn"
            onClick={handleClick(
              "https://iraldev.my.id/file/demo-banking.apk",
              "demo-banking.apk"
            )}
          >
            <i className="bi bi-download"></i>
            APK
          </button>

          <button
            className="download-cv-btn"
            onClick={handleClick(
              "https://iraldev.my.id/file/IrvanAlRasyid_CV.pdf",
              "IrvanAlRasyid_CV.pdf"
            )}
          >
            <i className="bi bi-download"></i>
            CV
          </button>
        </div>
      </nav>

      {showAlert && (
        <div className="custom-alert-overlay">
          <div className="custom-alert-box text-left">
            <p className="mb-3 fw-bold">
              <span data-key="confirmDownload">
                Are you sure you want to download
              </span>
              <strong>&nbsp;{downloadLabel}</strong>?
            </p>

            {downloadLabel.toLowerCase().includes("apk") && (
              <>
                <p>
                  <span data-key="username">username</span>:{" "}
                  <strong>jhonDoe</strong>
                  <br />
                  <span data-key="password">password</span>:{" "}
                  <strong>jhonDoe123!</strong>
                </p>

                <p className="mt-3">
                  <span data-key="username">username</span>:{" "}
                  <strong>irvan</strong>
                  <br />
                  <span data-key="password">password</span>:{" "}
                  <strong>irvan123!</strong>
                </p>
              </>
            )}

            <div className="mt-4 d-flex justify-content-center gap-3">
              <button
                className="btn btn-success px-4"
                onClick={handleDownloadConfirm}
                data-key="confirmDownloadYes"
              >
                Yes
              </button>
              <button
                className="btn btn-danger px-4"
                onClick={handleDownloadCancel}
                data-key="confirmDownloadNo"
              >
                No
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
