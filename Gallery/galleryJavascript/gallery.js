// gale.js

const Data = [
  {
    image: "assets/image 1.png",
    name: "FENNEC FOX",
    location: "India",
    link: "#",
  },
  {
    image: "assets/image 2.png",
    name: "HUMPBACK wHALE",
    location: "South Africa",
    link: "#",
  },
  {
    image: "assets/image 3.png",
    name: "COMMON BROWN BABOON",
    location: "South Africa",
    link: "#",
  },
  {
    image: "assets/image 4.png",
    name: "SPOTTED DEER",
    location: "Amazon",
    link: "#",
  },
];

const cardsContainer = document.getElementById("cards_container");

Data.forEach((item) => {
  const card = document.createElement("div");
  card.className = "ui-card";
  card.innerHTML = `
  <img src="${item.image}" alt="fennec fox" />
  <div class="Description">
    <div class="Content">
      <h1>${item.name}</h1>
      <p>${item.location}</p>
    </div>
    <a href="${item.link}">know more <i class="fas fa-arrow-right"></i></a>
  </div>
    `;
  cardsContainer.appendChild(card);
});
