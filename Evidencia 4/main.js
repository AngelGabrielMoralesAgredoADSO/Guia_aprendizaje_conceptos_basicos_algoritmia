window.addEventListener('load', function() {
    /* 
    Desarrollar un programa que permita calcular el área o perímetro de figuras planas
    1. Triángulo
    2. Rectángulo
    3. Cuadrado
    4. Circulo
    */
    let pi = Math.PI;
    let radio = parseInt(prompt("Ingrese el radio del  Circulo"));
    let area;

    area=(pi*Math.pow(radio,2))
    document.write(`El Área del Circulo es: ` +area)
    
})