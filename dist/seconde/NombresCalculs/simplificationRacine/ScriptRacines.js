function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


function facteurs(a) {
    let rep = [1];
    let rep1;
    let facts = [];
    let facts1;
    let listeCarrés = [4, 9, 16, 25, 36, 49, 64, 81];
    for (let i = 2; i < a + 1; i++) {
        if (a / i - Math.floor(a / i) == 0) { rep1 = rep.push(i); }
    }
    for (let j = 0; j < rep.length; j++) {
        for (let k = 0; k < listeCarrés.length; k++) {
            if (rep[j] == listeCarrés[k]) { facts1 = facts.push(rep[j]); }
        }
    }
    return facts;
}

function simpsousracine(facteur, a) {
    let rep;
    let b;
    if (facteur.length != 0) { b = facteur[facteur.length - 1]; } else { b = 1; }
    rep = a / b;
    return rep;
}

function simplification(simpssrac, a) {
    let rep;
    if (simpssrac != 1) { rep = ''; } else { rep = '=' + Math.sqrt(a); }
    return rep;
}

let enonce = document.getElementById('enonce');
let solution = document.getElementById('solution');
let correctiond = document.getElementById('correctiond');
let solutions = document.getElementById('solutions');
let correction = document.getElementById('correction');
let recommencer = document.getElementById('recommencer');


function genererExercice() {
    let listecarres = [4, 9, 16, 25, 36, 49, 64, 81, 100];
    let liste2 = [2, 3, 5, 7, 10, 11, 13, 14, 15, 17, 19, 21, 22, 23, 26, 29, 30];
    let a = liste2[nbrealéa(0, 16)];
    let b = listecarres[nbrealéa(0, 8)];
    let radical = a * b;
    let devantracine = Math.sqrt(b);
    let repsimp = simplification(b, a);



    enonce.innerHTML = `Simplifier la racine carrée suivante : $\\sqrt{${radical}}$`;
    solution.innerHTML = `$\\sqrt{${radical}}=${devantracine}\\sqrt{${a}} ${repsimp}$`;
    correctiond.innerHTML = `$\\sqrt{${radical}}=\\sqrt{${b}\\times ${a}}=\\sqrt{${b}}\\times\\sqrt{${a}}=${devantracine}\\sqrt{${a}}$`;
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
