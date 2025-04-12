export function loadAbout() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    // About container
    const aboutSection = document.createElement("section");
    aboutSection.classList.add("about");

    // Heading
    const heading = document.createElement("h2");
    heading.textContent = "About Casa di Pasta";

    // Description
    const paragraph = document.createElement("p");
    paragraph.innerHTML = `
      Welcome to <strong>Casa di Pasta</strong> — a culinary haven where the rich traditions of Italian cooking meet modern elegance. <br/><br/>
      Inspired by generations of passion and flavor, our kitchen crafts each dish with authenticity and love. Whether it’s a romantic dinner, a family gathering, or a casual lunch, Casa di Pasta is your home for heartfelt hospitality and unforgettable food. <br/><br/>
      Every plate tells a story. Every visit feels like home.
    `;

    // Signature
    const signature = document.createElement("p");
    signature.classList.add("signature");
    signature.textContent = "~ The Casa di Pasta Family";

    // Append elements
    aboutSection.appendChild(heading);
    aboutSection.appendChild(paragraph);
    aboutSection.appendChild(signature);

    content.appendChild(aboutSection);
}
