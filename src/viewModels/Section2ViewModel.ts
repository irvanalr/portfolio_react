export function Section2ViewModel(): void {
  const overlay = document.getElementById(
    "imagePreviewOverlay"
  ) as HTMLElement | null;
  const previewImage = document.getElementById(
    "imagePreview"
  ) as HTMLImageElement | null;
  const closeBtn = document.getElementById(
    "closePreviewBtn"
  ) as HTMLButtonElement | null;

  if (!overlay || !previewImage || !closeBtn) return;

  function openModal(src: string): void {
    if (previewImage && overlay) {
      previewImage.src = src;
      overlay.style.display = "flex";
      history.pushState({ isImageModalOpen: true }, "");
    }
  }

  function closeModal(): void {
    if (previewImage && overlay) {
      overlay.style.display = "none";
      previewImage.src = "";
    }

    if (history.state && (history.state as any).isImageModalOpen) {
      history.back();
    }
  }

  document
    .querySelectorAll<HTMLImageElement>(".about-box img")
    .forEach((img) => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => openModal(img.src));
    });

  overlay.addEventListener("click", (e: MouseEvent) => {
    if (e.target === overlay) closeModal();
  });

  closeBtn.addEventListener("click", () => closeModal());

  window.addEventListener("popstate", () => {
    if (overlay.style.display === "flex") {
      closeModal();
    }
  });

  document.addEventListener("keydown", (e: KeyboardEvent) => {
    if (e.key === "Escape" && overlay.style.display === "flex") {
      closeModal();
    }
  });

  // Scroll effect
  const aboutMe = document.querySelector("#About\\ Me") as HTMLElement | null;
  const aboutContainer = document.querySelector(
    ".about-container"
  ) as HTMLElement | null;

  if (!aboutMe || !aboutContainer) return;

  window.addEventListener("scroll", () => {
    const rect = aboutMe.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    let visibleRatio = 1 - Math.abs(rect.top) / windowHeight;
    visibleRatio = Math.max(0, Math.min(1, visibleRatio));

    aboutContainer.style.opacity = visibleRatio.toString();
    aboutContainer.style.filter = `blur(${(1 - visibleRatio) * 20}px)`;
  });
}
