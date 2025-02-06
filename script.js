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

// CONNECTING THE API

// API KEY: 5a452143-fc8c-4a17-a666-6a88c639e7be

/* EXAMPLE API OPTIONS FROM THE WEBSITE
const options = {
  headers: {
    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQW5kZXJzZW5JQSIsImVtYWlsIjoiYW5kYW5kMDQxNzVAc3R1ZC5ub3JvZmYubm8iLCJpYXQiOjE3MzcxMTMwOTB9.4rCJAApJXWas0PsqVHR8c8A1QQglriMw6BWpu9JX1jo',
    'X-Noroff-API-Key': '5a452143-fc8c-4a17-a666-6a88c639e7be'
  }
};
*/

/*
fetch("https://v2.api.noroff.dev/square-eyes")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    console.log(jsonData);
    var title = jsonData.data[1].title;
    console.log(title);

    var product = document.createElement("li");
    product.innerHTML = title;
    document.body.appendChild(product);
  });
  */

/*
// Fetch data from the API
fetch("https://v2.api.noroff.dev/square-eyes")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    // Assuming you want to display the first few items in the cart
    const cartContent = document.getElementById("cartContent");

    // Clear previous content
    cartContent.innerHTML = "";

    // Loop through the data and create HTML elements for each item
    jsonData.data.forEach((item) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.innerHTML = `
      <h3>${item.title}</h3>
      <p>Price: $${item.price}</p>
      <button class="removeItem" data-index="${index}">Remove</button>
    `;
      cartContent.appendChild(itemDiv);
    });

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll(".removeItem");
    removeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const itemIndex = parseInt(this.getAttribute("data-index"), 10); // Convert to number
        removeItem(itemIndex);
      });
    });
  })
  .catch(function (error) {
    console.error("Error fetching data:", error);
  });

// Function to remove an item from the cart
function removeItem(index) {
  const cartContent = document.getElementById("cartContent");
  const items = cartContent.getElementsByClassName("cart-item");

  // Remove the item from the DOM
  if (items[index]) {
    cartContent.removeChild(items[index]);
  }
} */
/*
// Fetch data from the API
fetch("https://v2.api.noroff.dev/square-eyes")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    const cartContent = document.getElementById("cartContent");

    // Clear previous content
    cartContent.innerHTML = "";

    // Loop through the data and create HTML elements for each item
    jsonData.data.forEach((item, index) => {
      const itemDiv = document.createElement("div");
      itemDiv.className = "cart-item";
      itemDiv.innerHTML = `
      <h3>${item.title}</h3>
      <p>${item.description}</p>
      <p>Price: $${item.price}</p>
      <button class="removeItem" data-index="${index}">Remove</button>
    `;
      cartContent.appendChild(itemDiv);
    });

    // Add event listeners to remove buttons
    const removeButtons = document.querySelectorAll(".removeItem");
    removeButtons.forEach((button) => {
      button.addEventListener("click", function () {
        const itemIndex = parseInt(this.getAttribute("data-index"), 10); // Convert to number
        removeItem(itemIndex);
      });
    });
  })
  .catch(function (error) {
    console.error("Error fetching data:", error);
  });

// Function to remove an item from the cart
function removeItem(index) {
  const cartContent = document.getElementById("cartContent");
  const items = cartContent.getElementsByClassName("cart-item");

  // Remove the item from the DOM
  if (items[index]) {
    cartContent.removeChild(items[index]);
  } else {
    console.error("Item not found at index:", index);
  }
}
*/

/*
fetch("https://v2.api.noroff.dev/square-eyes")
  .then(function (response) {
    return response.json();
  })

  .then(function (jsonData) {
    console.log(jsonData);
  })

  .then(function (jsonData) {
    for (items in jsonData.data) {
      var productTitle = jsonData.data[items].title;
      var products = document.createElement("li");
      products.innerHTML = productTitle;
      document.body.appendChild(products);

      /*
      var productImg = jsonData.data[items].image;
      var image = document.createElement("img");
      image.setAttribute("src", productImg);
      document.body.appendChild(image);
      
  });
  */

const API_KEY = "api_key=5a452143-fc8c-4a17-a666-6a88c639e7be";
const BASE_URL = "https://v2.api.noroff.dev/square-eyes";
const main = document.getElementById("main");
const sectionNews = document.getElementById("sectionNews");

getMovies(BASE_URL);

function getMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.data);
      showMovies(data.data);
    });
}

function showMovies(data) {
  main.innerHTML = "";

  data.forEach((movie) => {
    const { title, image } = movie;
    const movieEl = document.createElement("div");
    const movieNews = document.createElement("div");

    movieEl.classList.add("movie-display-div");
    movieEl.innerHTML = `
      <a href="specific-movie.html">
          <img
            class="movie-img"
            src="${image.url}"
            alt="${title}"
        /></a>
    `;

    main.appendChild(movieEl);
  });
}

//THIS IS WORKING!!!!

/*
fetch("https://v2.api.noroff.dev/square-eyes")
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonData) {
    console.log(jsonData); // Log the entire response to check its structure
    for (items in jsonData.data) {
      var productTitle = jsonData.data[items].title;
      var products = document.createElement("li");
      products.innerHTML = productTitle;
      document.body.appendChild(products);
    }

    jsonData.data.forEach(
      (item) => {
        var productImg = item.image; // Access the image property

        var image = document.createElement("img");
        image.setAttribute("src", productImg.url); // Use productImg.url
        image.setAttribute("alt", item.title); // Optional: set alt text for accessibility
        document.body.appendChild(image); // Append the image to the body or a specific container
      }

      //THIS IS WORKING!!!

      /*
    // Check if jsonData.data exists and is an array
    if (jsonData.data && Array.isArray(jsonData.data)) {
      jsonData.data.forEach((item) => {
        console.log("Item:", item); // Log the entire item
        var productImg = item.image; // Access the image property
        console.log("Image Object:", productImg); // Log the image object

        // Check if productImg has a url property
        if (productImg && typeof productImg.url === "string") {
          var image = document.createElement("img");
          image.setAttribute("src", productImg.url); // Use productImg.url
          image.setAttribute("alt", item.title); // Optional: set alt text for accessibility
          document.body.appendChild(image); // Append the image to the body or a specific container
        } else {
          console.error("Invalid image URL for item:", item);
        }
      });
    } else {
      console.error("No data found in the response");
    }
  })
  .catch(function (error) {
    console.error("Error fetching data:", error);
  });*/
//    );
//  });
