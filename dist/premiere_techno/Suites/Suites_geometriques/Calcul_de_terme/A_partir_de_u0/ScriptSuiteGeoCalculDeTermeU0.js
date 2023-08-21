function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');

/*let u0,q,n1,rep;*/

function genererExercice() {

let u0 = nbrealéa(1,10);
let q = nbrealéa(2,7);
let n1 = nbrealéa(1,10);
let rep = u0*q**n1;


enonce.innerHTML = `Soit $(u_n)$ une suite géométrique de premier terme $u_0=${u0}$ et de raison $q=${q}$. </br>
Calculer $u_{${n1}}$.`;
solution.innerHTML = `Solution : $u_{${n1}}=${rep}$ `;
correctiond.innerHTML = `$u_{${n1}}=u_0\\times q^{${n1}}=${u0}\\times ${q}^{${n1}}=${rep} $`;

}

window.addEventListener('load', function () {
    genererExercice()
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

enonce.addEventListener("load", function () {
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})

solutions.addEventListener('click', () => {
    solution.style.display = "block";
})

correction.addEventListener('click', () => {
    correctiond.style.display = "block";
    correctiond.innerHTML;
})

recommencer.addEventListener('click', () => {
    genererExercice();
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})