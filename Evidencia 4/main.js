window.addEventListener('load', function() {
    /* 
    Desarrollar un programa que permita calcular el área o perímetro de figuras planas
    1. Triángulo
    2. Rectángulo
    3. Cuadrado
    4. Circulo
    */

    let lado = parseInt(prompt("Ingrese la medida del lado del Cuadrado"));
    let area;

    area=(lado*lado)
    document.write(`El Área del Cuadrado es: ` +area)
    
})