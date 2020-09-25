function calculoIMC() {
    var peso = parseFloat(document.getElementById("peso").value);
    var altura = parseFloat(document.getElementById("altura").value);

    var imc = (peso / (altura * altura));

    if (imc < 20) {
        document.write("<h1>Abaixo do peso<h1>");
    }
    else if (imc >= 20 && imc < 25) {
        document.write("<h1>Peso Ideal<h1>");
    }
    else{
        document.write("<h1>Acima do peso<h1>");
    }
}
