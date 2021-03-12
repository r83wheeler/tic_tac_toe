
var app = document.getElementById("app");
console.log(app);



class Tile {

    constructor(id, tileHTML) {
        this.id = id;
        this.clicked = false;
        this.tileHTML=tileHTML;
    }



}


class Board {


    constructor() {
        this.turn = false
        this.tilesArray = [];
        this.count = 0;
        this.player = ''
    }
    generateBoard() {

        const container = document.createElement("div");
        container.className = "container mt-5";

        const row = document.createElement("div");
        row.className = "row p-4";

        for (let index = 0; index < 9; index++) {
            const col = document.createElement("div");
            col.className = "col-4 p-4 border border-secondary";
            col.setAttribute("id", index)
            let tileObject = new Tile(index, col);
            col.addEventListener("click", this.clickTile.bind(this, tileObject));
            this.tilesArray.push(tileObject);
            row.appendChild(col);
            container.appendChild(row);
            app.appendChild(container);
        }  
        }

        clickTile(obj) {
            if (obj.clicked == false) {
                obj.clicked = true
                if (this.count % 2 === 0) {
                    this.player = "X"
                } else {
                    this.player = "O"
                }
                    obj.tileHTML.innerText = this.player
                    this.count++;
                    console.log(this.player)
                    console.log(this.tilesArray)
                }
            }

    }   



    












        function init() {

            let ticTacToeBoard = new Board()
            console.log(ticTacToeBoard)
            ticTacToeBoard.generateBoard()
        }



        init()