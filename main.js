
var app = document.getElementById("app");
console.log(app);
const tiles = [];


function init() {

    //on start of program
    generateBoard()
}

function generateBoard() {

    const container = document.createElement("div");
    container.className = "container mt-5";

    const row = document.createElement("div");
    row.className = "row p-4";

    for (let index = 0; index < 9; index++) {
        const col = document.createElement("div");
        col.className = "col-4 p-2 border border-secondary";
        col.setAttribute("id", index)
        //smallest to largest 
        row.appendChild(col);


        let tileObject = new Tile(index);
        tiles.push(tileObject);
    }
    console.log(tiles)

    container.appendChild(row);
    app.appendChild(container);
}

class Board {

    //Model
    constructor() { }



    //View




    //Controller


}

class Tile {

    //Model
    constructor(id) { 
        this.id=id
        //this.onclick = onclick(click)
    }



    //View



    //Controller 




}



init()