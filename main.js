
var app = document.getElementById('app')

function generateBoard() {

    const container = document.createElement("div");
    container.className = "container ";

    const row = document.createElement("div");
    row.className = "row";

    for (let index = 0; index < 9; index++) {
        const col = document.createElement("div");
        col.className = "col-4";
        col.innerText = "Hello";
        //smallest to largest 
        row.appendChild("col");


    }
    container.appendChild(row);
    app.appendChild(container);
}

//invoke function
generateBoard();