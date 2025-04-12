import spaghettiImg from "./assets/spaghetti.jpg";
import lasagnaImg from "./assets/lasagna.jpg";
import fettuccineImg from "./assets/fettuccine.jpg";

export function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const menuSection = document.createElement("section");
  menuSection.classList.add("menu");

  const title = document.createElement("h2");
  title.textContent = "Our Menu";
  menuSection.appendChild(title);

  const menuItems = [
    {
      name: "Spaghetti Carbonara",
      price: "$14.99",
      img: spaghettiImg,
    },
    {
      name: "Classic Lasagna",
      price: "$16.50",
      img: lasagnaImg,
    },
    {
      name: "Fettuccine Alfredo",
      price: "$15.25",
      img: fettuccineImg,
    },
  ];

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("menu-item");

    const image = document.createElement("img");
    image.src = item.img;
    image.alt = item.name;

    const name = document.createElement("h3");
    name.textContent = item.name;

    const price = document.createElement("p");
    price.classList.add("price");
    price.textContent = item.price;

    card.appendChild(image);
    card.appendChild(name);
    card.appendChild(price);

    menuSection.appendChild(card);
  });

  content.appendChild(menuSection);
}
