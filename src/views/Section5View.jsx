import "../components/section5.css";
import { useEffect } from "react";
import {
  initNavbarLogic,
  useCertificateDownloadViewModel,
} from "../viewModels/Section5ViewModel";

export function Section5View() {
  const {
    showAlert,
    downloadLabel,
    handleClick,
    handleDownloadConfirm,
    handleDownloadCancel,
  } = useCertificateDownloadViewModel();

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
      <section
        id="Certificates"
        className="certificates-section text-center text-white"
      >
        <div className="container">
          <h2 className="mb-5" data-key="certificates">
            Certificates
          </h2>

          <div className="certificate-list d-flex flex-row justify-content-center align-items-start flex-wrap">
            <div className="certificate-item" style={{ width: "50%" }}>
              <button
                className="btn btn-outline-light mt-2"
                data-key="downloadCertificate"
                onClick={handleClick(
                  "https://iraldev.my.id/file/msib.pdf",
                  "msib.pdf"
                )}
              >
                Download Certificate
              </button>
              <iframe
                src="/file/msib.pdf#toolbar=0&navpanes=0&scrollbar=0"
                width="100%"
                height="650px"
                style={{
                  border: "2px solid #444",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              ></iframe>
              <p className="mt-3 fs-5">
                MSIB Kampus Merdeka – Studi Independen 2023
              </p>
            </div>

            <div className="certificate-item" style={{ width: "50%" }}>
              <button
                className="btn btn-outline-light mt-2"
                data-key="downloadCertificate"
                onClick={handleClick(
                  "https://iraldev.my.id/file/magang_mandiri.pdf",
                  "magang_mandiri.pdf"
                )}
              >
                Download Certificate
              </button>
              <iframe
                src="/file/magang_mandiri.pdf#toolbar=0&navpanes=0&scrollbar=0"
                width="100%"
                height="650px"
                style={{
                  border: "2px solid #444",
                  borderRadius: "8px",
                  overflow: "hidden",
                }}
              ></iframe>
              <p className="mt-3 fs-5">
                Magang Mandiri Kampus Merdeka – 2024/2025
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="Ready" className="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/Pz-H9Bx6Bug?autoplay=1&mute=1&loop=1&playlist=Pz-H9Bx6Bug&controls=0&modestbranding=1"
          title="IrvanAlRasyid-dev video section6"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowfullscreen
        ></iframe>

        <a
          href="https://www.youtube.com/watch?v=Pz-H9Bx6Bug"
          className="video-overlay-link"
          aria-label="Watch on YouTube"
        ></a>
      </section>

      <footer className="footer no-snap">
        <div className="footer-container">
          <p data-key="footer">
            &copy; 2025 Irvan Al Rasyid. Made with passion.
          </p>
          <div className="social-icons">
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
        </div>
      </footer>

      {showAlert && (
        <div className="custom-alert-overlay">
          <div className="custom-alert-box text-left">
            <p className="mb-3 fw-bold">
              <span data-key="confirmDownload">
                Are you sure you want to download
              </span>
              <strong>&nbsp;{downloadLabel}</strong>?
            </p>

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
