document.addEventListener("DOMContentLoaded", () => {

  const track = document.getElementById("sliderTrack");
  let position = 0;
  const speed = 0.5;

  function animate() {
    position += speed;
    track.style.transform = `translateX(-${position}px)`;

    const first = track.firstElementChild;
    const firstWidth = first.offsetWidth + 40; // 40 = gap

    // cuando el primero sale completamente por la izquierda
 if (position >= firstWidth ) {
      track.appendChild(first);
      position -= firstWidth ;
      track.style.transform = `translateX(-${position}px)`;
    }

    requestAnimationFrame(animate);
  }

  animate();


});