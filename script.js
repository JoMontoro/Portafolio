document.addEventListener("DOMContentLoaded", () => {

  // ========================
  // SLIDER INFINITO
  // ========================
  const track = document.getElementById("sliderTrack");
  let position = 0;
  const speed = 0.6;
  let animId;

  function animate() {
    position += speed;
    track.style.transform = `translateX(-${position}px)`;

    const first = track.firstElementChild;
    const firstWidth = first.offsetWidth + 40; // 40 = gap

    if (position >= firstWidth) {
      track.appendChild(first);
      position -= firstWidth;
      track.style.transform = `translateX(-${position}px)`;
    }

    animId = requestAnimationFrame(animate);
  }

  animate();

  // Pausa al hacer hover sobre el slider
  track.addEventListener("mouseenter", () => cancelAnimationFrame(animId));
  track.addEventListener("mouseleave", () => { animId = requestAnimationFrame(animate); });


  // ========================
  // HEADER: sólido al hacer scroll
  // ========================
  const header = document.getElementById("mainHeader");

  function handleHeaderScroll() {
    if (window.scrollY > 30) {
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  window.addEventListener("scroll", handleHeaderScroll, { passive: true });
  handleHeaderScroll();


  // ========================
  // SCROLL SUAVE para links del nav
  // ========================
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function(e) {
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        e.preventDefault();
        const offset = header.offsetHeight + 10;
        const top = target.getBoundingClientRect().top + window.scrollY - offset;
        window.scrollTo({ top, behavior: "smooth" });
      }
    });
  });


  // ========================
  // FADE-IN con IntersectionObserver
  // ========================
  const fadeEls = document.querySelectorAll(".section, .project-card, .card-flip-container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  fadeEls.forEach(el => {
    el.classList.add("fade-in");
    observer.observe(el);
  });

});