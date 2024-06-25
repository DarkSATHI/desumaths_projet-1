function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function plusmoins() {
    let s = nbrealéa(1,2);
    let sig;
    if (s==1) {sig='+';} else {sig='-';}
    return sig;
}

function rienmoins() {
    let s = nbrealéa(1,2);
    let sig;
    if (s==1) {sig='';} else {sig='-';}
    return sig;
}

function reponse(a,b,c,d,e) {
    let rep;
    if (d=='-') {a=-a;}
    if (e=='-') {b=-b;}
    rep = (c-b)/a;
    return rep;
}

function simplifierfraction(numerateur,denominateur){
    var gcd = function gcd(a,b){
      return b ? gcd(b, a%b) : a;
    };
    gcd = gcd(numerateur,denominateur);
    return [numerateur/gcd, denominateur/gcd];
  }

function numerateursimplifie(a,b,c,d,e) {
    let num;
    let denom;
    let rep;
    if (d=='-') {a=-a;}
    if (e=='-') {b=-b;}
    num = c-b;
    denom = a;
    rep = simplifierfraction(num,denom);
    if (rep[0]<0) {return -rep[0];} else {return rep[0];}
    }

function denominateursimplifie(a,b,c,d,e) {
    let num;
    let denom;
    let rep;
    if (d=='-') {a=-a;}
    if (e=='-') {b=-b;}
    num = c-b;
    denom = a;
    rep = simplifierfraction(num,denom);
    if (rep[1]<0) {return -rep[1];} else {return rep[1];}
    }

function changesigne(a) {
      let signe;
      if (a=='+') {signe='-';} else {signe='+';}
      return signe;
  }

function cplusb(a,b,c) {
    let cetb;
    if (c=='+') {cetb = a+b;} else {cetb = b-a;}
    return cetb;
}

function asigne(a,b) {
    let asig;
    if (b=='-') {asig=-a;} else {asig=a;}
    return asig;
}

function signerep(a) {
    let signreponse;
    if(a<0) {signreponse='-';} else {signreponse='';}
    return signreponse;
}

function repsimple(a,b,c) {
    let rep;
    if (b==1) {rep='='+c+a;} else {rep='';}
    return rep;
}

function num1(s1,n1,d1,s2,n2,d2){
    if(d1==1 & d2 !=1){
        return `$S=\\left\\{${s1} ${n1}~;~${s2} \\dfrac{${numsimp2}}{${denomsimp2}}\\right\\}$`
    }
    if(d1!=1 & d2==1){
        return `$S=\\left\\{${s1} \\dfrac{${n1}}{${d1}}~;~${s2} ${n2}\\right\\}$`
    }
    if(d1!=1 & d2!=1){
        return `$S=\\left\\{${s1} \\dfrac{${n1}}{${d1}}~;~${s2} \\dfrac{${n2}}{${d2}}\\right\\}$`
    }
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

let a,b,c,d,s1,s2,s3,s4,rep1,numsimp1,denomsimp1,rep2,numsimp2,denomsimp2,s_3,cetb1,s_4,cetb2,aavecsigne,bavecsigne,signereponse1,signereponse2,reponsesimplifiee1,
reponsesimplifiee2,sol1,sol2;

function genererExercice() {

  a = nbrealéa(1,15);
  b = nbrealéa(1,20);
  c = nbrealéa(1,15);
  d = nbrealéa(1,20);
  s1 = rienmoins();
  s2 = plusmoins();
  s3 = rienmoins();
  s4 = plusmoins();
  rep1 = reponse(a,b,0,s1,s2);
  numsimp1 = numerateursimplifie(a,b,0,s1,s2);
  denomsimp1 = denominateursimplifie(a,b,0,s1,s2);
  rep2 = reponse(c,d,0,s3,s4);
  numsimp2 = numerateursimplifie(c,d,0,s3,s4);
  denomsimp2 = denominateursimplifie(c,d,0,s3,s4);
  s_3 = changesigne(s2);
  cetb1 = cplusb(b,0,s_3);
  s_4 = changesigne(s4);
  cetb2 = cplusb(d,0,s_4);
  aavecsigne = asigne(a,s1);
  bavecsigne = asigne(c,s3);
  signereponse1 = signerep(rep1);
  signereponse2 = signerep(rep2);
  reponsesimplifiee1 = solsimpfin(cetb1,aavecsigne);
  reponsesimplifiee2 = solsimpfin(cetb2,bavecsigne);
  sol1 = soluces(cetb1,aavecsigne);
  sol2 = soluces(cetb2,bavecsigne);


enonce.innerHTML = `Résoudre dans $\\mathbb{R}$ l'équation : $(${s1} ${a}x ${s2} ${b}) (${s3} ${c}x ${s4} ${d})= 0$`;
solution.innerHTML = `$S=\\left\\{${sol1} ~;~${sol2} \\right\\}$`;
correctiond.innerHTML = `$\\begin{array}{rclcrcl}${s1} ${a}x ${s2} ${b} & = & 0 & \\text{ou} & ${s3} ${c}x ${s4} ${d} & = & 0 \\\\
${s1} ${a}x & = & 0 ${s_3} ${b} = ${cetb1} & \\text{ou} & ${s3} ${c}x & = & 0 ${s_4} ${d} = ${cetb2} \\\\
x & = & \\dfrac{${cetb1}}{${aavecsigne}} ${reponsesimplifiee1} & \\text{ou} & x & = & \\dfrac{${cetb2}}{${bavecsigne}} ${reponsesimplifiee2} \\end{array}$ `;

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