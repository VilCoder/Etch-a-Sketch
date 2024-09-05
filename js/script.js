function setGrid(itemCount) {
    
    if (itemCount < 1 || itemCount > 100) {
        itemCount = 16;
    }

    const gridItemWidth = 100 / itemCount;

    for (let i = 1; i <= itemCount; i++) {
        for (let j = 1; j <= itemCount; j++) {
            const gridItem = document.createElement("div");
            gridItem.classList.add("grid-item");
            gridItem.style.flexBasis = `${gridItemWidth}%`;
            gridContainer.appendChild(gridItem);
        }
    }

    changeBackground("black");
}

function changeBackground(background) {    
    let opacity = 0.1;
    document.querySelector(".grid").addEventListener("mouseover", e => {
        if (e.target.classList.contains("grid-item")) {
            e.target.style.opacity = opacity;
            e.target.style.backgroundColor = background;

        }

        if (opacity < 1.0) opacity += 0.1;
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

document.querySelector(".btn-send").addEventListener("click", () => {
    const input = document.querySelector(".value");
    gridContainer.textContent = "";
    setGrid(Number(input.value));
    input.value = "";
})

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