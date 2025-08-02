import { useState } from "react";

export function useNavbarToggleViewModel() {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible((prev) => !prev);
  };

  return {
    menuVisible,
    toggleMenu,
  };
}

export function initNavbarLogic(): () => void {
  const cleanupCallbacks: (() => void)[] = [];

  const navbar = document.querySelector(".navbars") as HTMLElement | null;
  const navbarUl = document.querySelector(".navbars ul") as HTMLElement | null;

  setTimeout(() => {
    if (navbar) navbar.classList.add("show-blur");
  }, 800);

  const navbarLinks =
    document.querySelectorAll<HTMLAnchorElement>(".navbars ul a");
  const sectionIds = [
    "Profile",
    "Projects",
    "About Me",
    "Case Study",
    "Challenges",
    "Technical Experiments",
    "Experiments",
    "Certificates",
  ];
  const sections = sectionIds.map((id) => document.getElementById(id));

  navbarLinks.forEach((link) => {
    const clickHandler = function (this: HTMLAnchorElement) {
      navbarLinks.forEach((l) => l.classList.remove("active"));
      this.classList.add("active");
      if (window.innerWidth <= 1024 && navbarUl) {
        navbarUl.classList.remove("show");
      }
    };
    link.addEventListener("click", clickHandler);
    cleanupCallbacks.push(() =>
      link.removeEventListener("click", clickHandler)
    );
  });

  const onScroll = () => {
    let current: number | null = null;
    sections.forEach((section, idx) => {
      if (section) {
        const sectionTop = section.offsetTop - 80;
        if (window.scrollY >= sectionTop) {
          current = idx;
        }
      }
    });
    navbarLinks.forEach((link, idx) => {
      link.classList.remove("active");
      if (current !== null && idx === current) {
        link.classList.add("active");
      }
    });
  };
  window.addEventListener("scroll", onScroll);
  cleanupCallbacks.push(() => window.removeEventListener("scroll", onScroll));

  // Lang switching
  let translations: Record<string, Record<string, string>> = {};
  async function loadTranslations() {
    try {
      const response = await fetch("data/translations.json");
      translations = await response.json();
    } catch (e) {
      console.error("Failed to load translations:", e);
      translations = {};
    }
  }

  function updateLanguage(lang: string) {
    document.querySelectorAll<HTMLElement>("[data-key]").forEach((el) => {
      const key = el.getAttribute("data-key");
      if (key && translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });
    document.querySelectorAll<HTMLButtonElement>(".flag-btn").forEach((btn) => {
      btn.classList.toggle("active", btn.dataset.lang === lang);
    });
  }

  document.querySelectorAll<HTMLButtonElement>(".flag-btn").forEach((btn) => {
    const langClickHandler = () => {
      const selectedLang = btn.dataset.lang;
      if (selectedLang) {
        localStorage.setItem("language", selectedLang);
        updateLanguage(selectedLang);
      }
    };
    btn.addEventListener("click", langClickHandler);
    cleanupCallbacks.push(() =>
      btn.removeEventListener("click", langClickHandler)
    );
  });

  (async () => {
    await loadTranslations();
    const savedLang = localStorage.getItem("language") || "en";
    updateLanguage(savedLang);
  })();

  return () => {
    cleanupCallbacks.forEach((cb) => cb());
  };
}

export function useDownloadAlertViewModel() {
  const [showAlert, setShowAlert] = useState(false);
  const [downloadUrl, setDownloadUrl] = useState("");
  const [downloadLabel, setDownloadLabel] = useState("");

  const handleClick = (url, label) => (e) => {
    e.preventDefault();
    setDownloadUrl(url);
    setDownloadLabel(label);
    setShowAlert(true);
  };

  const handleDownloadConfirm = () => {
    setShowAlert(false);
    const a = document.createElement("a");
    a.href = downloadUrl;
    a.setAttribute("download", "");
    a.click();
  };

  const handleDownloadCancel = () => {
    setShowAlert(false);
    setDownloadUrl("");
    setDownloadLabel("");
  };

  return {
    showAlert,
    downloadLabel,
    handleClick,
    handleDownloadConfirm,
    handleDownloadCancel,
  };
}
