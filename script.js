// Typed Text
document.addEventListener("DOMContentLoaded", () => {
  const typed = new Typed(".typing-text", {

    strings: [
      "Performance Marketer",
      "Lead Generation Specialist"
    ],

    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,

  });
});

document.addEventListener("DOMContentLoaded", function () {
  const aboutSection = document.querySelector(".about");
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        }
      });
    },
    { threshold: 0.5 },
  );
  observer.observe(aboutSection);
});

// Timeline Scroll Animation

// ==============================
// Career Timeline Scroll Reveal
// ==============================

document.addEventListener("DOMContentLoaded", () => {

 const timelineItems = document.querySelectorAll(".timeline-item");

const observer = new IntersectionObserver((entries) => {

    entries.forEach((entry) => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

timelineItems.forEach((item) => {
    observer.observe(item);
});
 
});


