function calculoSalario() {
    var horas = parseFloat(document.getElementById("horas").value);
    var salMin = parseFloat(document.getElementById("salMin").value);

    var valorHora = salMin / 2
    var salBruto = horas * valorHora
    var imposto = salBruto * 0.03
    var salReceber = salBruto - imposto

    document.write("<h1>Resultado<h1>")
    document.write("<h2>", "Salário a receber: " + salReceber + "<h2>")
}
