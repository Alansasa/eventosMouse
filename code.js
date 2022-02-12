// Etiqueta canvas - html.
var ID = document.getElementById("areaDibujo");
var lienzo = ID.getContext("2d");

//Etiqueta input type = "color" - html.
var color = document.getElementById("colorUsuario");
color.addEventListener("change", dibujarLineas);

//Etiqueta input texto anchoLineas - html.
var anchoPluma = document.getElementById ("anchoLineas");

//Etiqueta input de boton - html.
var boton = document.getElementById("botoncito");

function eventosBoton(evento, funcion){
    boton.addEventListener(evento, funcion);
}

eventosBoton("click", dibujarMouse);

var botonesMouse = {
    LEFT : 1,
    RIGHT : 2
};

var x, y;
var pluma;
var colorcito;

//Añadiendo evento de Mouse; mouseEvent ().
document.addEventListener("mousemove", dibujarMouse);

// Funcion que haga dibujar cuando sea presionado el click.
function dibujarMouse (evento){
    pluma = anchoPluma.value
    colorcito = color.value;
    /*Condicional por el click izquierdo o derecho
    es presionado para dibujar.*/
    if (evento.buttons === botonesMouse.LEFT || evento.buttons === botonesMouse.RIGHT){
        dibujarLineas(pluma, colorcito, x, y, evento.layerX, evento.layerY);
        x = evento.layerX;
        y = evento.layerY;
    }
}

    dibujarLineas(3, "grey", 0, 0, 300, 0);
    dibujarLineas(3, "grey", 0, 0, 0, 300);
    dibujarLineas(3, "grey", 0, 300, 300, 300);
    dibujarLineas(3, "grey", 300, 300, 300, 0);
    

//Funcion que dibuje lineas;
function dibujarLineas (anchoLineas, color, xi, yi, xf, yf){
    
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = anchoLineas
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}