export function section1ViewModel(): () => void {
  const sections = document.querySelectorAll<HTMLElement>("section");

  let resizeHandler: (() => void) | null = null;
  if (window.visualViewport) {
    const updateSectionsHeight = () => {
      sections.forEach((section) => {
        section.style.height = window.visualViewport!.height + "px";
      });
    };
    updateSectionsHeight();
    window.visualViewport.addEventListener("resize", updateSectionsHeight);
    resizeHandler = updateSectionsHeight;
  }

  document.body.classList.add("no-scroll");

  const personalInfo = document.querySelector<HTMLElement>(".personal-info");
  if (personalInfo) {
    personalInfo.classList.remove("start-hidden-updown");
    personalInfo.classList.add("animate-in");
    personalInfo.addEventListener(
      "animationend",
      () => {
        personalInfo.classList.remove("animate-in");
        document.body.classList.remove("no-scroll");
      },
      { once: true }
    );
  }

  const logoImages = document.querySelectorAll<HTMLElement>(
    ".logo-grid .start-hidden-blur"
  );
  logoImages.forEach((img, index) => {
    setTimeout(() => {
      img.classList.add("animate-in-blur");
    }, index * 200);
  });

  const socialIcons = document.querySelector<HTMLElement>(
    ".social-icons-section1"
  );
  if (socialIcons) {
    socialIcons.classList.remove("start-hidden-blur-once");
    socialIcons.classList.add("animate-in-blur-once");
    socialIcons.addEventListener(
      "animationend",
      () => {
        socialIcons.classList.remove("animate-in-blur-once");
      },
      { once: true }
    );
  }

  const scrollDown = document.querySelector<HTMLElement>(".scroll-down");
  if (scrollDown) {
    scrollDown.classList.remove("start-hidden-blur-once");
    scrollDown.classList.add("animate-in-blur-once");
    scrollDown.addEventListener(
      "animationend",
      () => {
        scrollDown.classList.remove("animate-in-blur-once");
      },
      { once: true }
    );
  }

  let lastScrollY = window.scrollY;

  const onScroll = () => {
    const section = document.querySelector<HTMLElement>("section");
    const personalInfo = document.querySelector<HTMLElement>(".personal-info");
    const scrollDown = document.querySelector<HTMLElement>(".scroll-down");
    const socialIcons = document.querySelector<HTMLElement>(
      ".social-icons-section1"
    );
    const logoGridWrapper =
      document.querySelector<HTMLElement>(".logo-grid-wrapper");
    const currentScrollY = window.scrollY;
    if (!section) return;
    const scrollY = window.scrollY;
    const sectionHeight = section.offsetHeight;
    const progress = Math.min(scrollY / sectionHeight, 1);
    if (personalInfo) {
      personalInfo.style.transform = `translateY(-${progress * 700}px)`;
      personalInfo.style.opacity = `${1 - progress}`;
      personalInfo.style.filter = `blur(${progress * 5}px)`;
    }
    if (scrollDown) {
      scrollDown.style.opacity = `${1 - progress}`;
      scrollDown.style.transform = `translateY(${progress * 50}px)`;
      scrollDown.style.filter = `blur(${progress * 5}px)`;
    }
    if (socialIcons) {
      socialIcons.style.opacity = `${1 - progress}`;
      socialIcons.style.transform = `translateY(${progress * 50}px)`;
      socialIcons.style.filter = `blur(${progress * 5}px)`;
    }

    const blurThreshold = 200;
    if (logoGridWrapper) {
      if (currentScrollY > lastScrollY && currentScrollY > blurThreshold) {
        logoGridWrapper.classList.add("blur-out");
      } else if (
        currentScrollY < lastScrollY &&
        currentScrollY < blurThreshold + 100
      ) {
        logoGridWrapper.classList.remove("blur-out");
      }
    }
    lastScrollY = currentScrollY;
  };
  window.addEventListener("scroll", onScroll);

  return () => {
    window.removeEventListener("scroll", onScroll);
    if (window.visualViewport && resizeHandler) {
      window.visualViewport.removeEventListener("resize", resizeHandler);
    }
  };
}
