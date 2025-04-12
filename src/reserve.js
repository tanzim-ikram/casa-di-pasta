export function loadReserve() {
    const content = document.getElementById("content");
    content.innerHTML = "";

    const reserveSection = document.createElement("section");
    reserveSection.classList.add("reserve");

    const heading = document.createElement("h2");
    heading.textContent = "Reserve a Table";

    const form = document.createElement("form");
    form.classList.add("reservation-form");

    form.innerHTML = `
      <label for="name">Full Name</label>
      <input type="text" id="name" name="name" required>
  
      <label for="date">Reservation Date</label>
      <input type="date" id="date" name="date" required>
  
      <label for="time">Reservation Time</label>
      <input type="time" id="time" name="time" required>
  
      <label for="email">Email</label>
      <input type="email" id="email" name="email" required>
  
      <label for="people">Number of People</label>
      <input type="number" id="people" name="people" min="1" required>
  
      <label for="requests">Special Requests</label>
      <textarea id="requests" name="requests" rows="3"></textarea>
  
      <button type="submit">Submit Reservation</button>
    `;

    reserveSection.appendChild(heading);
    reserveSection.appendChild(form);
    content.appendChild(reserveSection);
}
