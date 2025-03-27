const container = document.querySelector("#container");
const createPadBtn = document.querySelector("#create-pad-btn");

function createGrid(limit){
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
            cell => cell.addEventListener("mouseenter", () => cell.style.backgroundColor = "black"));

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
    }
}

createPadBtn.addEventListener("click", () => {
    container.innerHTML = "";
    let dimension = prompt("Give the nubmer in range 16-100");
    createGrid(dimension);
});