function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function signe(a) {
	let rep;
	if (a<0) {rep='';} else {rep='+';}
	return rep;
}

function sol(a) {
    let rep;
    if (a<0) {rep=0;} else {rep=1;}
    return rep;
}

function test_réponse(a,b,c) {
    let test;
    let div=a/b;
    if (div==c) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;
}


let enonce = document.getElementById('enonce');
let solution = document.getElementById('solution');
let correctiond = document.getElementById('correctiond');
let solutions = document.getElementById('solutions');
let correction = document.getElementById('correction');
let recommencer = document.getElementById('recommencer');


function genererExercice() {

    let a = nbrealéa(1,10);
    let b = nbrealéa(-10,10);
    let c = nbrealéa(-10,50);
    let s = signe(b);
    let opb = -b;
    let videoupas = sol(c);
    
    let listeSolutions =[`$S=\\varnothing$`,`$S=\\left\\\{\\dfrac{${opb} + \\sqrt{${c}}}{${a}}~;~\\dfrac{${opb} - \\sqrt{${c}}}{${a}}\\right\\\}$`];
    let listeCorrections = [`$${c}$ est négatif donc il n'y a pas de solution`,
    `$\\begin{array}{rcrclcrcl} \\left(${a}x ${s} ${b}\\right)^2=${c} & \\iff & ${a}x ${s} ${b} & = & \\sqrt{${c}} & \\text{ou} & ${a}x ${s} ${b} & = & -\\sqrt{${c}} \\\\
    & \\iff & ${a}x & = & ${opb} + \\sqrt{${c}} & \\text{ou} & ${a}x & = & ${opb} - \\sqrt{${c}} \\\\
    & \\iff & x & = & \\dfrac{${opb} + \\sqrt{${c}}}{${a}} & \\text{ou} & x & = & \\dfrac{${opb} - \\sqrt{${c}}}{${a}} \\end{array}$`];
    
    enonce.innerHTML = `Résoudre dans $\\mathbb{R}$ l'équation : $\\left(${a}x ${s} ${b}\\right)^2=${c}$`;
    solution.innerHTML = listeSolutions[videoupas];
    correctiond.innerHTML = listeCorrections[videoupas];
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
