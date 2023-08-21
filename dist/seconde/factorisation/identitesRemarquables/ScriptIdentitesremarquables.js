function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function positifnegatif(a) {
    let choix = nbrealéa(1,2);
    let rep;
    if (choix==1) {rep=a;} else {rep=-a;}
    return rep;
}


let enonce = document.getElementById('enonce');
let solution = document.getElementById('solution');
let correctiond = document.getElementById('correctiond');
let solutions = document.getElementById('solutions');
let correction = document.getElementById('correction');
let recommencer = document.getElementById('recommencer');


function genererExercice() {

    let a = nbrealéa(1,10);
let b = nbrealéa(1,10);
let ab2 = 2*a*b;
let acarre = a*a;
let bcarre = b*b;
let identite = nbrealéa(0,2);


let enonces = [`Factoriser l'expression : $${acarre}x^2 + ${ab2}x + ${bcarre}$`,
`Factoriser l'expression : $${acarre}x^2 - ${ab2}x + ${bcarre}$`,
`Factoriser l'expression : $${acarre}x^2-${bcarre} $`];
let soluce = [`$\\left( ${a}x+${b} \\right)^2$`,`$\\left( ${a}x-${b} \\right)^2$`,`$\\left( ${a}x+${b}\\right) \\left( ${a}x-${b}\\right)$`];
let corrections = [`$${acarre}x^2 + ${ab2}x + ${bcarre} = \\underbrace{\\left(${a}x\\right)^2}_{a^2} + \\underbrace{2\\times ${a}x\\times ${b}}_{2ab} + \\underbrace{${b}^2}_{b^2} = \\underbrace{\\left( ${a}x+${b} \\right)^2}_{(a+b)^2}$`,
`$${acarre}x^2 - ${ab2}x + ${bcarre} =  \\underbrace{\\left(${a}x\\right)^2}_{a^2} - \\underbrace{2\\times ${a}x\\times ${b}}_{2ab} + \\underbrace{${b}^2}_{b^2} = \\underbrace{\\left( ${a}x-${b} \\right)^2}_{(a-b)^2}$`,
`$${acarre}x^2-${bcarre} = \\underbrace{\\left( ${a}x \\right)^2}_{a^2} - \\underbrace{${b}^2}_{b^2} = \\underbrace{(${a}x+${b})}_{(a+b)} \\times \\underbrace{(${a}x-${b})}_{(a-b)}$`];

enonce.innerHTML = enonces[identite];
solution.innerHTML = soluce[identite];
correctiond.innerHTML = corrections[identite];
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
