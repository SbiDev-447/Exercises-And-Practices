/* MULTILINE-COMMENT
- Haz todas las formas de **Comentarios** de C++
- Crea una **Variable** y una **Constante**
- Crea variables con todos los tipos de datos **Primitivos**
*/

// ONE-LINE-COMMENT
// Por ultimo imprime por terminal el texto: "¡Hola, soy principiante de C++!"

#include <iostream>

int main() {

  int myNumber = 12; // Este es un número INTEGER

  float myFloat = 12.35f; // Este es un número FLOAT

  // Double es para Números Decimales más precisos que los float type
  double myPI = 3.1415926535;
  double myDouble = myPI;

  char myChar = 'A'; // Este es un caracter unico

  bool isTrue = true; // Este es un boolean: only TRUE or FALSE

  // Libreria Standard de Tipos
  std::string myString =
      "Este es un String"; // Este es una cadena de Caracteres

  std::cout << "Entero: " << myNumber << std::endl;
  std::cout << "Float: " << myFloat << std::endl;
  std::cout << "Double: " << myDouble << std::endl;
  std::cout << "Char: " << myChar << std::endl;
  std::cout << "Boolean: " << isTrue << std::endl;
  std::cout << "String: " << myString << std::endl;

  std::cout << "¡Hola, soy principiante de C++!" << std::endl;

  return 0;
}
