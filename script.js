var scr = document.getElementById("scr");
var reset = document.getElementById("reset");
var submit = document.getElementById("Submit");
var var1 = document.getElementById("var1");
var var2 = document.getElementById("var2");
var score = localStorage.getItem("score");
if (!score) {
    localStorage.setItem("score", 0);
}
scr.innerText = parseInt(localStorage.getItem("score"))

var alt = document.getElementById("alert");
var ans = document.getElementById("ans");
var1.innerText =parseInt( Math.random() * 10);
var2.innerText =parseInt( Math.random() * 10);
function SSubmit() {

    var val1 = var1.innerText;
    var val2 = var2.innerText;
    var temp = val1 * val2;
    var anss = ans.value
    if (temp == anss) {
        var score = parseInt(localStorage.getItem("score"));
        localStorage.setItem("score", score + 1);
        scr.innerText = parseInt(localStorage.getItem("score"))
        var1.innerText = parseInt( Math.random() * 10);
        var2.innerText = parseInt( Math.random() * 10);
        ans.value = "";
        ans.focus();
    }
    else {
        alt.style.display = "block"
        setTimeout(() => {
            alt.style.display = "none"
            var1.innerText = parseInt( Math.random() * 10);
        var2.innerText = parseInt( Math.random() * 10);
        ans.value = "";
        ans.focus();
        }, 1000)
        
    }
}
submit.addEventListener("click", SSubmit)
reset.addEventListener("click", () => {
    ans.value = "";
})
ans.addEventListener("keypress",(event
)=>{
    if (event.key === "Enter"){
        SSubmit();
    }
})