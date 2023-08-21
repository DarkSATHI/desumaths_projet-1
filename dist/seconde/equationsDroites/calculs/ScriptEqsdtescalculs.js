function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function nbreouoppose(a) {
    let rep;
    let choix = nbrealéa(1,2);
    if (choix==1) {rep=a;} else {rep=-a;}
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

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

function parenthesesgd(a) {
    let rep;
    let parg;
    let pard;
    if (a<0) {parg='(';pard=')';} else {parg='';pard='';}
    return rep = [parg,pard];
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
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

let  a ,b ,xa ,ya ,xb ,yb ,pgdya ,pgdxa ,ybmya ,xbmxa ,sb ,axa ,opaxa ,sopaxa;

function genererExercice() {

     a = nbreouoppose(nbrealéa(2,10));
     b = nbrealéa(-10,10);
     xa = nbrealéa(-15,15);
     ya = a*xa+b;
     xb = xa+nbreouoppose(nbrealéa(1,10));
     yb = a*xb+b;
     pgdya = parenthesesgd(ya);
     pgdxa = parenthesesgd(xa);
     ybmya = yb-ya;
     xbmxa = xb-xa;
     sb = rienplus(b);
     axa= a*xa;
     opaxa= -axa;
     sopaxa = rienplus(opaxa);
    
       
    
    enonce.innerHTML = `Déterminer l'équation réduite de la droite $d$ passant par les points $A(${xa}~;${ya})$ et $B(${xb}~;~${yb})$.`;
    solution.innerHTML = `$y=${a}x${sb}${b}$`;
    correctiond.innerHTML = `$\\underline{\\text{Coefficient directeur :}}~~a=\\dfrac{y_B-y_A}{x_B-x_A}$<br>
    $a=\\dfrac{${yb}-${pgdya[0]}${ya}${pgdya[1]}}{${xb}-${pgdxa[0]}${xa}${pgdxa[1]}}=\\dfrac{${ybmya}}{${xbmxa}}=${a}$<br>
    $\\underline{\\text{Ordonnée à l'origine :}}$<br>
    $\\begin{array}{lrcrclr} A\\in d~\\text{donc} & y_A & = & ax_A+b & = & ${ya} & \\text{donc :} \\\\
     & & & ${a}\\times ${pgdxa[0]} ${xa} ${pgdxa[1]} +b & = & ${ya} & \\text{donc :} \\\\
     & & & ${axa} + b & = & ${ya} & \\text{donc :} \\\\
     & & & b & = & ${ya} ${sopaxa} ${opaxa} & \\text{et donc :} \\\\
     & & & b & = & ${b} &  \\end{array}$<br>
     $\\underline{\\text{Équation réduite de}~d~:}~~y=${a}x${sb}${b}$`;
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
