/*
Crea ejemplos de funciones básicas que representen las diferentes posibilidades
del lenguaje: Sin parámetros ni retorno, con uno o varios parámetros, con
retorno...

Comprueba si puedes crear funciones dentro de funciones.
Utiliza algún ejemplo de funciones ya creadas en el lenguaje.

Pon a prueba el concepto de variable LOCAL y GLOBAL.

Debes hacer cout por consola del resultado de todos los ejemplos.
*/

#include <iostream>
#include <ostream>

int sum(int a, int b) {
  int x;
  x = a + b;
  return x;
}

int rest(int a, int b) {
  int x;
  x = a - b;
  return x;
}

int multy(int a, int b) {
  int x;
  x = a * b;
  return x;
}

float divi(float a, float b) {
  if (b == 0) {
    return 0.0f;
  }
  return a / b;
}

int mod(int a, int b) {
  if (b == 0) {
    return 0;
  }
  return a % b;
}

void printConsole() { std::cout << "HOLA" << std::endl; }

int main() {
  int y;
  float w;

  y = sum(18, 24);
  std::cout << "The Result Of Sum Is: " << y << std::endl;
  y = rest(15, 9);
  std::cout << "The Result Of Rest Is: " << y << std::endl;
  y = multy(5, 5);
  std::cout << "The Result Of Multy Is: " << y << std::endl;
  w = divi(15, 9);
  std::cout << "The Result Of Divi Is: " << w << std::endl;
  y = mod(15, 9);
  std::cout << "The Result Of Mod Is: " << y << std::endl;

  std::cout << "Void() Impress: ";
  printConsole();

  return 0;
}
