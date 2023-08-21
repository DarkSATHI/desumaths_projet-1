function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function positifnegatif(a) {
    let rep;
    let choix = nbrealéa(1,2);
    if (choix==1) {rep=a;} else (rep=-a);
    return rep;
}

function rienplus(a) {
    let rep;
    if (a<0) {rep='';} else {rep='+';}
    return rep;
}

function rienmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='';}
    return rep;
}

function plusmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }

function fracsimp(num,denom) {
    let rep;
    let num1;
    let denom1;
    if (denom<0 && num>0) {num1=num; denom1=-denom;}
    if (denom>0 && num>0) {num1=num; denom1=denom;}
    if (denom>0 && num<0) {num1=-num; denom1=denom;}
    if (denom<0 && num<0) {num1=-num; denom1=-denom;}
    return rep = [num1,denom1];
}

function parenthesesgd(a) {
    let rep;
    let pg;
    let pd;
    if (a<0) {pg='(';} else {pg='';}
    if (a<0) {pd=')';} else {pd='';}
    return rep = [pg,pd];
}

function test_réponse(e,f,g,h,i,j,k,l,m,n) {
    let test;
    if (e==j && f==k && g==l && h==m && i==n) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;

}

let enonce = document.getElementById('enonce');
let solution = document.getElementById('solution');
let correctiond = document.getElementById('correctiond');
var valider = document.getElementById('valider');
var solutions = document.getElementById('solutions');
var correction = document.getElementById('correction');
var recommencer = document.getElementById('recommencer');


function genererExercice() {

let inf = nbrealéa(-10,10);
let sup = inf+nbrealéa(1,10);
let a = positifnegatif(nbrealéa(1,9));
let b = positifnegatif(nbrealéa(1,9));
let c = positifnegatif(nbrealéa(1,9));
let signea = rienmoins(a);
let signeb = rienplus(b);
let sb = plusmoins(b);
let signec = rienplus(c);
let fracx3 = simplifierfraction(a,3);
let fracx2 = simplifierfraction(b,2);
let fracx3simp = fracsimp(fracx3[0],fracx3[1])
let fracx2simp = fracsimp(fracx2[0],fracx2[1]);
let pgdinf = parenthesesgd(inf);
let pgdsup = parenthesesgd(sup);


enonce.innerHTML = `Calculer $I=\\displaystyle\\int_{${inf}}^{${sup}} \\left(${a}x^2${signeb}${b}x${signec}${c}\\right) {\\rm d}x$`;
solution.innerHTML = `Solution : `;
correctiond.innerHTML = `$I=\\left[ ${a}\\times\\dfrac{1}{3}x^3${signeb}${b}\\times\\dfrac{1}{2}x^2${signec}${c}x \\right]_{${inf}}^{${sup}}=\\left[${signea}\\dfrac{${fracx3simp[0]}}{${fracx3simp[1]}}x^3${sb}\\dfrac{${fracx2simp[0]}}{${fracx2simp[1]}}x^2${signec}${c}x\\right]_{${inf}}^{${sup}}$<br>
$\\phantom{I}=\\left(${signea} \\dfrac{${fracx3simp[0]}}{${fracx3simp[1]}}\\times ${pgdsup[0]} ${sup} ${pgdsup[1]}^3 ${sb}\\dfrac{${fracx2simp[0]}}{${fracx2simp[1]}}\\times ${pgdsup[0]} ${sup} ${pgdsup[1]}^2${signec}${c}\\times ${pgdsup[0]} ${sup} ${pgdsup[1]} \\right) - \\left(${signea} \\dfrac{${fracx3simp[0]}}{${fracx3simp[1]}}\\times ${pgdinf[0]} ${inf} ${pgdinf[1]}^3 ${sb}\\dfrac{${fracx2simp[0]}}{${fracx2simp[1]}}\\times ${pgdinf[0]} ${inf} ${pgdinf[1]}^2${signec}${c}\\times ${pgdinf[0]} ${inf} ${pgdinf[1]} \\right) $`;

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