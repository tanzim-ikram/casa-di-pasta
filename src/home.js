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
  tagline.textContent = "Where Tradition Meets Taste";

  // Description
  const description = document.createElement("p");
  description.classList.add("description");
  description.innerHTML  =
    '<p>Step into Casa di Pasta, where every dish tells a story of Italian heritage and heart. <br/> From handcrafted pastas to rich, rustic flavors, we offer more than just a <br/> meal — we serve a timeless experience of warmth, refinement, and <br/> unforgettable taste.</p>';

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
