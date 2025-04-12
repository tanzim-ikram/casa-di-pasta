export function loadContact() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const contactSection = document.createElement("section");
    contactSection.classList.add("contact");

    // Heading
    const heading = document.createElement("h2");
    heading.textContent = "Get In Touch";

    // Description
    const description = document.createElement("p");
    description.textContent =
        "We’d love to hear from you! Whether you’re planning a romantic evening, booking a family dinner, or simply craving great pasta — we’re here.";

    // Contact Info
    const info = document.createElement("div");
    info.classList.add("contact-info");

    const phone = document.createElement("p");
    phone.innerHTML = `<strong>Phone:</strong> <a href="tel:+1234567890">+1 (234) 567-890</a>`;

    const email = document.createElement("p");
    email.innerHTML = `<strong>Email:</strong> <a href="mailto:hello@casadipasta.com">hello@casadipasta.com</a>`;

    const address = document.createElement("p");
    address.innerHTML = `<strong>Address:</strong> 123 Pasta Lane, Roma District, Italy`;

    info.appendChild(phone);
    info.appendChild(email);
    info.appendChild(address);

    // Append all
    contactSection.appendChild(heading);
    contactSection.appendChild(description);
    contactSection.appendChild(info);

    content.appendChild(contactSection);
}
