function setGrid(itemCount) {
    const gridItemWidth = Math.floor(gridContainer.clientWidth / itemCount);
    alert(gridItemWidth);
    
    for (let i = 1; i <= itemCount; i++) {
        for (let j = 1; j <= itemCount; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.style.width = gridItemWidth + "px";
            gridContainer.appendChild(gridItem);
        }
    }
    
    const item = document.querySelectorAll("div.grid-item");
    item.forEach(element => {
        element.addEventListener("mouseover", () => {
            element.style.background = "#A9A8AB";
        });
    });
}


const gridContainer = document.querySelector(".grid-container");
setGrid(16);