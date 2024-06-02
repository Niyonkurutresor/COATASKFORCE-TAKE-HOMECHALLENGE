const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      console.log(entry);
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 1,
  }
);

const hiddenEelements = document.querySelectorAll(".hidden");
hiddenEelements.forEach((el) => observer.observe(el));
