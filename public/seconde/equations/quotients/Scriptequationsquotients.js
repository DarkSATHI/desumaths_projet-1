function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function positifnegatif(a) {
    let rep;
    let choix = nbrealéa(1,2);
    if (choix==1) {rep=a;} else {rep=-a;}
    return rep;
}

function plusmoins() {
    let s = nbrealéa(1,2);
    let sig;
    if (s==1) {sig='+';} else {sig='-';}
    return sig;
}

function rienplus(a) {
    let rep
    if (a<0) {rep='';} else {rep='+';}
    return rep;
}

function rienmoins(a) {
    let rep
    if (a<0) {rep='-';} else {rep='';}
    return rep;
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }


function simply(num,denom) {
    let rep;
    if (denom==1) {rep='='+num;} else {rep='';}
    return rep;
}

function parenthesesgd(a) {
    let rep;
    let parg;
    let pard;
    if (a<0) {parg='(';pard=')';} else {parg='';pard='';}
    return rep=[parg,pard];
  }

function cas(num,denom) {
    let rep;
    if (denom==1) {rep=1;} else {rep=0;}
    return rep;
}

function signefrac(num,denom) {
    let rep;
    if (num>0 && denom>0) {rep='';}
    if (num>0 && denom<0) {rep='-';}
    if (num<0 && denom>0) {rep='-';}
    if (num<0 && denom<0) {rep='';}
    return rep;
}

function fracsimp(num,denom) {
    let rep=[num,denom];
    if (num<0 && denom<0) {rep=[-num,-denom];}
    if (num>0 && denom<0) {rep=[num,-denom];}
    if (num<0 && denom>0) {rep=[-num,denom];}
    return rep; 
}

function solsimpfin(num,denom) {
    let rep;
    let rep1;
    let signe = signefrac(num,denom);
    if (num==0) {signe=``;};
    let frac1 = simplifierfraction(num,denom);
    let frac2 = fracsimp(frac1[0],frac1[1]);
    if (frac2[1]==1) {rep1=[signe,frac2[0]];} else {rep1=[signe,frac2[0],frac2[1]];}
    if (num==frac2[0] && denom==frac2[1] && frac2[1]!=1) {rep=``;}  else {
    if (rep1.length==2) {rep=`=${rep1[0]}${rep1[1]}`;} else {rep=`=${rep1[0]}\\dfrac{${rep1[1]}}{${rep1[2]}}`;}
    }
    return rep;
}

function soluces(num,denom) {
    let rep;
    let rep1;
    let signe = signefrac(num,denom);
    if (num==0) {signe=``;};
    let frac1 = simplifierfraction(num,denom);
    let frac2 = fracsimp(frac1[0],frac1[1]);
    if (frac2[1]==1) {rep1=[signe,frac2[0]];} else {rep1=[signe,frac2[0],frac2[1]];}
    if (rep1.length==2) {rep=`${rep1[0]}${rep1[1]}`;} else {rep=`${rep1[0]}\\dfrac{${rep1[1]}}{${rep1[2]}}`;}
    return rep;
}

let enonce = document.getElementById('enonce');
let solution = document.getElementById('solution');
let correctiond = document.getElementById('correctiond');
let solutions = document.getElementById('solutions');
let correction = document.getElementById('correction');
let recommencer = document.getElementById('recommencer');

let a,b,c,d,e,f,oppd,valint,valintsimp,valintrepsimp,signevalint,simplyvalint,valintsimpegal,valintsimply,signeb,signed,signee,signef,pgda,pgdb,pgdc,pgdd,ce1,de,
signede,af,bf,signebf,opaf,signeopaf,opde,signeopde,coefx,reels,fracsimplifiee,repsimp,signesol,solsimpeagal,solsimp1,k,kenonce;

function genererExercice() {
  a = positifnegatif(nbrealéa(1,10));
  b = nbrealéa(-20,20);
  c = positifnegatif(nbrealéa(1,10));
  d = nbrealéa(-20,20);
  e = positifnegatif(nbrealéa(1,10));
  f = nbrealéa(2,10);
  oppd = -d;
  valint = -d/c;
  valintsimp = simplifierfraction(-d,c);
  valintrepsimp = fracsimp(valintsimp[0],valintsimp[1]);
  signevalint = rienmoins(valint);
  simplyvalint = simply(valintsimp[0],valintsimp[1]);
  valintsimpegal = solsimpfin(-d,c);
  valintsimply = soluces(-d,c);
  signeb = rienplus(b);
  signed = rienplus(d);
  signee = rienplus(e);
  signef = rienplus(f);
  pgda = parenthesesgd(a);
  pgdb = parenthesesgd(b);
  pgdc = parenthesesgd(c);
  pgdd = parenthesesgd(d);
  ce1 = c*e;
  de = d*e;
  signede = rienplus(de);
  af = a*f;
  bf = b*f;
  signebf = rienplus(bf);
  opaf = -af;
  signeopaf = rienplus(opaf);
  opde = -de;
  signeopde = rienplus(opde);
  coefx = ce+opaf;
  reels = bf+opde;
  fracsimplifiee = simplifierfraction(reels,coefx); 
  repsimp = fracsimp(fracsimplifiee[0],fracsimplifiee[1]);
  signesol = rienmoins(reels/coefx);
  solsimpeagal = solsimpfin(reels,coefx);
  solsimp1 = soluces(reels,coefx);
  k = cas(repsimp[0],repsimp[1]);
  kenonce = cas(valintrepsimp[0],valintrepsimp[1]);


let listecorrrections = [`$\\begin{array}{rcrcl} \\dfrac{${a}x${signeb}${b}}{${c}x${signed}${d}}=\\dfrac{${e}}{${f}} & \\iff & ${e}\\times (${c}x${signed}${d}) & = &${f}\\times (${a}x${signeb}${b}) \\left(\\text{produit en croix avec}~x\\neq \\dfrac{${oppd}}{${c}} ${valintsimpegal} \\right) \\\\
& \\iff & ${e}\\times ${pgdc[0]}${c}x${pgdc[1]} ${signee}${e}\\times ${pgdd[0]}${d}${pgdd[1]} & = & ${f}\\times ${pgda[0]}${a}x${pgda[1]} ${signef}${f}\\times ${pgdb[0]}${b}${pgdb[1]} \\\\
& \\iff & ${ce1}x ${signede}${de} & = & ${af}x ${signebf}${bf} \\\\
& \\iff & ${ce1}x ${signeopaf}${opaf}x & = & ${bf} ${signeopde}${opde} \\\\
& \\iff & ${coefx}x & = & ${reels} \\\\
& \\iff & x & = & \\dfrac{${reels}}{${coefx}} ${solsimpeagal} \\end{array}$ `,
`$\\begin{array}{rcrcl} \\dfrac{${a}x${signeb}${b}}{${c}x${signed}${d}}=\\dfrac{${e}}{${f}} & \\iff & ${e}\\times (${c}x${signed}${d}) & = & ${f}\\times (${a}x${signeb}${b}) \\left(\\text{produit en croix avec}~x\\neq \\dfrac{${oppd}}{${c}} ${valintsimpegal} \\right) \\\\
& \\iff & ${e}\\times ${pgdc[0]}${c}x${pgdc[1]} ${signee}${e}\\times ${pgdd[0]}${d}${pgdd[1]} & = & ${f}\\times ${pgda[0]}${a}x${pgda[1]} ${signef}${f}\\times ${pgdb[0]}${b}${pgdb[1]} \\\\
& \\iff & ${ce1}x ${signede}${de} & = & ${af}x ${signebf}${bf} \\\\
& \\iff & ${ce1}x ${signeopaf}${opaf}x & = & ${bf} ${signeopde}${opde} \\\\
& = & \\dfrac{${e}}{${f}}\\iff ${coefx}x & = & ${reels} \\\\
& \\iff & x & = & \\dfrac{${reels}}{${coefx}} ${solsimpeagal} \\end{array}$ `];

let listesolutions = [`Solution : $S=\\left\\{ ${solsimp1} \\right\\} $`,`Solution : $S=\\left\\{ ${solsimp1} \\right\\} $`];

let listenonces = [`Résoudre dans $\\mathbb{R}~\\backslash \\left\\{ ${valintsimply} \\right\\} $ l'équation : $\\dfrac{${a}x${signeb}${b}}{${c}x${signed}${d}}=\\dfrac{${e}}{${f}}$`,
`Résoudre dans $\\mathbb{R}~\\backslash \\left\\{ ${valintsimply} \\right\\} $ l'équation : $\\dfrac{${a}x${signeb}${b}}{${c}x${signed}${d}}=\\dfrac{${e}}{${f}}$`];

enonce.innerHTML = listenonces[kenonce] ;
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