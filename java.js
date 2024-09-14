const container = document.querySelector(".container");
const size = 16;

for (let i = 0; i < size * size; i++) {
  const grid = document.createElement("h3");
  grid.classList.add("grid");
  grid.textContent = "test";
  container.appendChild(grid);
}

