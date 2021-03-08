
function run(){
    console.log("im in the function");
}

const test = document.getElementById("myContainer");
const newDiv = document.createElement("div");
newDiv.textContent="Hello Phoenix";
newDiv.className="border";
newDiv.classList.add("col4");
newDiv.onclick=run;

test.appendChild(newDiv);

console.log(test);
console.log(newDiv);

var View = {
    //update the HTML
    render: function(){

    }
}


var Model = {

}

var Controller = {

}