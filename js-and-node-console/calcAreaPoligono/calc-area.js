function area(Tipo = "", Base = 0, Altura = 0) {
  let Area = 0;
  if (Tipo == "triangulo" && Base != 0 && Altura != 0) {
    Area = (Base * Altura) / 2;
    return Area;
  } else if (Tipo == "cuadrado" && Base == Altura && Base != 0 && Altura != 0) {
    Area = Base * Altura;
    return Area;
  } else if (Tipo == "rectangulo" && Base != 0 && Altura != 0) {
    Area = Base * Altura;
    return Area;
  }
}

console.log(area("cuadrado", 5, 5));
