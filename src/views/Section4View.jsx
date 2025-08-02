import { useEffect } from "react";
import "../components/section4.css";
import { Section4ViewModel } from "../viewModels/Section4ViewModel";

export function Section4View() {
  useEffect(() => {
    const cleanup = Section4ViewModel();
    return cleanup;
  }, []);

  return (
    <>
      <section id="Technical Experiments" className="video-wrapper">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/YGnqkHZIwEs?autoplay=1&mute=1&loop=1&playlist=YGnqkHZIwEs&controls=0&modestbranding=1"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <a
          href="https://www.youtube.com/watch?v=YGnqkHZIwEs"
          className="video-overlay-link"
          aria-label="Watch on YouTube"
        ></a>
      </section>

      <section
        id="Experiments"
        className="image-bg"
        style={{
          backgroundImage: "url('https://picsum.photos/id/1074/1920/1080')",
          backgroundSize: "cover",
        }}
      >
        <div className="scroll-wrapper-experiments">
          <div className="container-exsperiments">
            <h2 data-key="experiments">Experiments</h2>
            <p data-key="experimentsParagraph">
              Throughout my learning journey, independent experimentation has
              been one of the most enjoyable and effective approaches for me. I
              often seek out references on the internet, try various techniques
              and technologies one by one, and draw conclusions based on the
              outcomes of my own trials. I understand that this method may take
              longer than learning directly from an expert, but through this
              process, I not only grasp how a system works, but also understand
              the reasons behind its design.
            </p>
            <p data-key="experimentsParagraph2">
              The case study for this undergraduate final project is based on my
              internship experience at <strong>PT TREC Digital</strong>, where I
              was assigned as a frontend developer. Although I worked in the
              frontend division, I independently conducted a series of
              experiments to enhance the quality of the system I was building.
              One such experiment involved implementing a{" "}
              <strong>LIFO (Last In First Out)</strong>
              stack algorithm to handle the device's back button, functioning
              similarly to <em>undo</em> and <em>redo</em> features. I also
              applied <strong>throttle</strong> and <strong>debounce</strong>{" "}
              techniques to ensure that API calls were triggered only once as
              needed, preventing excessive requests.
            </p>
            <p data-key="experimentsParagraph3">
              Another experiment was conducted on the home screen authorization
              process, where I designed a mechanism to detect when users lost
              internet connectivity and automatically redirect them to the login
              page. This approach was intended to mitigate potential attacks
              from malicious actors, although at this stage it remains a
              precautionary measure and not yet backed by concrete evidence.
            </p>
            <p data-key="experimentsParagraph4">
              On the backend side, I also performed independent experiments to
              support this undergraduate final project. These included
              implementing authentication and authorization systems, creating a{" "}
              <strong>rate limiter</strong> to defend against
              <em>Denial of Service (DoS)</em> attacks, and using{" "}
              <strong>database locking</strong> to maintain data consistency
              during transfer operations. To deepen my understanding, I
              intentionally exposed a local test environment to{" "}
              <em>SQL injection</em> vulnerabilities in order to observe how
              such attacks interact with MySQL.
            </p>
            <p data-key="experimentsParagraph5">
              Another set of experiments involved server management using a{" "}
              <strong>Virtual Private Server (VPS)</strong>. I explored how to
              set up a <strong>reverse proxy</strong> with{" "}
              <strong>Nginx</strong> and installed <strong>SSL/TLS</strong>
              certificates to secure a custom domain I personally purchased.
              Furthermore, I implemented a <strong>rate limiter</strong>
              directly on the Nginx layer to add an extra security layer before
              requests reached the backend system.
            </p>
            <p data-key="experimentsParagraph6">
              All of these experiments were carried out with the aim of
              expanding my understanding of how to build systems that are not
              only functional, but also secure and reliable under real-world
              conditions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
