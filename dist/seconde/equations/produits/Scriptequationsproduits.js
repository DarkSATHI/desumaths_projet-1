function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function plusmoins() {
    let s = nbrealéa(1, 2);
    let sig;
    if (s == 1) { sig = '+'; } else { sig = '-'; }
    return sig;
}

function rienmoins() {
    let s = nbrealéa(1, 2);
    let sig;
    if (s == 1) { sig = ''; } else { sig = '-'; }
    return sig;
}

function reponse(a, b, c, d, e) {
    let rep;
    if (d == '-') { a = -a; }
    if (e == '-') { b = -b; }
    rep = (c - b) / a;
    return rep;
}

function simplifierfraction(numerateur, denominateur) {
    var gcd = function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    };
    gcd = gcd(numerateur, denominateur);
    return [numerateur / gcd, denominateur / gcd];
}

function numerateursimplifie(a, b, c, d, e) {
    let num;
    let denom;
    let rep;
    if (d == '-') { a = -a; }
    if (e == '-') { b = -b; }
    num = c - b;
    denom = a;
    rep = simplifierfraction(num, denom);
    if (rep[0] < 0) { return -rep[0]; } else { return rep[0]; }
}

function denominateursimplifie(a, b, c, d, e) {
    let num;
    let denom;
    let rep;
    if (d == '-') { a = -a; }
    if (e == '-') { b = -b; }
    num = c - b;
    denom = a;
    rep = simplifierfraction(num, denom);
    if (rep[1] < 0) { return -rep[1]; } else { return rep[1]; }
}

function changesigne(a) {
    let signe;
    if (a == '+') { signe = '-'; } else { signe = '+'; }
    return signe;
}

function cplusb(a, b, c) {
    let cetb;
    if (c == '+') { cetb = a + b; } else { cetb = b - a; }
    return cetb;
}

function asigne(a, b) {
    let asig;
    if (b == '-') { asig = -a; } else { asig = a; }
    return asig;
}

function signerep(a) {
    let signreponse;
    if (a < 0) { signreponse = '-'; } else { signreponse = ''; }
    return signreponse;
}

function repsimple(a, b, c) {
    let rep;
    if (b == 1) { rep = '=' + c + a; } else { rep = ''; }
    return rep;
}

function num1(s1, n1, d1, s2, n2, d2) {
    if (d1 == 1 & d2 != 1) {
        return `$S=\\left\\{${s1} ${n1}~;~${s2} \\dfrac{${numsimp2}}{${denomsimp2}}\\right\\}$`
    }
    if (d1 != 1 & d2 == 1) {
        return `$S=\\left\\{${s1} \\dfrac{${n1}}{${d1}}~;~${s2} ${n2}\\right\\}$`
    }
    if (d1 != 1 & d2 != 1) {
        return `$S=\\left\\{${s1} \\dfrac{${n1}}{${d1}}~;~${s2} \\dfrac{${n2}}{${d2}}\\right\\}$`
    }
}

function test_réponse(a, b, c) {
    let test;
    let div = a / b;
    if (div == c) { test = 'Bonne réponse !!'; } else { test = 'Mauvaise réponse'; }
    return test;
}


let enonce = document.getElementById('enonce');
let solution = document.getElementById('solution');
let correctiond = document.getElementById('correctiond');
let solutions = document.getElementById('solutions');
let correction = document.getElementById('correction');
let recommencer = document.getElementById('recommencer');


function genererExercice() {

    let a = nbrealéa(1, 15);
    let b = nbrealéa(1, 20);
    let c = nbrealéa(1, 15);
    let d = nbrealéa(1, 20);
    let s1 = rienmoins();
    let s2 = plusmoins();
    let s3 = rienmoins();
    let s4 = plusmoins();
    let rep1 = reponse(a, b, 0, s1, s2);
    let numsimp1 = numerateursimplifie(a, b, 0, s1, s2);
    let denomsimp1 = denominateursimplifie(a, b, 0, s1, s2);
    let rep2 = reponse(c, d, 0, s3, s4);
    let numsimp2 = numerateursimplifie(c, d, 0, s3, s4);
    let denomsimp2 = denominateursimplifie(c, d, 0, s3, s4);
    let s_3 = changesigne(s2);
    let cetb1 = cplusb(b, 0, s_3);
    let s_4 = changesigne(s4);
    let cetb2 = cplusb(d, 0, s_4);
    let aavecsigne = asigne(a, s1);
    let bavecsigne = asigne(c, s3);
    let signereponse1 = signerep(rep1);
    let signereponse2 = signerep(rep2);
    let reponsesimplifiee1 = repsimple(numsimp1, denomsimp1, signereponse1);
    let reponsesimplifiee2 = repsimple(numsimp2, denomsimp2, signereponse2);


    `Solution : $x  = ${signereponse1} \\dfrac{${numsimp1}}{${denomsimp1}} $ ou $x  = ${signereponse2} \\dfrac{${numsimp2}}{${denomsimp2}} $</br></br>
    $S=\\left\\{${signereponse1} \\dfrac{${numsimp1}}{${denomsimp1}}~;~${signereponse2} \\dfrac{${numsimp2}}{${denomsimp2}}\\right\\}$`

    enonce.innerHTML = `Résoudre dans $\\mathbb{R}$ l'équation : $(${s1} ${a}x ${s2} ${b}) (${s3} ${c}x ${s4} ${d})= 0$`;
    solution.innerHTML = num1(signereponse1, numsimp1, denomsimp1, signereponse2, numsimp2, denomsimp2);
    correctiond.innerHTML = `$\\begin{array}{rclcrcl}${s1} ${a}x ${s2} ${b} & = & 0 & \\text{ou} & ${s3} ${c}x ${s4} ${d} & = & 0 \\\\
    ${s1} ${a}x & = & 0 ${s_3} ${b} = ${cetb1} & \\text{ou} & ${s3} ${c}x & = & 0 ${s_4} ${d} = ${cetb2} \\\\
    x & = & \\dfrac{${cetb1}}{${aavecsigne}} = ${signereponse1} \\dfrac{${numsimp1}}{${denomsimp1}} ${reponsesimplifiee1}~(\\text{simplifiée}) & \\text{ou} & x & = & \\dfrac{${cetb2}}{${bavecsigne}} = ${signereponse2} \\dfrac{${numsimp2}}{${denomsimp2}} ${reponsesimplifiee2}~(\\text{simplifiée}) \\end{array}$ `;
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
