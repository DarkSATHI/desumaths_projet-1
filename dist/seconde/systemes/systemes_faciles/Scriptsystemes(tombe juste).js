function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function signe(a) {
    let s;
    if (a < 0) { s = ''; } else { s = '+'; }
    return s;
}

function solutions_cas(a, b, c, d, e, f) {
    let reponsenumx;
    let reponsedenomx;
    let reponsenumy;
    let reponsedenomy;
    let reponses;
    if (a * e - b * d != 0) { reponsenumx = c * e - f * b; reponsedenomx = a * e - d * b; reponsenumy = c * d - a * f; reponsedenomy = b * d - a * e; }
    return reponses = [reponsenumx, reponsedenomx, reponsenumy, reponsedenomy];
}

function simplifierfraction(numerateur, denominateur) {
    var gcd = function gcd(a, b) {
        return b ? gcd(b, a % b) : a;
    };
    gcd = gcd(numerateur, denominateur);
    return [numerateur / gcd, denominateur / gcd];
}

function signefraction(a, b) {
    let signe;
    let rep;
    if (a >= 0 && b > 0) { signe = ''; }
    if (a > 0 && b < 0) { signe = '-'; }
    if (a <= 0 && b < 0) { signe = ''; }
    if (a < 0 && b > 0) { signe = '-'; }
    if (a < 0) { a = -a; }
    if (b < 0) { b = -b; }
    return rep = [a, b, signe];
}

function cas(a, b, c, d, e, f) {
    let det = a * e - b * d;
    let conf = a * f - d * c;
    let rep;
    if (det != 0) { rep = 0; }
    else if (conf == 0) { rep = 1; }
    else { rep = 2; }
    return rep;
}

function plusmoins(a) {
    let rep;
    let b = nbrealéa(1, 2);
    if (b == 1) { rep = a; } else { rep = -a; }
    return rep;
}

function repsimple(a, b, c) {
    let rep;
    if (b == 1) { rep = '=' + c + a; } else { rep = ''; }
    return rep;
}

function signmulti(a, d) {
    let rep;
    if (a > 0 && d > 0) { rep = [-d, a]; }
    if (a < 0 && d < 0) { rep = [-d, a]; }
    if (a > 0 && d < 0) { rep = [d, -a]; }
    if (a < 0 && d > 0) { rep = [d, -a]; }
    return rep;
}

function parenthesesgd(a) {
    let rep;
    let pg;
    let pd;
    if (a < 0) { pg = '('; } else { pg = ''; }
    if (a < 0) { pd = ')'; } else { pd = ''; }
    return rep = [pg, pd];
}

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
let correction = document.getElementById('correction');
let solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');

let a, b, d, solx, soly, e, c, f, s1, s2, det, rep, xsimpl, ysimpl, signex, signey, k, reponsesimplifieex,
    reponsesimplifieey, multi, s_1, s_2, coefy, r, sopp1, sopp2, s3, presquexnum, presquexdenom, presquex,
    pgd1, pgd2, pgd3, y, pgdy ,by ,sby ,opby ,sopby ;

function genererExercice() {

    a = plusmoins(nbrealéa(1, 9));
    b = nbrealéa(-9, 9);
    d = plusmoins(nbrealéa(1, 9));
    solx = nbrealéa(-15, 15);
    soly = nbrealéa(-15, 15);
    e = nbrealéa(-9, 9);
    c = a * solx + b * soly;
    f = d * solx + e * soly;
    s1 = signe(b);
    s2 = signe(e);
    det = a * e - b * d;
    rep = solutions_cas(a, b, c, d, e, f);
    xsimpl = simplifierfraction(rep[0], rep[1]);
    ysimpl = simplifierfraction(rep[2], rep[3]);
    signex = signefraction(xsimpl[0], xsimpl[1]);
    signey = signefraction(ysimpl[0], ysimpl[1],)
    k = cas(a, b, c, d, e, f);
    reponsesimplifieex = repsimple(signex[0], signex[1], signex[2]);
    reponsesimplifieey = repsimple(signey[0], signey[1], signey[2]);
    multi = signmulti(a, d);
    s_1 = signe(b * multi[0]);
    s_2 = signe(e * multi[1]);
    coefy = b * multi[0] + e * multi[1];
    r = c * multi[0] + f * multi[1];
    sopp1 = signe(-b);
    sopp2 = signe(-a);
    s3 = signe(c);
    presquexnum = a * c * e - a * b * f;
    presquexdenom = a * e - b * d;
    presquex = simplifierfraction(presquexnum, presquexdenom);
    pgd1 = parenthesesgd(multi[0]);
    pgd2 = parenthesesgd(multi[1]);
    pgd3 = parenthesesgd(a);
    y = r / coefy;
    pgdy = parenthesesgd(y);
    by = b * y;
    sby = signe(by);
    opby = -b * y;
    sopby = signe(opby);

    let listeSolutions = [`$x=${solx}$ et $y=${soly}$ </br> $S=\\left\\{\\left(${solx}~;${soly}\\right)\\right\\}$`,
`Les droites sont confondues`,
`Pas de solution. $S = \\varnothing$`];

let listeCorrections = [`$\\left\\{ \\begin{array}{rcl} ${a}x ${s1} ${b}y & = & ${c}~(L_1) \\\\ ${d}x ${s2} ${e}y & = & ${f}~(L_2) \\end{array} \\right. \\iff \\left\\{ \\begin{array}{rcl} ${a*multi[0]}x ${s_1} ${b*multi[0]}y & = & ${c*multi[0]} \\hspace{1cm} \\left(L'_1=L_1\\times ${pgd1[0]} ${multi[0]} ${pgd1[1]}\\right) \\\\ ${d*[multi[1]]}x ${s_2} ${e*multi[1]}y & = & ${f*multi[1]} \\hspace{1cm} \\left(L'_2=L_2\\times ${pgd2[0]} ${multi[1]} ${pgd2[1]} \\right) \\end{array} \\right.$</br></br>
En additionnant $L'_1$ et $L'_2$ on obtient : $${coefy}y = ${r}$ donc $\\boxed{~y=\\dfrac{${r}}{${coefy}} ${reponsesimplifieey}~}$</br></br>
Ensuite on remplace $y$ par $${y}$ dans $L_1$ : $${a}x ${s1} ${b} \\times ${pgdy[0]} ${y} ${pgdy[1]} = ${c}$</br></br>
Donc $${a}x ${sby} ${by} = ${c}$ donc $${a}x = ${c} ${sopby} ${opby} = ${presquex[0]}$ donc $x=\\dfrac{${presquex[0]}}{${a}}: $ donc $\\boxed{~x${reponsesimplifieex}~}$`,
`$\\left\\{ \\begin{array}{rcl} ${a}x ${s1} ${b}y & = & ${c}~(L_1) \\\\ ${d}x ${s2} ${e}y & = & ${f}~(L_2) \\end{array} \\right. \\iff \\left\\{ \\begin{array}{rcl} ${a*multi[0]}x ${s_1} ${b*multi[0]}y & = & ${c*multi[0]} \\hspace{1cm} \\left(L'_1=L_1\\times (${multi[0]})\\right) \\\\ ${d*[multi[1]]}x ${s_2} ${e*multi[1]}y & = & ${f*multi[1]} \\hspace{1cm} \\left(L'_2=L_2\\times (${multi[1]})\\right) \\end{array} \\right.$</br></br>
En additionnant $L'_1$ et $L'_2$ on obtient : ${coefy}y = ${r} donc les droites sont confondues.</br>
On isole alors $y$ dans $L_1$ : $${a}x ${s1} ${b}y = ${c} \\iff ${s1} ${b}y = ${sopp2} ${a}x ${s3} ${c} \\iff y = \\dfrac{${sopp2} ${a}x ${s3} ${c}}{${s1} ${b}}$</br>
$S = \\left\\{\\left( x~;~\\dfrac{${sopp2} ${a}x ${s3} ${c}}{${s1} ${b}} \\right) / x \\in \\mathbb{R} \\right\\}$`,
`$\\left\\{ \\begin{array}{rcl} ${a}x ${s1} ${b}y & = & ${c}~(L_1) \\\\ ${d}x ${s2} ${e}y & = & ${f}~(L_2) \\end{array} \\right. \\iff \\begin{cases} ${a*multi[0]}x ${s_1} ${b*multi[0]}y & = & ${c*multi[0]} \\hspace{1cm} \\left(L'_1=L_1\\times (${multi[0]})\\right) \\\\ ${d*[multi[1]]}x ${s_2} ${e*multi[1]}y & = & ${f*multi[1]} \\hspace{1cm} \\left(L'_2=L_2\\times (${multi[1]})\\right) \\end{array} \\right.$</br></br>
En additionnant $L'_1$ et $L'_2$ on obtient : ${coefy}y = ${r} ce qui est impossible. $\\boxed{S = \\varnothing}$`]


    enonce.innerHTML = `Résoudre le système d'équations suivant : $\\left\\{ \\begin{array}{rcl} ${a}x ${s1} ${b}y & = & ${c} \\\\ ${d}x ${s2} ${e}y & = & ${f} \\end{array} \\right.$`
    solution.innerHTML = listeSolutions[k]
    correctiond.innerHTML = listeCorrections[k]

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