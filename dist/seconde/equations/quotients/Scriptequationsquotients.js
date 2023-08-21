function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function positifnegatif(a) {
    let rep;
    let choix = nbrealéa(1, 2);
    if (choix == 1) { rep = a; } else { rep = -a; }
    return rep;
}

function plusmoins() {
    let s = nbrealéa(1, 2);
    let sig;
    if (s == 1) { sig = '+'; } else { sig = '-'; }
    return sig;
}

function rienplus(a) {
    let rep
    if (a < 0) { rep = ''; } else { rep = '+'; }
    return rep;
}

function rienmoins(a) {
    let rep
    if (a < 0) { rep = '-'; } else { rep = ''; }
    return rep;
}

function simplifierfraction(numerateur, denominateur) {
    var gcd = function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    };
    gcd = gcd(numerateur, denominateur);
    return [numerateur / gcd, denominateur / gcd];
}

function fracsimp(num, denom) {
    let rep;
    let num1;
    let denom1;
    if (denom < 0 && num > 0) { num1 = num; denom1 = -denom; }
    if (denom > 0 && num >= 0) { num1 = num; denom1 = denom; }
    if (denom > 0 && num <= 0) { num1 = -num; denom1 = denom; }
    if (denom < 0 && num < 0) { num1 = -num; denom1 = -denom; }
    return rep = [num1, denom1];
}

function simply(num, denom) {
    let rep;
    if (denom == 1) { rep = '=' + num; } else { rep = ''; }
    return rep;
}

function parenthesesgd(a) {
    let rep;
    let parg;
    let pard;
    if (a < 0) { parg = '('; pard = ')'; } else { parg = ''; pard = ''; }
    return rep = [parg, pard];
}

function cas(num, denom) {
    let rep;
    if (denom == 1) { rep = 1; } else { rep = 0; }
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


function genererExercice() {

    let a = positifnegatif(nbrealéa(1, 10));
    let b = nbrealéa(-20, 20);
    let c = positifnegatif(nbrealéa(1, 10));
    let d = nbrealéa(-20, 20);
    let e = positifnegatif(nbrealéa(1, 10));
    let f = nbrealéa(2, 10);
    let oppd = -d;
    let valint = -d / c;
    let valintsimp = simplifierfraction(-d, c);
    let valintrepsimp = fracsimp(valintsimp[0], valintsimp[1]);
    let signevalint = rienmoins(valint);
    let simplyvalint = simply(valintsimp[0], valintsimp[1]);
    let signeb = rienplus(b);
    let signed = rienplus(d);
    let signee = rienplus(e);
    let signef = rienplus(f);
    let pgda = parenthesesgd(a);
    let pgdb = parenthesesgd(b);
    let pgdc = parenthesesgd(c);
    let pgdd = parenthesesgd(d);
    let ce = c * e;
    let de = d * e;
    let signede = rienplus(de);
    let af = a * f;
    let bf = b * f;
    let signebf = rienplus(bf);
    let opaf = -af;
    let signeopaf = rienplus(opaf);
    let opde = -de;
    let signeopde = rienplus(opde);
    let coefx = ce + opaf;
    let reels = bf + opde;
    let fracsimplifiee = simplifierfraction(reels, coefx);
    let repsimp = fracsimp(fracsimplifiee[0], fracsimplifiee[1]);
    let signesol = rienmoins(reels / coefx);
    let k = cas(repsimp[0], repsimp[1]);
    let kenonce = cas(valintrepsimp[0], valintrepsimp[1]);




    let listecorrrections = [`$\\begin{array}{rcrcl} \\dfrac{${a}x${signeb}${b}}{${c}x${signed}${d}}=\\dfrac{${e}}{${f}} & \\iff & ${e}\\times (${c}x${signed}${d}) & = &${f}\\times (${a}x${signeb}${b}) \\left(\\text{produit en croix avec}~x\\neq ${signevalint} \\dfrac{${valintrepsimp[0]}}{${valintrepsimp[1]}} ${simplyvalint} \\right) \\\\
& \\iff & ${e}\\times ${pgdc[0]}${c}x${pgdc[1]} ${signee}${e}\\times ${pgdd[0]}${d}${pgdd[1]} & = & ${f}\\times ${pgda[0]}${a}x${pgda[1]} ${signef}${f}\\times ${pgdb[0]}${b}${pgdb[1]} \\\\
& \\iff & ${ce}x ${signede}${de} & = & ${af}x ${signebf}${bf} \\\\
& \\iff & ${ce}x ${signeopaf}${opaf}x & = & ${bf} ${signeopde}${opde} \\\\
& \\iff & ${coefx}x & = & ${reels} \\\\
& \\iff & x & = & \\dfrac{${reels}}{${coefx}}=${signesol}\\dfrac{${repsimp[0]}}{${repsimp[1]}}~\\text{(simplifiée au maximum)} \\end{array}$ `,
    `$\\begin{array}{rcrcl} \\dfrac{${a}x${signeb}${b}}{${c}x${signed}${d}}=\\dfrac{${e}}{${f}} & \\iff & ${e}\\times (${c}x${signed}${d}) & = & ${f}\\times (${a}x${signeb}${b}) \\left(\\text{produit en croix avec}~x\\neq ${signevalint} \\dfrac{${valintrepsimp[0]}}{${valintrepsimp[1]}} ${simplyvalint} \\right) \\\\
& \\iff & ${e}\\times ${pgdc[0]}${c}x${pgdc[1]} ${signee}${e}\\times ${pgdd[0]}${d}${pgdd[1]} & = & ${f}\\times ${pgda[0]}${a}x${pgda[1]} ${signef}${f}\\times ${pgdb[0]}${b}${pgdb[1]} \\\\
& \\iff & ${ce}x ${signede}${de} & = & ${af}x ${signebf}${bf} \\\\
& \\iff & ${ce}x ${signeopaf}${opaf}x & = & ${bf} ${signeopde}${opde} \\\\
& = & \\dfrac{${e}}{${f}}}\\iff ${coefx}x & = & ${reels} \\\\
& \\iff & x & = & \\dfrac{${reels}}{${coefx}}=${signesol}${repsimp[0]}~\\text{(simplifiée au maximum)} \\end{array}$ `];

    let listesolutions = [`Solution : $S=\\left\\{${signesol}\\dfrac{${repsimp[0]}}{${repsimp[1]}}\\right\\} $`, `Solution : $S=\\left\\{${signesol}${repsimp[0]}\\right\\} $`];

    let listenonces = [`Résoudre dans $\\mathbb{R}~\\backslash \\left\\{ ${signevalint} \\dfrac{${valintrepsimp[0]}}{${valintrepsimp[1]}} \\right\\} $ l'équation : $\\dfrac{${a}x${signeb}${b}}{${c}x${signed}${d}}=\\dfrac{${e}}{${f}}$`,
    `Résoudre dans $\\mathbb{R}~\\backslash \\left\\{ ${signevalint} ${valintrepsimp[0]} \\right\\} $ l'équation : $\\dfrac{${a}x${signeb}${b}}{${c}x${signed}${d}}=\\dfrac{${e}}{${f}}$`];

    enonce.innerHTML = listenonces[kenonce];
    solution.innerHTML = listesolutions[k];
    correctiond.innerHTML = listecorrrections[k];
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
