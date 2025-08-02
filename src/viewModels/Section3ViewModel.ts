export function Section3ViewModel() {
  const Challenges = document.querySelector(
    "#Challenges"
  ) as HTMLElement | null;

  const containerChallenge = document.querySelector(
    ".container-challenge"
  ) as HTMLElement | null;

  if (!Challenges || !containerChallenge) return;

  window.addEventListener("scroll", () => {
    const rect = Challenges.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // Hitung seberapa terlihat bagian tengah Challenges di viewport
    let visibleRatio = 1 - Math.abs(rect.top) / windowHeight;

    // Batasi nilai antara 0 dan 1
    visibleRatio = Math.max(0, Math.min(1, visibleRatio));

    // Apply efek gradual
    containerChallenge.style.opacity = visibleRatio.toString();
    containerChallenge.style.filter = `blur(${(1 - visibleRatio) * 20}px)`;
  });
}
