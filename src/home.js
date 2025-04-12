import heroImg from "./assets/hero-img.png";

export function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  // Hero section wrapper
  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");

  // Background image
  heroSection.style.backgroundImage = `url(${heroImg})`;

  // Overlay
  const overlay = document.createElement("div");
  overlay.classList.add("overlay");

  // Brand name
  const brand = document.createElement("h1");
  brand.classList.add("brand");
  brand.textContent = "Casa di Pasta";

  // Tagline
  const tagline = document.createElement("h2");
  tagline.classList.add("tagline");
  tagline.textContent = "A Symphony of Flavor and Elegance";

  // Description
  const description = document.createElement("p");
  description.classList.add("description");
  description.innerHTML  =
    "Where culinary artistry meets timeless ambiance. <br> Join us for an unforgettable dining experience rooted <br> in passion, precision, and hospitality.";

  // Menu Button
  const bookBtn = document.createElement("button");
  bookBtn.classList.add("book-btn");
  bookBtn.textContent = "Book a Table";

  // Append all to overlay
  overlay.appendChild(brand);
  overlay.appendChild(tagline);
  overlay.appendChild(description);
  overlay.appendChild(bookBtn);

  // Append overlay to hero
  heroSection.appendChild(overlay);

  // Append to DOM
  content.appendChild(heroSection);
}
