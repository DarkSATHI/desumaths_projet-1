function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function plusmoins() {
    let choix;
    let result;
    choix = nbrealéa(1, 2);
    if (choix == 1) {
        result = '+';
    } else {
        result = '-';
    }
    return result;
}

function sign1() {
    let sig1;
    sig1 = plusmoins();
    if (sig1 == '+') {
        sig1 = '';
    } else {
        sig1 = '-';
    }
    return sig1;
}


function signe() {
    let a = nbrealéa(1, 2);
    let sig;
    if (a == 1) { sig = '+'; } else { sig = '-'; }
    return sig;
}

function signedeuxiemeparenthese(s1, s2) {
    let reponse;
    if (s1 == '+' && s2 == '') { reponse = '+'; }
    else if (s1 == '+' && s2 == '+') { reponse = '+'; }
    else if (s1 == '-' && s2 == '-') { reponse = '+'; }
    else { reponse = '-'; }
    return reponse;
}


let enonce = document.getElementById('enonce');
let solution = document.getElementById('solution');
let correctiond = document.getElementById('correctiond');
let solutions = document.getElementById('solutions');
let correction = document.getElementById('correction');
let recommencer = document.getElementById('recommencer');

let a ,b ,identité ,signe1 ,acarré ,ab2 ,bcarré ,sig1 ,sig2;


function genererExercice() {


     a = nbrealéa(1, 9);
     b = nbrealéa(1, 9);
     identité = nbrealéa(0, 2);
     signe1 = sign1();
     acarré = a * a;
     ab2 = 2 * a * b;
     bcarré = b * b;
     sig1 = signedeuxiemeparenthese('+', signe1);
     sig2 = signedeuxiemeparenthese('-', signe1);

     enonce = document.getElementById('enonce');
     correctiond = document.getElementById('correctiond');
     correction = document.getElementById('correction');
     solutions = document.getElementById('solutions');
     solution = document.getElementById('solution');


    let listenonces = [`Développer : $\\boldsymbol{\\left(${signe1} ~ ${a}x + ${b}\\right)^2}$`,
    `Développer : $\\boldsymbol{\\left(${signe1} ~ ${a}x - ${b}\\right)^2}$`,
    `Développer : $\\boldsymbol{\\left(${a}x + ${b}\\right) \\left(${a}x - ${b}\\right)}$`
    ]

    let listeSolutions = [`Solution : $${acarré}x^2 ${sig1} ${ab2}x + ${bcarré}$`,
    `Solution : $${acarré}x^2 ${sig2} ${ab2}x + ${bcarré}$`,
    `Solution : $${acarré}x^2 - ${bcarré}$`
    ]

    let listeCorrections = [`$\\begin{array}{rcl} \\left(${signe1} ~ ${a}x + ${b}\\right)^2 & = & \\underbrace{(${signe1} ${a}x)^2}_{a^2} + \\underbrace{2\\times (${signe1} ${a}x) \\times ${b}}_{2ab} + \\underbrace{(${b})^2}_{b^2} \\\\
& = & ${acarré}x^2 ${sig1} ${ab2}x + ${bcarré} \\end{array}$`,
    `$\\begin{array}{rcl} \\left(${signe1} ~ ${a}x - ${b}\\right)^2  & = & \\underbrace{(${signe1} ${a}x)^2}_{a^2} - \\underbrace{2\\times (${signe1} ${a}x) \\times ${b}}_{2ab} + \\underbrace{(${b})^2}_{b^2} \\\\
& = & ${acarré}x^2 ${sig2} ${ab2}x + ${bcarré} \\end{array}$`,
    `$\\begin{array}{rcl} \\underbrace{\\left(${a}x + ${b}\\right)}_{a+b} \\underbrace{\\left(${a}x - ${b}\\right)}_{a-b} & = & \\underbrace{(${a}x)^2}_{a^2} - \\underbrace{${b}^2}_{b^2} \\\\
& = & ${acarré}x^2 - ${bcarré} \\end{array}$`
    ]

    enonce.innerHTML = listenonces[identité];
    solution.innerHTML = listeSolutions[identité];
    correctiond.innerHTML = listeCorrections[identité];

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