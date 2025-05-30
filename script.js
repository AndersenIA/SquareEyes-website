const containers = document.querySelectorAll(".horizontal-scroll");

containers.forEach((container) => {
  container.addEventListener("wheel", (e) => {
    if (e.deltaY !== 0) {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    }
  });
});

const mobileMenu = document.getElementsByClassName("mobile_nav-menu")[0];

const openMenu = document.getElementsByClassName("icon-mobile-nav")[0];

const closeMenu = document.getElementsByClassName("mobile-menu-close-icon")[0];

openMenu.addEventListener("click", function () {
  mobileMenu.classList.add("display-block");
});

closeMenu.addEventListener("click", function () {
  mobileMenu.classList.remove("display-block");
});

document.getElementById("cartIcon").addEventListener("click", function () {
  const cartPopup = document.getElementById("cartPopup");
  cartPopup.style.display =
    cartPopup.style.display === "block" ? "none" : "block";
});

document.getElementById("closeCart").addEventListener("click", function () {
  document.getElementById("cartPopup").style.display = "none";
});



// const API_KEY = "api_key=5a452143-fc8c-4a17-a666-6a88c639e7be";
// const BASE_URL = "https://v2.api.noroff.dev/square-eyes";
// const main = document.getElementById("main");
// const sectionNews = document.getElementById("sectionNews");

// getMovies(BASE_URL);

// function getMovies(url) {
//   fetch(url)
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data.data);
//       showMovies(data.data);
//     });
// }

// function showMovies(data) {
//   main.innerHTML = "";

//   data.forEach((movie) => {
//     const { title, image } = movie;
//     const movieEl = document.createElement("div");
//     const movieNews = document.createElement("div");

//     movieEl.classList.add("movie-display-div");
//     movieEl.innerHTML = `
//       <a href="specific-movie.html">
//           <img
//             class="movie-img"
//             src="${image.url}"
//             alt="${title}"
//         /></a>
//     `;

//     main.appendChild(movieEl);
//   });
// }
