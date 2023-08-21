function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function nbreouoppose(a) {
    let rep;
    let choix = nbrealéa(1, 2);
    if (choix == 1) { rep = a; } else { rep = -a; }
    return rep;
}

function rienplus(a) {
    let rep;
    if (a < 0) { rep = ''; } else { rep = '+'; }
    return rep;
}

function plusmoins(a) {
    let rep;
    if (a < 0) { rep = '-'; } else { rep = '+'; }
    return rep;
}

function rienmoins(a) {
    let rep;
    if (a < 0) { rep = '-'; } else { rep = ''; }
    return rep;
}

function parenthesegd(a) {
    let rep;
    let pg;
    let pd;
    if (a < 0) { pg = '('; } else { pg = ''; }
    if (a < 0) { pd = ')'; } else { pd = ''; }
    return rep = [pg, pd];
}

function cas(a, denom, denom1, denom2) {
    let k;
    if (a < 0) { k = 0; }
    if (a == 0 && denom != 1) { k = 1; }
    if (a > 0 && denom1 != 1 && denom2 != 1) { k = 2; }
    if (a == 0 && denom == 1) { k = 3; }
    if (a > 0 && denom1 == 1 && denom2 != 1) { k = 4; }
    if (a > 0 && denom1 != 1 && denom2 == 1) { k = 5; }
    if (a > 0 && denom1 == 1 && denom2 == 1) { k = 6; }
    return k;
}

function simplifierfraction(numerateur, denominateur) {
    var gcd = function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    };
    gcd = gcd(numerateur, denominateur);
    return [numerateur / gcd, denominateur / gcd];
}

function fracsimp(num, denom) {
    let rep = [num, denom];
    if (num < 0 && denom < 0) { rep = [-num, -denom]; }
    if (num > 0 && denom < 0) { rep = [num, -denom]; }
    if (num < 0 && denom > 0) { rep = [-num, denom]; }
    return rep;
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

let a, b, sb, oppb, soppb, c, oppc, oppbsura, oppbsurasimp, soppbsura, coppb, oppcoppb, sol1, sol1simp, ssol1, sol2, sol2simp, ssol2, k;

function genererExercice() {
    a = nbreouoppose(nbrealéa(1, 10));
    b = nbreouoppose(nbrealéa(1, 10));
    sb = rienplus(b);
    oppb = -b;
    soppb = rienplus(oppb);
    c = nbrealéa(-2, 15);
    oppc = -c;
    oppbsura = simplifierfraction(oppb, a);
    oppbsurasimp = fracsimp(oppbsura[0], oppbsura[1]);
    soppbsura = rienmoins(oppb / a);
    coppb = c + oppb;
    oppcoppb = oppc + oppb;
    sol1 = simplifierfraction(coppb, a);
    sol1simp = fracsimp(sol1[0], sol1[1]);
    ssol1 = rienmoins(coppb / a);
    sol2 = simplifierfraction(oppcoppb, a);
    sol2simp = fracsimp(sol2[0], sol2[1]);
    ssol2 = rienmoins(oppcoppb / a);
    k = cas(c, oppbsurasimp[1], sol1simp[1], sol2simp[1]);

    let listecorrections = [`$${c}$ est négatif donc il n'y a pas de solution car une valeur absolue est toujours positive.<br> $S=\\varnothing$`,
    `Il faut donc résoudre $${a}x${sb}${b}=0$ :<br> $${a}x=${oppb}$ donc $x=\\dfrac{${oppb}}{${a}} = ${soppbsura}\\dfrac{${oppbsurasimp[0]}}{${oppbsurasimp[1]}} $`,
    `$\\begin{array}{rclcrcl} ${a}x${sb}${b} & = & ${c} & \\text{ou} & ${a}x${sb}${b} & = & ${oppc} \\\\
${a}x & = & ${c} ${soppb} ${oppb} = ${coppb} & \\text{ou} & ${a}x & = & ${oppc} ${soppb} ${oppb} = ${oppcoppb} \\\\
x & = & \\dfrac{${coppb}}{${a}} = ${ssol1} \\dfrac{${sol1simp[0]}}{${sol1simp[1]}} & \\text{ou} & x & = & \\dfrac{${oppcoppb}}{${a}} = ${ssol2} \\dfrac{${sol2simp[0]}}{${sol2simp[1]}}
\\end{array} $`,
    `Il faut donc résoudre $${a}x${sb}${b}=0$ :<br> $${a}x=${oppb}$ donc $x=\\dfrac{${oppb}}{${a}} = ${soppbsura}${oppbsurasimp[0]}$`,
    `$\\begin{array}{rclcrcl} ${a}x${sb}${b} & = & ${c} & \\text{ou} & ${a}x${sb}${b} & = & ${oppc} \\\\
${a}x & = & ${c} ${soppb} ${oppb} = ${coppb} & \\text{ou} & ${a}x & = & ${oppc} ${soppb} ${oppb} = ${oppcoppb} \\\\
x & = & \\dfrac{${coppb}}{${a}} = ${ssol1} ${sol1simp[0]} & \\text{ou} & x & = & \\dfrac{${oppcoppb}}{${a}} = ${ssol2} \\dfrac{${sol2simp[0]}}{${sol2simp[1]}}
\\end{array} $`,
    `$\\begin{array}{rclcrcl} ${a}x${sb}${b} & = & ${c} & \\text{ou} & ${a}x${sb}${b} & = & ${oppc} \\\\
${a}x & = & ${c} ${soppb} ${oppb} = ${coppb} & \\text{ou} & ${a}x & = & ${oppc} ${soppb} ${oppb} = ${oppcoppb} \\\\
x & = & \\dfrac{${coppb}}{${a}} = ${ssol1} \\dfrac{${sol1simp[0]}}{${sol1simp[1]}} & \\text{ou} & x & = & \\dfrac{${oppcoppb}}{${a}} = ${ssol2} ${sol2simp[0]}
\\end{array} $`,
    `$\\begin{array}{rclcrcl} ${a}x${sb}${b} & = & ${c} & \\text{ou} & ${a}x${sb}${b} & = & ${oppc} \\\\
${a}x & = & ${c} ${soppb} ${oppb} = ${coppb} & \\text{ou} & ${a}x & = & ${oppc} ${soppb} ${oppb} = ${oppcoppb} \\\\
x & = & \\dfrac{${coppb}}{${a}} = ${ssol1} ${sol1simp[0]} & \\text{ou} & x & = & \\dfrac{${oppcoppb}}{${a}} = ${ssol2} ${sol2simp[0]}
\\end{array} $`,];

    let listesolutions = [`$S=\\varnothing$`, `$S=\\left\\{ ${soppbsura}\\dfrac{${oppbsurasimp[0]}}{${oppbsurasimp[1]}} \\right\\}$`, `$S=\\left\\{ ${ssol1} \\dfrac{${sol1simp[0]}}{${sol1simp[1]}}~;~${ssol2} \\dfrac{${sol2simp[0]}}{${sol2simp[1]}} \\right\\} $`,
        `$S=\\left\\{${soppbsura}${oppbsurasimp[0]}\\right\\}$`,
        `$S=\\left\\{${ssol1} ${sol1simp[0]}~;~${ssol2} \\dfrac{${sol2simp[0]}}{${sol2simp[1]}} \\right\\}$`,
        `$S=\\left\\{${ssol1} \\dfrac{${sol1simp[0]}}{${sol1simp[1]}}~;~${ssol2} ${sol2simp[0]} \\right\\}$`,
        `$S=\\left\\{${ssol1} ${sol1simp[0]}~;~${ssol2} ${sol2simp[0]} \\right\\}$`];

    enonce.innerHTML = `Résoudre dans $\\mathbb{R}$ l'équation : $\\left|${a}x${sb}${b}\\right|=${c}$`;
    solution.innerHTML = listesolutions[k];
    correctiond.innerHTML = listecorrections[k];
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
