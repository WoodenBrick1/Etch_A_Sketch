


const container = document.getElementById("container");
const size = 16;
let gridSquares = [];


window.onload = () => {
  let squareSize = container.offsetWidth / size;
  console.log(container.offsetWidth)
  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.width = `${squareSize}px`;
    grid.style.height = `${squareSize}px`;
    
    gridSquares.push(grid)
    container.appendChild(grid);



    container.addEventListener("mouseover", (event) => {
      if (event.target.classList.contains("grid")) {
        event.target.style.backgroundColor = "black";
      }
    });
      
      
  }
}

