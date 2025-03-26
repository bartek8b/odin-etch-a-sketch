const container = document.querySelector("#container");


function createGrid(limit){
    if(limit > 100 || limit < 16) {
        alert("Choose the number in range 16-100");
    }
    else{       

        for(let i = 1; i < limit; i++){
            const row = document.createElement("div");
            container.appendChild(row);
        }
    }
}

createGrid(16);