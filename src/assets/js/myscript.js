// start active tab
const listMenu = document.querySelectorAll(".list-menu");

listMenu.forEach((lm) => {
  lm.addEventListener("click", () => {
    listMenu.forEach((item) => item.classList.remove("active-tab"));
    lm.classList.add("active-tab");
  });
});
// end active start

// start animate counter
function easeOutQuad(t) {
  return t * (2 - t);
}

function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  const startTime = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const easedProgress = easeOutQuad(progress);
    const value = Math.floor(start + (end - start) * easedProgress);
    obj.textContent = value.toLocaleString();

    if (progress < 1) {
      requestAnimationFrame(update);
    }
  }

  requestAnimationFrame(update);
}

animateValue("total_pengalaman", 0, 10, 1500);
animateValue("total_proyek", 0, 200, 2000);
animateValue("total_ahli", 0, 10, 1500);

// end animate counter

// start redirect to whatsapp api

const redirectToWhatsapp = () => {
  window.open(
    "https://api.whatsapp.com/send?phone=6285693232116&text=Halo+admin+PT.+Indo+Darpa+Ardana%2C+Saya+ingin+konsultasi...",
    "_blank",
    "noopener,noreferrer"
  );
};

// end redirect to whatsapp api
