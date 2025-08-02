export function Section4ViewModel(): void {
  const Experiments = document.querySelector(
    "#Experiments"
  ) as HTMLElement | null;
  const containerExperiments = document.querySelector(
    ".container-exsperiments"
  ) as HTMLElement | null;

  if (!Experiments || !containerExperiments) return;

  window.addEventListener("scroll", () => {
    const rect = Experiments.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Hitung seberapa terlihat bagian tengah Experiments di viewport
    let visibleRatio = 1 - Math.abs(rect.top) / windowHeight;

    // Batasi nilai antara 0 dan 1
    visibleRatio = Math.max(0, Math.min(1, visibleRatio));

    // Apply efek gradual
    containerExperiments.style.opacity = visibleRatio.toString();
    containerExperiments.style.filter = `blur(${(1 - visibleRatio) * 20}px)`;
  });
}
