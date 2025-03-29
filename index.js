const container = document.querySelector("#container");
const createBlackBtn = document.querySelector("#create-black-btn");
const createGrayBtn = document.querySelector("#create-gray-btn");
const createColorfulBtn = document.querySelector("#create-colorful-btn");

function createGrid(limit, mode){
    if(limit > 100 || limit < 16 || isNaN(limit)){
        alert("Choose the number in range 16-100");
    }
    else{
        for(let i = 1; i <= limit; i++){

            const row = document.createElement("div");

            if(window.innerWidth > window.innerHeight){
                row.style.height = `${(window.innerHeight * 0.7) / limit}px`;
            }
            else{
                row.style.height = `${(window.innerWidth * 0.9) / limit}px`;
            }
            
            container.appendChild(row);
            row.classList.add("rows");

            for(let i = 1; i <= limit; i++){

                const cell = document.createElement("div");

                if(window.innerWidth > window.innerHeight){
                    cell.style.width = `${(window.innerHeight * 0.7) / limit}px`;
                }
                else{
                    cell.style.width = `${(window.innerWidth * 0.9) / limit}px`;
                }
                
                row.appendChild(cell);
                cell.classList.add("cells");
            }
        }

        const rows = document.querySelectorAll(".rows");
        const cells = document.querySelectorAll(".cells");

        rows.forEach(
            row => window.addEventListener("resize", () => 
            {
                if(window.innerWidth > window.innerHeight){
                    row.style.height = `${(window.innerHeight * 0.7) / limit}px`;
                }
                else{
                    row.style.height = `${(window.innerWidth * 0.9) / limit}px`;
                }
                }));        

        cells.forEach(
            cell => window.addEventListener("resize", () => 
            {
                if(window.innerWidth > window.innerHeight){
                    cell.style.width = `${(window.innerHeight * 0.7) / limit}px`;
                }
                else{
                    cell.style.width = `${(window.innerWidth * 0.9) / limit}px`;
                }
            }));

        if(mode === "black"){
            cells.forEach(
                cell => cell.addEventListener("mouseenter", () => 
                    {
                        cell.style.opacity = 1;
                        cell.style.backgroundColor = "black"
                    }));
        }
        else if(mode === "gray"){
            cells.forEach(
                cell => cell.addEventListener("mouseenter", () => 
                    {
                        cell.style.backgroundColor = "black";
                        const cellComputedStyle = window.getComputedStyle(cell);
                        let cellOpacity = parseFloat(cellComputedStyle.opacity);
                        cellOpacity = cellOpacity + 0.2;
                        cell.style.opacity = cellOpacity;               
                    }));
        }
        else if(mode === "colorful"){
            cells.forEach(
                cell => cell.addEventListener("mouseenter", () => 
                {
                    cell.style.opacity = 1;
                    let randomR = Math.floor(Math.random() * 256);
                    let randomG = Math.floor(Math.random() * 256);
                    let randomB = Math.floor(Math.random() * 256);
    
                    cell.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
                }
                    ));
        }

        
    }
}

createBlackBtn.addEventListener("click", () => {
    container.innerHTML = "";
    let dimension = prompt("specify the pad dimensions (16-100)");
    createGrid(dimension, "black");
});

createGrayBtn.addEventListener("click", () => {
    container.innerHTML = "";
    let dimension = prompt("specify the pad dimensions (16-100)");
    createGrid(dimension, "gray");
});

createColorfulBtn.addEventListener("click", () => {
    container.innerHTML = "";
    let dimension = prompt("specify the pad dimensions (16-100)");
    createGrid(dimension, "colorful");
});

document.addEventListener("DOMContentLoaded", createGrid(16, "black"));