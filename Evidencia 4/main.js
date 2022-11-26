window.addEventListener('load', function() {
    /* 
    Desarrollar un programa que permita calcular el área o perímetro de figuras planas
    1. Triángulo
    2. Rectángulo
    3. Cuadrado
    4. Circulo
    */

    let base = parseInt(prompt("Ingrese la Base del Rectángulo"));
    let altura = parseInt(prompt("Ingrese la Altura del Rectángulo"));
    let area;

    area=(base*altura)
    document.write(`El Área del Rectángulo es: ` +area)
    
})