const words = [
  {
    id: 1,
    eng: "Teacher",
    tr: "Öğretmen",
  },
  {
    id: 2,
    eng: "Car",
    tr: "Araba",
  },
  { id: 3, eng: "School", tr: "Okul" },
  {
    id: 4,
    eng: "Desert",
    tr: "Çöl",
  },
  {
    id: 5,
    eng: "House",
    tr: "Ev",
  },
  {
    id: 6,
    eng: "Last Name",
    tr: "Soyadı",
  },
  {
    id: 7,
    eng: "Ice cream",
    tr: "Dondurma",
  },
  {
    id: 8,
    eng: "Tomato",
    tr: "Domates",
  },
  {
    id: 9,
    eng: "President",
    tr: "Başkan",
  },
  {
    id: 10,
    eng: "Smart Phone",
    tr: "Akıllı Telefon",
  },
];

const cards = document.querySelector(".cards");
const cardLength = words.length;

const createCards = () => {
  for (i = 0; i < cardLength; i++) {
    let li = document.createElement("li");
    li.classList.add("card");
    li.innerHTML = `
            <h3 class="text-eng">${words[i].eng}</h3>
            <h4 class="text-tr">${words[i].tr}</h4>
        `;
    cards.appendChild(li);
  }
};

createCards();

const boxes = document.querySelectorAll(".card");
console.log(boxes);

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    box.classList.toggle("active");
  });
});
