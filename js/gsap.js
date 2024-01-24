// scroll-trigger.js

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);
  
    // Animasi untuk judul seiring dengan scroll
    gsap.from(".display-3", {
      opacity: 0,
      y: 50,
      scrollTrigger: {
        trigger: ".display-3",
        start: "top center",
        end: "center center",
        toggleActions: "play none none reverse",
      },
    });
  
    // Animasi untuk profil gambar seiring dengan scroll
    gsap.from(".profile-img", {
      opacity: 0,
      x: -50,
      scrollTrigger: {
        trigger: ".profile-img",
        start: "top center",
        end: "center center",
        toggleActions: "play none none reverse",
      },
    });
  
    // Tambahkan animasi lainnya sesuai kebutuhan
  });
  