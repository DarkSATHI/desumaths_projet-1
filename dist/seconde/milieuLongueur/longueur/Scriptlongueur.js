function nbrealéa(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function parenthèsesgauchedraoite(a) {
    let rep;
    let pg;
    let pd;
    if (a < 0) { pg = '('; } else { pg = ''; }
    if (a < 0) { pd = ')'; } else { pd = ''; }
    return rep = [pg, pd];
}

function simplificationsignes(a) {
    let rep;
    let gauche;
    if (a < 0) { gauche = '+'; } else { gauche = ''; }
    return rep;
}

function simplifierracine(a) {
    let rep;
    if (a - Math.floor(a) == 0) { rep = a; } else { rep = a - 1; }
    return rep;
}

function simplification(racinesimp, a) {
    let rep;
    let racine;
    if (racinesimp == a) { racine = Math.sqrt(a); }
    if (racinesimp == a) { rep = '=' + racinesimp; } else { rep = ''; }
    return rep;
}

let enonce = document.getElementById('enonce');
let solution = document.getElementById('solution');
let correctiond = document.getElementById('correctiond');
let solutions = document.getElementById('solutions');
let correction = document.getElementById('correction');
let recommencer = document.getElementById('recommencer');


function genererExercice() {
    let xA = nbrealéa(-10, 10);
    let yA = nbrealéa(-10, 10);
    let xB = nbrealéa(-10, 10);
    let yB = nbrealéa(-10, 10);
    let pgd1 = parenthèsesgauchedraoite(xA);
    let pgd2 = parenthèsesgauchedraoite(yA);
    let simp1 = simplificationsignes(xA);
    let simp2 = simplificationsignes(xB);
    let x = xB - xA;
    let y = yB - yA;
    let x2 = x ** 2;
    let y2 = y ** 2;
    let sousracine = x ** 2 + y ** 2;
    let racinesimp = simplifierracine(Math.sqrt(sousracine));
    let simply = simplification(racinesimp, Math.sqrt(sousracine));



    enonce.innerHTML = `Dans un repère orthonormé $\\left(O;\\overrightarrow{i},\\overrightarrow{j}\\right)$ on donne les points $A(${xA}~;${yA})$ et $B(${xB}~;${yB})$. Déterminer la longueur $AB$`;
    solution.innerHTML = `Solution : $AB=\\sqrt{${sousracine}} ${simply}$`;
    correctiond.innerHTML = `$\\begin{array}{rcl} AB & = & \\sqrt{\\left(x_B-x_A\\right)^2+\\left(y_B-y_A\\right)^2} \\\\
& = & \\sqrt{\\left(${xB} - ${pgd1[0]} ${xA} ${pgd1[1]} \\right)^2 + \\left(${yB} - ${pgd2[0]} ${yA} ${pgd2[1]} \\right)^2} \\\\
& = & \\sqrt{(${x})^2+(${y})^2} \\\\
& = & \\sqrt{${x2}+${y2}} \\\\
& = & \\sqrt{${sousracine}} ${simply} \\end{array}$`;
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
