document.title = "Counter";
const score = document.getElementById("count-el");
const buttonOne = document.getElementById("increment-btn");
const buttonTwo = document.getElementById("save-btn");
let count = 0;


buttonOne.addEventListener("click", function() {
    count++;
    score.innerHTML= count;
})


function save() {
    document.getElementById("entries1").innerText += count + " - "
}

function remove() {
    if (!(count <= 0)) {
        count--;
        score.innerHTML= count; 
    }
}










