import { useEffect } from "react";
import "../components/section2.css";
import { Section2ViewModel } from "../viewModels/Section2ViewModel";

export function Section2View() {
  useEffect(() => {
    const cleanup = Section2ViewModel();
    return cleanup;
  }, []);

  return (
    <>
      <section id="Projects" className="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/XRT9PEWdBis?autoplay=1&mute=1&loop=1&playlist=XRT9PEWdBis&controls=0&modestbranding=1"
          title="IrvanAlRasyid-dev androiddemo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />

        <a
          href="https://www.youtube.com/watch?v=XRT9PEWdBis"
          className="video-overlay-link"
          aria-label="Watch on YouTube"
        ></a>
      </section>

      <section
        id="About Me"
        className="image-bg"
        style={{
          backgroundImage: "url('https://picsum.photos/id/1039/1920/1080')",
          backgroundSize: "cover",
        }}
      >
        <div className="scroll-wrapper">
          <div className="about-container d-flex gap-2 justify-content-center flex-wrap mt-3">
            <div className="about-box p-3 rounded-3 text-white shadow-lg">
              <h2 data-key="about">About Me</h2>

              <p className="mt-1 ln-base" data-key="aboutParagraph">
                I'm Irvan, a <strong>fullstack developer</strong> with a unique
                journey into tech. I come from a{" "}
                <strong>non-technical background</strong>, my early career
                started in the hospitality industry, with my last role being a
                cook at <strong>the 5-star Le Meridien hotel</strong>. when the
                pandemic hit, the hotel business was disrupted, and I had to
                pivot. with only a <strong>D1 diploma</strong>, I faced
                challenges applying for jobs that required higher education.
                that’s when I discovered <strong>programming</strong>, a field
                that didn’t just welcome curiosity but{" "}
                <strong>thrived on it</strong>.
              </p>

              <p className="mt-1 ln-base" data-key="aboutParagraph2">
                I taught myself <strong>programming</strong> through research
                and hands-on experimentation inspired by popular applications. I
                later joined the <strong>Merdeka internship program</strong> to
                experience real-world industry practices, completing{" "}
                <strong>three internships</strong> two mandatory and one bonus.
                I started in Batam as an{" "}
                <strong>Android developer using Kotlin</strong>, then continued
                at <strong>PT TREC</strong> as a{" "}
                <strong>frontend developer</strong>. there, I contributed to
                developing multiple applications using <strong>Flutter</strong>{" "}
                with <strong>flavor-based architecture</strong>, maximizing{" "}
                <strong>code reuse</strong> and <strong>maintainability</strong>
                .
              </p>

              <p className="mt-1 ln-base" data-key="aboutParagraph3">
                My formal journey in tech continued when I enrolled at{" "}
                <strong>STMIK Jakarta STI&K</strong>, where I honed my academic
                foundation while applying what I learned directly in real-world
                projects. the environment supported my growth not only as a
                student but as a{" "}
                <strong>developer ready to take on industry challenges</strong>.
              </p>

              <p className="mt-1 ln-base" data-key="aboutParagraph4">
                Now, I specialize in building <strong>scalable apps</strong>{" "}
                using <strong>Flutter for mobile</strong>, securing backends
                with
                <strong>Node.js and MySQL</strong>, and designing{" "}
                <strong>modular backend architectures</strong> that separate
                concerns from database queries to middleware. I structure code
                with <strong>MVVM</strong> and <strong>Atomic Design</strong>,
                and apply <strong>clean architecture principles</strong> to
                improve system scalability and security.
              </p>

              <p className="mt-1 ln-base" data-key="aboutParagraph5">
                I’ve also explored <strong>AI</strong>,{" "}
                <strong>database modeling</strong>, and{" "}
                <strong>DevOps practices</strong> like{" "}
                <strong>VPS setup</strong> and{" "}
                <strong>reverse proxy configuration</strong>. I enjoy breaking
                things down to understand how they work and rebuilding them
                better.
              </p>

              <p className="mt-1 ln-base" data-key="aboutParagraph6">
                For <strong>monolithic apps</strong>, I apply the{" "}
                <strong>MVC pattern</strong>, while for more modern, decoupled
                systems, I use <strong>MVVM</strong>, ensuring the right
                structure for each case. being a developer for me is not just
                about building software, but about{" "}
                <strong>constantly evolving</strong> with it.
              </p>
            </div>

            <div className="about-box p-4 rounded-3 text-white shadow-lg">
              <h2 className="mb-3 pt-1" data-key="systemArchitecture">
                System Architecture
              </h2>

              <div className="row row-cols-2 g-4 mt-4">
                <div className="d-flex flex-column">
                  <p data-key="mvcArchitecture">MVC Architecture</p>
                  <img
                    src="/image/mvc.png"
                    alt="MVC Architecture"
                    className="img-fluid rounded w-75 object-fit-cover rounded-3"
                  />
                </div>

                <div className="d-flex flex-column">
                  <p data-key="modularArchitecture">Modular Architecture</p>
                  <img
                    src="/image/modular_pattern.png"
                    alt="Modular Architecture"
                    className="img-fluid rounded w-75 object-fit-cover rounded-3"
                  />
                </div>

                <div className="d-flex flex-column">
                  <p data-key="mvvmArchitecture">MVVM Architecture</p>
                  <img
                    src="/image/mvvm.png"
                    alt="MVVM Architecture"
                    className="img-fluid rounded w-75 object-fit-cover rounded-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          id="imagePreviewOverlay"
          className="image-preview-overlay"
          style={{ display: "none" }}
        >
          <button
            id="closePreviewBtn"
            className="close-btn"
            aria-label="Close preview"
          >
            &times;
          </button>
          <img id="imagePreview" alt="Preview" className="preview-image" />
        </div>
      </section>
    </>
  );
}
