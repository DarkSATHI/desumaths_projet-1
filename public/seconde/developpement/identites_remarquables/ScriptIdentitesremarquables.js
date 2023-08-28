function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function plusmoins() {
    let choix;
    let result;
    choix = nbrealéa(1, 2);
    if (choix == 1) {
        result = '+';
    } else {
        result = '-';
    }
    return result;
}

function sign1() {
    let sig1;
    sig1 = plusmoins();
    if (sig1 == '+') {
        sig1 = '';
    } else {
        sig1 = '-';
    }
    return sig1;
}


function signe() {
    let a = nbrealéa(1,2);
    let sig;
    if (a==1) {sig='+';} else {sig='-';}
    return sig;
}

function signedeuxiemeparenthese(s1,s2) {
    let reponse;
    if (s1=='+' && s2=='') {reponse='+';}
    else if (s1=='+' && s2=='+') {reponse='+';}
    else if (s1=='-' && s2=='-') {reponse='+';}
    else {reponse='-';}
    return reponse;
}

function unoupasun(a) {
    let rep;
    if (a==1) {rep=``;} else {
        if (a==-1) {rep=`-`;} else {rep=`${a}`;}}
    return rep;
}

function parenthesesgd(a) {
    let rep;
    let parg;
    let pard;
    if (a=='-') {parg='(';pard=')';} else {parg='';pard='';}
    return rep = [parg,pard];
}

let enonce = document.getElementById('enonce');
let solution = document.getElementById('solution');
let correctiond = document.getElementById('correctiond');
let solutions = document.getElementById('solutions');
let correction = document.getElementById('correction');
let recommencer = document.getElementById('recommencer');

let a,a1,b,identite,signe1,pgd,acarre,acarre1,ab2,bcarre,sig1,sig2;

function genererExercice() {

  a = nbrealéa(1, 9);
  a1 = unoupasun(a);
  b = nbrealéa(1, 9);
  identite = nbrealéa(0,2);
  signe1 = sign1();
  pgd = parenthesesgd(signe1);
  acarre = a * a;
  acarre1 = unoupasun(acarre);
  ab2 = 2 * a * b;
  bcarre = b * b;
  sig1 = signedeuxiemeparenthese('+',signe1);
  sig2 = signedeuxiemeparenthese('-',signe1);


let listenonces = [`Développer : $\\left(${signe1} ~ ${a1}x + ${b}\\right)^2$`,
    `Développer : $\\left(${signe1} ~ ${a1}x - ${b}\\right)^2$`,
    `Développer : $\\left(${a1}x + ${b}\\right) \\left(${a1}x - ${b}\\right)$`
]

let listeSolutions = [`Solution : $${acarre1}x^2 ${sig1} ${ab2}x + ${bcarre}$`,
    `Solution : $${acarre1}x^2 ${sig2} ${ab2}x + ${bcarre}$`,
    `Solution : $${acarre1}x^2 - ${bcarre}$`
]

let listeCorrections = [`On va utiliser l'identité remarquable $(a+b)^2=a^2+2ab+b^2$ avec $\\color{blue}{a=${signe1}${a1}x}$ et $\\color{green}{b=${b}}$ : <br><br>
$\\begin{array}{rcl} \\underbrace{\\left(\\color{blue}{${signe1} ~ ${a1}x} + \\color{green}{${b}}\\right)^2}_{(\\color{blue}{a}+\\color{green}{b})^2} & = & \\underbrace{(\\color{blue}{${signe1} ${a1}x})^2}_{\\color{blue}{a}^2} + \\underbrace{2\\times ${pgd[0]}\\color{blue}{${signe1}${a1}x}${pgd[1]} \\times \\color{green}{${b}}}_{2\\color{blue}{a}\\color{green}{b}} + \\underbrace{\\color{green}{${b}}^2}_{\\color{green}{b}^2} \\\\
& = & ${acarre1}x^2 ${sig1} ${ab2}x + ${bcarre} \\end{array}$`,
`On va utiliser l'identité remarquable $(a-b)^2=a^2-2ab+b^2$ avec $\\color{blue}{a=${signe1}${a1}x}$ et $\\color{green}{b=${b}}$ : <br><br>
$\\begin{array}{rcl} \\underbrace{\\left(\\color{blue}{${signe1} ~ ${a1}x} - \\color{green}{${b}}\\right)^2}_{(\\color{blue}{a}-\\color{green}{b})^2}  & = & \\underbrace{(\\color{blue}{${signe1} ${a1}x})^2}_{\\color{blue}{a}^2} - \\underbrace{2\\times ${pgd[0]}\\color{blue}{${signe1}${a1}x}${pgd[1]} \\times \\color{green}{${b}}}_{2\\color{blue}{a}\\color{green}{b}} + \\underbrace{\\color{green}{${b}}^2}_{\\color{green}{b}^2} \\\\
& = & ${acarre1}x^2 ${sig2} ${ab2}x + ${bcarre} \\end{array}$`,
`On va utiliser l'identité remarquable $(a+b)(a-b)=a^2-b^2$ avec $\\color{blue}{a=${signe1}${a1}x}$ et $\\color{green}{b=${b}}$ : <br><br>
$\\begin{array}{rcl} \\underbrace{\\left(\\color{blue}{${a1}x} + \\color{green}{${b}}\\right)}_{\\color{blue}{a}+\\color{green}{b}}~\\underbrace{\\left(\\color{blue}{${a1}x} - \\color{green}{${b}}\\right)}_{\\color{blue}{a}-\\color{green}{b}} & = & \\underbrace{(\\color{blue}{${a1}x})^2}_{\\color{blue}{a}^2} - \\underbrace{\\color{green}{${b}}^2}_{\\color{green}{b}^2} \\\\
& = & ${acarre1}x^2 - ${bcarre} \\end{array}$`
]

enonce.innerHTML = listenonces[identite];
solution.innerHTML = listeSolutions[identite];
correctiond.innerHTML = listeCorrections[identite];

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