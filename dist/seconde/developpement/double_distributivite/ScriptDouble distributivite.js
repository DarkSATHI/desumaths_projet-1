// On renvoie un entier aléatoire entre une valeur min (incluse)
// et une valeur max (incluse).
// Attention : si on utilisait Math.round(), on aurait une distribution
// non uniforme !
function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }

function plusmoins() {
    let choix;
    let result;
    choix = nbrealéa(1,2);
    if (choix==1) {result='+';}
    else {result='-';}
    return result;
}

function sign1() {
    let sig1;
    sig1 = plusmoins();
    if (sig1=='+') {sig1='';}
    else {sig1='-';}
    return sig1;
}

function sign3() {
    let sig3;
    sig3 = plusmoins();
    if (sig3=='+') {sig3='';}
    else {sig3='-';}
    return sig3;
}

function abcd() {
    let abdc;
    let a1;
    let b1;
    let c1;
    let d1;
    if (signe1=='') {a1=a;} else {a1=-a;}
    if (signe2=='+') {b1=b;} else {b1=-b;}
    if (signe3=='') {c1=c;} else {c1=-c;}
    if (signe4=='+') {d1=d;} else {d1=-d;}
    abdc=a1*d1+b1*c1;
    return abdc;
}

function repsign1(a,b) {
    let repsigne1;
    if (a==b) {repsigne1='';}
    else {repsigne1='-';}
    return repsigne1; 
}

function repsign (a,b) {
    let repsign;
    if (a=='') {a='+';}
    if (b=='') {b='+';}
    if (a==b) {repsign='+';} else {repsign='-';}
    return repsign;
}

function repsign2() {
    let repsigne2;
    if (coef2>=0) {repsigne2='+';} else {repsigne2='';}
    return repsigne2;
}

function rep_sig2() {
    let rep_sig2;
    if (coef2>=0) {rep_sig2='+';} else {rep_sig2='-';}
    return rep_sig2;
}

function repsign3(a,b) {
    let repsigne3;
    if (a==b) {repsigne3='+';}
    else {repsigne3='-';}
    return repsigne3; 
}

function plus_moins(a) {
    let pm;
    if (a=='') {pm='+';} else {pm='-';}
    return pm;
}

function p_m(a) {
    let p_m;
    if (a=='+') {p_m='';} else {p_m='-';}
    return p_m;
}

/**Retourne la valeur du select selectId*/
function getSelectValue(selectId)
{
	/**On récupère l'élement html <select>*/
	let selectElmt = document.getElementById(selectId);
	/**
	selectElmt.options correspond au tableau des balises <option> du select
	selectElmt.selectedIndex correspond à l'index du tableau options qui est actuellement sélectionné
	*/
	return selectElmt.options[selectElmt.selectedIndex].value;
}

function change_valeur() {
    let select = document.getElementById("signe_1");
    let choice = select.selectedIndex;
    let valeur = select.options[choice].value; 
    let texte =  select.options[choice].text;
    return valeur;
}

function choix() {
    let select = document.getElementById("signe_1").value,
        index = select.selectedIndex;
    let rep = document.getElementById('signe_1').options[document.getElementById('signe_1').selectedIndex].value;
}

function parg(a) {
    let parg;
    if (a=='+') {parg='';} else {parg='(';}
    return parg;
}

function pard(a) {
    let pard;
    if (a=='+') {pard='';} else {pard=')';}
    return pard;
}

function terme1(a,b) {
    let a1;
    if (a=='') {a1=b;} else {a1=-b;}
    return a1;
}

function terme2(a,b) {
    let a1;
    if (a=='+') {a1=b;} else {a1=-b;}
    return a1;
}

function test_réponse(e,f,g,h,i,j,k,l,m,n) {
    let test;
    if (e==j && f==k && g==l && h==m && i==n) {test='Bonne réponse !!';} else {test='Mauvaise réponse';}
    return test;

}

let enonce = document.getElementById('enonce');
  let solution = document.getElementById('solution');
  let correctiond = document.getElementById('correctiond');
  let solutions = document.getElementById('solutions');
  let correction = document.getElementById('correction');
  let recommencer = document.getElementById('recommencer');

  let a, b, c, d, signe1,signe2,signe3,signe4,coef1,coef2,coef3,repsig1,repsig2,rep_sig_2,repsig3,pm1,pm2,pm3,pm_3,pm4,reps2,reps3,ad,bc,parg1,pard1,parg2,pard2,a1,a2,a3,Test;

function genererExercice(){

  a = nbrealéa(1,9);
  b = nbrealéa(1,9);
  c = nbrealéa(1,9);
  d = nbrealéa(1,9);
  signe1 = sign1();
  signe2 = plusmoins();
  signe3 = sign3();
  signe4 = plusmoins();
  coef1 = a*c;
  coef2 = abcd();
  coef3 = b*d;
  repsig1 = repsign1(signe1,signe3);
  repsig2 = repsign2();
  rep_sig_2 = rep_sig2();
  repsig3 = repsign3(signe2,signe4);
  pm1 = plus_moins(signe1);
  pm2 = p_m(signe2);
  pm3 = plus_moins(signe3);
  pm_3 = p_m(pm3);
  pm4 = p_m(signe4);
  reps2 = repsign(signe1,signe4);
  reps3 = repsign(signe2,signe3);
  ad = a*d;
  bc = b*c;
  parg1 = parg(pm3);
  pard1 = pard(pm3);
  parg2 = parg(signe4);
  pard2 = pard(signe4);
  a1 = terme1(repsig1,coef1);
  a2 = terme2(repsig2,coef2);
  a3 = terme2(repsig3,coef3);    
  Test;

  enonce.innerHTML = `Développer : $\\boldsymbol{\\left(${signe1} ~ ${a}x ${signe2} ${b}\\right) \\left(${signe3} ~ ${c}x ${signe4} ${d}\\right)}$`;
  solution.innerHTML = `Solution : $${repsig1} ~ ${coef1}x^2 ${repsig2} ${coef2}x  ${repsig3} ${coef3}$`;
  correctiond.innerHTML = `$\\begin{array}{rcl} \\left(${signe1} ~ ${a}x ${signe2} ${b}\\right) \\left(${signe3} ~ ${c}x ${signe4} ${d}\\right) & = & ${signe1} ~ ${a}x ~ \\times ${parg1} ${pm_3} ~ ${c}x ${pard1} ${pm1} ${a}x ~ \\times ${parg2} ${pm4} ${d} ${pard2} ${signe2} ${b} ~ \\times ${parg1} ${pm_3} ${c}x ${pard1} ${signe2} ${b}~\\times ${parg2} ${pm4} ${d} ${pard2} \\\\
  & = & ${repsig1} ~ ${coef1}x^2 ${reps2} ${ad}x ${reps3} ${bc}x ${repsig3} ${coef3} \\\\
  & = & ${repsig1} ~ ${coef1}x^2 ${repsig2} ${coef2}x  ${repsig3} ${coef3} \\end{array}$`;
}

window.addEventListener('load', function(){
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
    correctiond.innerHTML ;
})

recommencer.addEventListener('click', () => {    
    genererExercice();
    MathJax.Hub.Queue(["Typeset", MathJax.Hub]);
})



