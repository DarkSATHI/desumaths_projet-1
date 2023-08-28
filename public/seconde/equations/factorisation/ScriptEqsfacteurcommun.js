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

function signe() {
    let a = nbrealéa(1,2);
    let sig;
    if (a==1) {sig='+';} else {sig='-';}
    return sig;
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

function fracoupasfrac(num,denom) {
    let rep;
    if (denom==1) {rep=`${num}`;} else {rep=`\\dfrac{${num}}{${denom}}`;}
    return rep;
}

function simpfracmax(num,denom){
    let rep;
    let frac1 = simplifierfraction(num,denom);
    let frac2 = fracsimp(frac1[0],frac1[1]);
    let frac3 = fracoupasfrac(frac2[0],frac2[1]);
    return rep = frac3;
}

function impo(denom) {
    let rep;
    if (denom==0) {rep='impossible';} else {rep='';}
    return rep;
}

function valabs(a) {
    let rep;
    if (a<0) {rep=-a;} else {rep=a;}
    return rep;
}

function unoupasun(a) {
    let rep;
    if (a==1) {rep=``;} else {
        if (a==-1) {rep=`-`;} else {rep=`${a}`;}}
    return rep;
}

function repfrac(num1,denom1,num2,denom2,signe) {
    let rep;
    if (num1==num2 && denom1==denom2) {rep=``;} else {rep=`=${signe}\\dfrac{${num2}}{${denom2}}`;}
    return rep;
}

function changesigne(s,nbre) {
    let rep;
    if (s=='-') {rep=-nbre;} else {rep=nbre;}
    return rep;
}

function paszerox(a,s) {
    let rep = nbreouoppose(nbrealéa(1,10));
    let b;
    if (s=='-') {b=-rep;} else {b=rep;}  
    while (a+b==0) {rep=nbreouoppose(nbrealéa(1,10));if (s=='-') {b=-rep;} else {b=rep;};}
    return rep;
}

function repfrac(num1,denom1,num2,denom2,signe) {
    let rep;
    if (num1==num2 && denom1==denom2) {rep=``;} else {rep=`=${signe}\\dfrac{${num2}}{${denom2}}`;}
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

function changeoupas(signe) {
    let rep;
    if (signe=='-') {rep=['','','-'];} else {rep=['ne','pas','+'];}
    return rep;
}

let enonce = document.getElementById('enonce');
let solution = document.getElementById('solution');
let correctiond = document.getElementById('correctiond');
let solutions = document.getElementById('solutions');
let correction = document.getElementById('correction');
let recommencer = document.getElementById('recommencer');

let a,aun,b,sb,c,cun,d,sd,signeentreparentheses,e,eun,f,sf,e2,se2,e2un,f2,sf2,somx,somxun,somreels,ssomreels,opb,opsomreels,sol1,sol2,soluce1,soluce21,negoupasneg;

function genererExercice() {

  a = nbreouoppose(nbrealéa(1,10));
  aun = unoupasun(a);
  b = nbreouoppose(nbrealéa(1,10));
  sb = rienplus(b);
  c = nbreouoppose(nbrealéa(1,10));
  cun = unoupasun(c);
  d = nbreouoppose(nbrealéa(1,10));
  sd = rienplus(d);
  signeentreparentheses = signe();
  e = paszerox(c,signeentreparentheses);
  eun = unoupasun(e);
  f = nbreouoppose(nbrealéa(1,10));
  sf = rienplus(f);
  e2 = changesigne(signeentreparentheses,e);
  se2 = rienplus(e2);
  e2un = unoupasun(e2);
  f2 = changesigne(signeentreparentheses,f);
  sf2 = rienplus(f2);
  somx = c+e2;
  somxun = unoupasun(somx);
  somreels = d+f2;
  ssomreels = rienplus(somreels);
  opb = -b;
  opsomreels = -somreels;
  sol1 = solsimpfin(opb,a);
  sol2 = solsimpfin(opsomreels,somx);
  soluce1 = soluces(opb,a);
  soluce21 = soluces(opsomreels,somx);
  negoupasneg = changeoupas(signeentreparentheses);



enonce.innerHTML = `Résoudre dans $\\mathbb{R}$ l'équation : $(${aun} x ${sb} ${b}) (${cun} x ${sd} ${d}) ${signeentreparentheses} (${aun} x ${sb} ${b}) (${eun} x ${sf} ${f}) = 0$`;
solution.innerHTML = `$S=\\left\\{${soluce1}~;${soluce21} \\right\\} $`;
correctiond.innerHTML = `$\\begin{array}{lrcl}
& \\underbrace{(${aun} x ${sb} ${b})}_{facteur~commun} (${cun} x ${sd} ${d}) ${signeentreparentheses} \\underbrace{(${aun} x ${sb} ${b})}_{facteur~commun} (${eun} x ${sf} ${f}) & = & 0 \\\\
\\iff & \\underbrace{(${aun} x ${sb} ${b})}_{facteur~commun} \\left[ ${cun} x ${sd} ${d} ${signeentreparentheses} (${eun} x ${sf} ${f}) \\right] & = & 0
\\end{array}$<br><br>
On ${negoupasneg[0]} change ${negoupasneg[1]} les signes à l'intérieur des parenthèses situées dans les crochets car elles sont précédées du signe "$${negoupasneg[2]}$".<br><br>
$\\begin{array}{lrcl}\\iff & (${aun} x ${sb} ${b}) (${cun} x ${sd} ${d} ${se2} ${e2un}x${sf2}${f2}) & = & 0 \\\\
\\iff & (${aun} x ${sb} ${b}) (${somxun}x${ssomreels}${somreels}) & = & 0 
\\end{array}$
<br><br>
$\\begin{array}{rclcrcl}
\\iff & ${aun} x ${sb} ${b} & = & 0 & \\text{ou} & ${somxun}x${ssomreels}${somreels} & = & 0 \\\\
\\iff & ${aun}x & = & ${opb} & \\text{ou} & ${somxun}x & = & ${opsomreels} \\\\
\\iff & x & = & \\dfrac{${opb}}{${a}}${sol1} & \\text{ou} & x & = & \\dfrac{${opsomreels}}{${somx}}${sol2}
\\end{array}$<br><br>
$S=\\left\\{${soluce1}~;${soluce21} \\right\\}$`;

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