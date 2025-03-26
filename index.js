const container = document.querySelector("#container");


function createGrid(limit){
    if(limit > 100 || limit < 16) {
        alert("Choose the number in range 16-100");
    }
    else{
        for(let i = 1; i <= limit; i++){
            container.style.width = `${20 * limit}px`;
            const row = document.createElement("div");
            container.appendChild(row);
            row.classList.add("rows");

            for(let i = 1; i <= limit; i++){
                const cell = document.createElement("div");
                row.appendChild(cell);
                cell.classList.add("cells");
            }
        }
    }
}

createGrid(16);