
const container = document.getElementById("container");
const input = document.getElementById("input-size");
const btnSize = document.getElementById("btn-size");

const sizeStart = 16;

window.onload = () => {
  let squareSize = container.offsetWidth / sizeStart;
  console.log(container.offsetWidth)

  loadGrid(squareSize, sizeStart);
}



const loadGrid = (squareSize, size) =>
{
  for (let i = 0; i < size * size; i++) {
    const grid = document.createElement("div");
    grid.classList.add("grid");
    grid.style.width = `${squareSize}px`;
    grid.style.height = `${squareSize}px`;
    
    container.appendChild(grid);



    container.addEventListener("mouseover", (event) => {
      if (event.target.classList.contains("grid")) {
        event.target.style.backgroundColor = "black";
      }
    });
    
  }
}


const changeGrid = () =>
{
  const size = parseInt(input.value);
  input.value = "";

  if (size >= 1 && size <= 100)
  {
     container.innerHTML = "";
     loadGrid(container.offsetWidth / size, size);
  }
}


input.addEventListener("keydown", (e) =>
{
  if (e.key == "Enter")
  {
    changeGrid();
  }
})

btnSize.addEventListener("click", changeGrid)
