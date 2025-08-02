import { useEffect } from "react";
import "../components/section3.css";
import { Section3ViewModel } from "../viewModels/Section3ViewModel";

export function Section3View() {
  useEffect(() => {
    const cleanup = Section3ViewModel();
    return cleanup;
  }, []);

  return (
    <>
      <section id="Case Study" className="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/d4pmSwhDCIg?autoplay=1&mute=1&loop=1&playlist=d4pmSwhDCIg&controls=0&modestbranding=1"
          title="IrvanAlRasyid-dev androiddemo"
          frameBorder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        />

        <a
          href="https://www.youtube.com/watch?v=d4pmSwhDCIg"
          className="video-overlay-link"
          aria-label="Watch on YouTube"
        ></a>
      </section>

      <section
        id="Challenges"
        className="image-bg"
        style={{
          backgroundImage: "url('https://picsum.photos/id/1050/1920/1080')",
          backgroundSize: "cover",
        }}
      >
        <div className="scroll-wrapper-challenge">
          <div className="container-challenge">
            <h2 data-key="challenges">Challenges</h2>
            <p data-key="challengesParagraph">
              This case study is based on my undergraduate project, which took
              place at <strong>PT TREC Digital</strong>, where I served as a
              frontend developer. PT TREC faced challenges in managing a wide
              range of client requests, which led to the decision to adopt{" "}
              <strong>Flutter</strong> due to its ability to efficiently build
              cross-platform applications from a single codebase.
            </p>
            <p data-key="challengesParagraph2">
              Flutter was chosen not only for its development productivity but
              also because its compilation process involves <strong>C++</strong>
              , producing <em>.dex</em> files that are significantly more
              difficult to reverse-engineer compared to native applications
              built with <strong>Java</strong> or <strong>Kotlin</strong>. To
              manage different application versions for various environments,
              the <strong>Flutter flavor</strong> approach was adopted, allowing
              clear separation between environments such as staging and
              production. Furthermore, the use of Flutter flavor enabled the
              development of multiple applications from a single codebase simply
              by adjusting the flavor configurations according to each client's
              specific needs.
            </p>
            <p data-key="challengesParagraph3">
              As a complement to my undergraduate studies, I independently
              designed and developed the backend system, with a strong focus on{" "}
              <strong>security</strong> and <strong>reliability</strong>.
              Several techniques were implemented, including{" "}
              <strong>rate limiting</strong> to prevent <em>DoS</em> attacks,{" "}
              <strong>database locking</strong> to maintain transactional
              consistency, and the use of{" "}
              <strong>symmetric and asymmetric encryption</strong>,{" "}
              <em>digital signatures</em>, and <strong>Argon2</strong> for{" "}
              <em>password hashing</em>. Security testing was also conducted
              through simulated <strong>SQL injection</strong> attacks.
            </p>
            <p data-key="challengesParagraph4">
              With the combination of frontend and backend strategies, the
              system not only delivers optimal performance but also ensures
              strong <strong>data integrity</strong> and{" "}
              <strong>security</strong>
              throughout its operations.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
