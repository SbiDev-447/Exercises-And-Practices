// Realice un programa que calcule la media de 10 notas, diga cuantas de ellas
// son mayores a la media y cuantas son menores.

#include <iostream>

int main() {
  int notas[] = {12, 20, 13, 14, 15, 8, 3, 18, 20, 10};
  int sum = 0;

  for(int i = 0; i < 10; i++){
  sum += notas[i];
  }

  double media = static_cast<double> (sum)/10;
  
  std::cout << "Media if: " << media << std::endl;

  for(int i = 0; i < 10; i++){

  if (notas[i] < media) {
    std::cout << "The Note: " << notas[i] << " Is minor than media." << std::endl;
  } else {
    std::cout << "The Note: " << notas[i] << " Is mayor than media." << std::endl;
  }
};

  return 0;
}
