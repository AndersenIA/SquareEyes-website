const container = document.getElementById("container");

container.addEventListener("wheel", (e) => {
  if (e.deltaY !== 0) {
    e.preventDefault();
    container.scrollLeft += e.deltaY;
  }
});