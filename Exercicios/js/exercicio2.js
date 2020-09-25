function categoria() {
    var idade = parseInt(document.getElementById("idade").value);

    if (idade >= 5 && idade <= 7) {
        document.write("<h1>CATEGORIA<h1>")
        document.write("<h2>Infantil A<h2>");
    }
    else if (idade >= 8 && idade <= 10) {
        document.write("<h1>CATEGORIA<h1>")
        document.write("<h1>Infantil B<h1>");
    }
    else if (idade >= 11 && idade <= 13) {
        document.write("<h1>CATEGORIA<h1>")
        document.write("<h1>Juvenil A<h1>");
    }
    else if (idade >= 14 && idade <= 17) {
        document.write("<h1>CATEGORIA<h1>")
        document.write("<h1>Juvenil B<h1>");
    }
    else if (idade > 17) {
        document.write("<h1>CATEGORIA<h1>")
        document.write("<h1>Senior<h1>");
    }
    else {
        document.write("<h1>CATEGORIA<h1>")
        document.write("<h1>Sem categoria<h1>");
    }
}
