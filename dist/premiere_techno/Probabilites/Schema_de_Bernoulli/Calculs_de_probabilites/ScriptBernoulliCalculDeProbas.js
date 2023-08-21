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

function plusmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='+';}
    return rep;
}

function rienmoins(a) {
    let rep;
    if (a<0) {rep='-';} else {rep='';}
    return rep;
}

function parenthesegd(a) {
    let rep;
    let pg;
    let pd;
    if (a<0) {pg='(';} else {pg='';}
    if (a<0) {pd=')';} else {pd='';}
    return rep = [pg,pd];
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }

function fracsimp(num,denom) {
    let rep=[num,denom];
    if (num<0 && denom<0) {rep=[-num,-denom];}
    if (num>0 && denom<0) {rep=[num,-denom];}
    if (num<0 && denom>0) {rep=[-num,denom];}
    return rep; 
}

function avecVirgule(nombre){
    let nombreChaine = nombre.toString()
    nombreChaine = nombreChaine.replace('.', ',')
    return nombreChaine
}

function fact(nbr){
    var i, nbr, f = 1;
    for(i = 1; i <= nbr; i++)  
    {
      f = f * i;   // ou f *= i;
    }  
    return f;
  }

function probegalegal(a,b,n,p) {
    let rep=0;
    let coefbin;
    for (i=a;i<=b;i++)
    {coefbin = (fact(n))/(fact(n-i)*fact(i));rep = rep + coefbin*Math.pow(p,i)*Math.pow(1-p,n-i);}
    return rep;
}  

function probinfegal(a,b,n,p) {
    let rep=0;
    let coefbin;
    for (i=a+1;i<=b;i++)
    {coefbin = (fact(n))/(fact(n-i)*fact(i));rep = rep + coefbin*Math.pow(p,i)*Math.pow(1-p,n-i);}
    return rep;
}

function probegalinf(a,b,n,p) {
    let rep=0;
    let coefbin;
    for (i=a;i<=b-1;i++)
    {coefbin = (fact(n))/(fact(n-i)*fact(i));rep = rep + coefbin*Math.pow(p,i)*Math.pow(1-p,n-i);}
    return rep;
}

function probinfinf(a,b,n,p) {
    let rep=0;
    let coefbin;
    for (i=a+1;i<=b-1;i++)
    {coefbin = (fact(n))/(fact(n-i)*fact(i));rep = rep + coefbin*Math.pow(p,i)*Math.pow(1-p,n-i);}
    return rep;
}

function borneinfsup(n) {
    let rep = [];
    let a = nbrealéa(0,n-9);
    let b = n-nbrealéa(0,n-20);
    while (a>= b) {
        b = n-nbrealéa(0,n-20);
    }
    return rep = [a,b];
}

function binomflu(n,p) {
    let listeproba=[]
    let proba = 0;
    let a = 0;
    let b = 0;
    let rep =[];
    for (i=0;i<=n;i++) {coefbin = (fact(n))/(fact(n-i)*fact(i));proba = proba + coefbin*Math.pow(p,i)*Math.pow(1-p,n-i);listeproba.push(proba);}
    let testa;
    let testb = listeproba[0];
    for (i=0;i<=n;i++) {
        testa=listeproba[i];
        if (testa<0.025) {a=a+1;};}
    for (i=0;i<=n;i++) {
            testb=listeproba[i];
            if (testb<0.975) {b=b+1;};}
    return rep = [a,b];
}

function testhyp(a,b,r) {
    let rep;
    if (r>=a && r<= b) {rep=`${retards} $\\in \\left[${ab[0]}~;~${ab[1]}\\right]$ donc l'hypothèse initiale est validée (Julien B. arrive bien en retard à ${ppourcent} % des cours).`;}
    else {rep=`${retards} $\\notin \\left[${ab[0]}~;~${ab[1]}\\right]$ donc l'hypothèse initiale n'est pas validée (Julien B. n'arrive pas en retard à ${ppourcent} % des cours (c'est sans doute bien pire encore !!!)).`;}
    return rep;
}

function reptesthyp(a,b,r) {
    let rep;
    if (r>=a && r<= b) {rep=`L'hypothèse initiale est validée (Julien B. arrive bien en retard à ${ppourcent} % des cours).`;}
    else {rep=`L'hypothèse initiale n'est pas validée (Julien B. n'arrive pas en retard à ${ppourcent} % des cours (c'est sans doute bien pire encore !!!)).`;}
    return rep;
}

let enonce = document.getElementById('enonce');
let correctiond = document.getElementById('correctiond');
var correction = document.getElementById('correction');
var solutions = document.getElementById('solutions');
let solution = document.getElementById('solution');

/*let n,k,kinf,kinfegal,ksup,ksupegal,p,pv,ppourcent,coefbin,repproba,repprobav,p1,nmk,p1v,bornes1,repegalegal,
repegalegalarrondi,borneinfegalegal,bornes2,repinfegal,repeinfegalarrondi,bornes3,repegalinf,repegalinfarrondi,
bornesupegalinf,borneinfegalinf,bornes4,repinfinf,repinfinfarrondi,bornesupinfinf,ab,retards,th,threp,rep3a,rep3av,
kinf1,rep3b,rep3bv,ksupegal1,rep4a,rep4av,rep4b,rep4bv;*/

function genererExercice() {

let n = nbrealéa(10,70);
let k = nbrealéa(1,n);
let kinf = nbrealéa(1,n-1);
let kinfegal =nbrealéa(1,n-1);
let ksup = nbrealéa(1,n-1);
let ksupegal = nbrealéa(1,n-1);
let p = nbrealéa(30,70)/100;
let pv = avecVirgule(p);
let ppourcent = Math.round(p*100);
let coefbin = (fact(n))/(fact(n-k)*fact(k));
let repproba = coefbin*Math.pow(p,k)*Math.pow(1-p,n-k);
let repprobav = avecVirgule(repproba);
let p1 = 1-p;
let nmk = n-k;
let p1v = avecVirgule(Math.round(p1*100)/100);
let bornes1 = borneinfsup(n);
let repegalegal = probegalegal(bornes1[0],bornes1[1],n,p);
let repegalegalarrondi = avecVirgule(Math.round(repegalegal*1000)/1000);
let borneinfegalegal = bornes1[0]-1;
let bornes2 = borneinfsup(n);
let repinfegal = probinfegal(bornes2[0],bornes2[1],n,p);
let repeinfegalarrondi = avecVirgule(Math.round(repinfegal*1000)/1000);
let bornes3 = borneinfsup(n);
let repegalinf = probegalinf(bornes3[0],bornes3[1],n,p);
let repegalinfarrondi = avecVirgule(Math.round(repegalinf*1000)/1000);
let bornesupegalinf = bornes3[1]-1;
let borneinfegalinf = bornes3[0]-1;
let bornes4 = borneinfsup(n);
let repinfinf = probinfinf(bornes4[0],bornes4[1],n,p);
let repinfinfarrondi = avecVirgule(Math.round(repinfinf*1000)/1000);
let bornesupinfinf = bornes4[1]-1;
let ab = binomflu(n,p);
let retards = nbrealéa(1,n-1);
let th = testhyp(ab[0],ab[1],retards);
let threp = reptesthyp(ab[0],ab[1],retards);
let rep3a = probegalegal(0,kinfegal,n,p);
let rep3av = avecVirgule(Math.round(rep3a*1000)/1000);
let kinf1 = kinf-1;
let rep3b = probegalegal(0,kinf1,n,p);
let rep3bv = avecVirgule(Math.round(rep3b*1000)/1000);
let ksupegal1 = ksupegal-1;
let rep4a = 1-probegalegal(0,ksupegal1,n,p);
let rep4av = avecVirgule(Math.round(rep4a*1000)/1000);
let rep4b = 1-probegalegal(0,ksup,n,p);
let rep4bv = avecVirgule(Math.round(rep4b*1000)/1000);


enonce.innerHTML = `Pour s'entraîner en vue d'un tournoi, un joueur de baskets effectue une série de lancers-francs.<br>
Il effectue ${n} lancers-francs consécutifs.<br>
On sait qu'il réussit ses lancers-francs dans ${ppourcent} % des cas.<br>
On note $X$ la variabla aléatoire assocée au nombre de lancers-francs qu'il réussit.<br>
1) Justifier que $X$ suit un schéma de Bernoulli dont on précisera les paramètres.<br>
2) Calculer $P\\left(X=${k}\\right)$<br>
3) a) Calculer $P\\left(X\\leqslant ${kinfegal}\\right)$ (arrondir à $10^{-3}$ près)<br>
$\\phantom{3) }$b) Calculer $P\\left(X< ${kinf}\\right)$ (arrondir à $10^{-3}$ près)<br>
4) a) Calculer $P\\left(X\\geqslant ${ksupegal}\\right)$ (arrondir à $10^{-3}$ près)<br>
$\\phantom{4) }$b) Calculer $P\\left(X> ${ksup}\\right)$ (arrondir à $10^{-3}$ près)<br>
5) Calculer $P\\left(${bornes1[0]}\\leqslant X\\leqslant ${bornes1[1]} \\right)$ (arrondir à $10^{-3}$ près)<br>
6) Calculer $P\\left(${bornes2[0]} < X \\leqslant ${bornes2[1]} \\right)$ (arrondir à $10^{-3}$ près)<br>
7) Calculer $P\\left(${bornes3[0]}\\leqslant X < ${bornes3[1]} \\right)$ (arrondir à $10^{-3}$ près)<br>
8) Calculer $P\\left(${bornes4[0]} < X < ${bornes4[1]} \\right)$ (arrondir à $10^{-3}$ près)<br>`;

solution.innerHTML = `1) $X$ suit un schéma de Bernoulli de paramètres $n=${n}$ et $p=${pv}$<br>
2) $P\\left(X=${k}\\right)\\approx${repprobav}$<br>
3) a) $P\\left(X\\leqslant ${kinfegal}\\right)\\approx ${rep3av}$ <br>
$\\phantom{3) }$b) $P\\left(X< ${kinf}\\right)\\approx ${rep3bv}$ <br>
4) a) $P\\left(X\\geqslant ${ksupegal}\\right)\\approx ${rep4av}$ <br>
$\\phantom{4) }$b) $P\\left(X> ${ksup}\\right)\\approx ${rep4bv} $ <br>
5) $P\\left(${bornes1[0]}\\leqslant X\\leqslant ${bornes1[1]} \\right)\\approx ${repegalegalarrondi}$<br>
6) $P\\left(${bornes2[0]} < X \\leqslant ${bornes2[1]} \\right)\\approx ${repeinfegalarrondi}$<br>
7) $P\\left(${bornes3[0]}\\leqslant X < ${bornes3[1]} \\right)\\approx ${repegalinfarrondi}$<br>
8) $P\\left(${bornes4[0]} < X < ${bornes4[1]} \\right)\\approx ${repinfinfarrondi}$<br>`;

correctiond.innerHTML = `1) $X$ suit un schéma de Bernoulli de paramètres $n=${n}$ et $p=${pv}$ car il y a répétition,<br> de manière indépendante, de la même expérience n'ayant que 2 issues possibles (il réussit son lancer ou il ne le réussit pas).<br>
2) $P\\left(X=${k}\\right)\\approx ${repprobav}$<br>
3) a) $P\\left(X\\leqslant ${kinfegal}\\right)\\approx ${rep3av}$<br>
$\\phantom{3) }$b) $P\\left(X< ${kinf}\\right)=P\\left(X\\leqslant ${kinf1}\\right)\\approx ${rep3bv} $<br>
4) a) $P\\left(X\\geqslant ${ksupegal}\\right)=1-P\\left(X\\leqslant ${ksupegal1} \\right)\\approx ${rep4av} $<br>
$\\phantom{4) }$b) $P\\left(X> ${ksup}\\right)=1-P\\left(X\\leqslant ${ksup}\\right)\\approx ${rep4bv} $<br>
5) $P\\left(${bornes1[0]}\\leqslant X\\leqslant ${bornes1[1]} \\right)=P\\left(X\\leqslant ${bornes1[1]} \\right)-P\\left(X\\leqslant ${borneinfegalegal} \\right)\\approx ${repegalegalarrondi}$<br>
6) $P\\left(${bornes2[0]} < X \\leqslant ${bornes2[1]} \\right)=P\\left(X\\leqslant ${bornes2[1]}\\right)-P\\left(X\\leqslant ${bornes2[0]} \\right)\\approx ${repeinfegalarrondi}$<br>
7) $P\\left(${bornes3[0]}\\leqslant X < ${bornes3[1]} \\right)=P\\left(X\\leqslant ${bornesupegalinf} \\right)-P\\left(X\\leqslant ${borneinfegalinf} \\right)\\approx ${repegalinfarrondi}$<br>
8) $P\\left(${bornes4[0]} < X < ${bornes4[1]} \\right)=P\\left(X\\leqslant ${bornesupinfinf} \\right)-P\\left(X\\leqslant ${bornes4[0]} \\right)\\approx ${repinfinfarrondi}$<br>`

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