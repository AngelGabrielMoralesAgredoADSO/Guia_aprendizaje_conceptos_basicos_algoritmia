window.addEventListener('load', function() {
    /* 
    Desarrollar un programa que permita calcular el área o perímetro de figuras planas
    1. Triángulo
    2. Rectángulo
    3. Cuadrado
    4. Circulo
    */

    let base = parseInt(prompt("Ingrese la Base del Triángulo"));
    let altura = parseInt(prompt("Ingrese la Altura del Triángulo"));
    let area;

    area=(base*altura)/2
    document.write(`El Área del Triángulo es: ` +area)
    
})