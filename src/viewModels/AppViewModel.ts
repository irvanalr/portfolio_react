export function AppViewModel() {
  const overlayLinks = document.querySelectorAll(".video-overlay-link");

  overlayLinks.forEach(function (overlayLink) {
    overlayLink.addEventListener("click", function (e) {
      e.preventDefault(); // Cegah behavior default

      const ytUrl = this.getAttribute("href");

      // Buka video di jendela 'mini player'
      window.open(
        ytUrl,
        "ytMiniPlayer",
        "width=960,height=540,left=100,top=100,resizable=yes,scrollbars=no"
      );
    });
  });
}
