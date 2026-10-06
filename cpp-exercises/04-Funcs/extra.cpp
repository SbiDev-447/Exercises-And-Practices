#include <iostream>

// ==========================================
// 1. FUNCIÓN: Filtro de Múltiplos (Bucle 1)
// ==========================================
void imprimirMultiplos() {
  for (int i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      std::cout << "The Number: " << i << " Is a multiply of 3 and 5"
                << std::endl;
    } else if (i % 5 == 0) {
      std::cout << "The Number: " << i << " Is a multiply of 5" << std::endl;
    } else if (i % 3 == 0) {
      std::cout << "The Number: " << i << " Is a multiply of 3" << std::endl;
    }
  }
}

// ==========================================
// 2. FUNCIÓN: Contador de Ocurrencias (Bucle 2)
// ==========================================
void contarOcurrencias() {
  int a = 0; // Contador para 3 y 5
  int b = 0; // Contador para 5
  int c = 0; // Contador para 3

  for (int i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      a++;
    }
    if (i % 5 == 0) {
      b++;
    }
    if (i % 3 == 0) {
      c++;
    }
  }

  // Imprimimos al final (ya no necesitamos el if(i == 100))
  std::cout << a << std::endl;
  std::cout << b << std::endl;
  std::cout << c << std::endl;
}

// ==========================================
// 3. FUNCIÓN: FizzBuzz (Bucle 3)
// ==========================================
void jugarFizzBuzz() {
  for (int i = 0; i <= 100; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      std::cout << "FizzBuzz" << std::endl;
    } else if (i % 5 == 0) {
      std::cout << "Fizz" << std::endl;
    } else if (i % 3 == 0) {
      std::cout << "Buzz" << std::endl; // Ya corregido a mayúscula
    }
  }
}

// ==========================================
// FUNCIÓN PRINCIPAL (Main)
// ==========================================
int main() {

  std::cout << "----------:Numbers Only:----------" << std::endl;
  imprimirMultiplos(); // Llamamos a la función

  std::cout << "----------:Print Only:----------" << std::endl;
  contarOcurrencias(); // Llamamos a la función

  std::cout << "----------:FIZZBUZZ:----------" << std::endl;
  jugarFizzBuzz(); // Llamamos a la función

  return 0;
}
