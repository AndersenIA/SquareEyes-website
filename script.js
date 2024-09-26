const containers = document.querySelectorAll(".horizontal-scroll");

containers.forEach((container) => {
  container.addEventListener("wheel", (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  });
});
