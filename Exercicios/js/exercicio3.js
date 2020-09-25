function calculoReajuste() {
    var salario = parseFloat(document.getElementById("salario").value);

    var reajuste;

    if (salario < 1000) {
        reajuste = salario + (salario * 0.15)
        document.write("<h1>", 'Novo salário: ' + reajuste + "<h1>");
    }
    else if (salario >= 1000 && salario <= 1500) {
        reajuste = salario + (salario * 0.10)
        document.write("<h1>", 'Novo salário: ' + reajuste + "<h1>");
    }
    else if (salario > 1500) {
        reajuste = salario + (salario * 0.05)
        document.write("<h1>", 'Novo salário: ' + reajuste + "<h1>");
    }
    else {
        document.write("<h1>Salário inválido<h1>");
    }
}
