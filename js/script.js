function setGrid(itemCount) {
    
    if (itemCount < 1 || itemCount > 100) {
        itemCount = 16;
    }

    const gridItemWidth = Math.floor(gridContainer.clientWidth / itemCount);
    for (let i = 1; i <= itemCount; i++) {
        for (let j = 1; j <= itemCount; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.style.width = gridItemWidth + "px";
            gridContainer.appendChild(gridItem);
        }
    }

    changeBackground("black");
}

function changeBackground(background) {    
    let alpha = 0.0;
    document.querySelector(".grid").addEventListener("mouseover", e => {
        if (e.target.classList.contains("grid-item")) {
            if (alpha < 1.0) alpha += 0.1
            e.target.style.backgroundColor = background;

        }
    });
}

const gridContainer = document.querySelector(".grid");

setGrid(16);

const openModal = document.querySelectorAll("[data-open]");
const closeModal = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

openModal.forEach(modal => {
    modal.addEventListener("click", function() {
        const modalId = this.dataset.open;
        document.getElementById(modalId).classList.add(isVisible);
    });
});


closeModal.forEach(modal => {
    modal.addEventListener("click", function() {
       this.parentElement.parentElement.parentElement.classList.remove(isVisible); 
    });
});

document.addEventListener("click", e => {
    if (e.target === document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});

document.addEventListener("keyup", e => {
    if (e.key === "Escape" && document.querySelector(".modal.is-visible")) {
        document.querySelector(".modal.is-visible").classList.remove(isVisible);
    }
});

const btnSend = document.querySelector(".btn-send");
const input = document.querySelector(".value");
btnSend.addEventListener("click", () => {
    const itemCount = Number(input.value);
    input.value = "";
    gridContainer.textContent = "";
    setGrid(itemCount);
});


const clearGrid = document.querySelector(".clear-grid");
clearGrid.addEventListener("click", () => {
    document.querySelectorAll(".grid-item").forEach(element => {
        element.style.background = "";
    });
});


const clearCell = document.querySelector(".clear-cell");
clearCell.addEventListener("click", () => {
    document.querySelector(".grid").addEventListener("mouseover", e => {
        if (e.target.classList.contains("grid-item")) {
            e.target.style.background = "";
        }
    });
});

document.querySelectorAll(".color").forEach(element => {
    element.addEventListener("click", e => {
        const color = e.target.getAttribute("id");
        changeBackground(color)
    });
});