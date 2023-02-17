const container = document.querySelector(".container");
const count = document.querySelector("#count");
const amount = document.querySelector("#amount");
const movieSelect = document.querySelector("#movieSelect");
const seats = document.querySelectorAll(".seat:not(.reserved)");

getFromLocalStorage();
calculateTotal();

container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("reserved")
  ) {
    e.target.classList.toggle("selected");

    calculateTotal();
  }
});

movieSelect.addEventListener("change", (e) => {
  calculateTotal();
});

function calculateTotal() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");

  const selectedSeatsArray = [];
  const seatsArray = [];

  selectedSeats.forEach((seat) => {
    selectedSeatsArray.push(seat);
  });

  seats.forEach((seat) => {
    seatsArray.push(seat);
  });

  let selectedSeatIndexs = selectedSeatsArray.map((seat) => {
    return seatsArray.indexOf(seat);
  });

  let selectedSeatCount = selectedSeats.length;
  count.innerHTML = selectedSeatCount;

  let price = movieSelect.value;
  amount.innerHTML = selectedSeatCount * price;

  localStorage.setItem("selectedSeats", JSON.stringify(selectedSeats));
  localStorage.setItem("selectedMovieIndex", movieSelect.selectedIndex);
  localStorage.setItem("selectedMoviePrice", movieSelect.value);

  saveToLocalStorage(selectedSeatIndexs);
}

function getFromLocalStorage() {
  const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
  const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

  if (selectedSeats !== null && selectedSeats.length > 0) {
      seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {     
        seat.classList.add("selected");
      }});
  }

  if (selectedSeats !== null) {
   movieSelect.selectedIndex = selectedMovieIndex;

  }
}

function saveToLocalStorage(indexes) {
  localStorage.setItem("selectedSeats", JSON.stringify(indexes)); // here first parameter of setItem is key and second is value
  localStorage.setItem("selectedMovieIndex", movieSelect.selectedIndex);
}
