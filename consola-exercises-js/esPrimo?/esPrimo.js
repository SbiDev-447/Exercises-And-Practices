// Recorremos los números del 2 al 100
for (let n = 2; n <= 100; n++) {
  // Asumimos que n es primo hasta que demostremos lo contrario
  let esPrimo = true;

  // Probamos divisores desde 2 hasta n-1
  for (let divisor = 2; divisor < n; divisor++) {
    if (n % divisor === 0) {
      esPrimo = false; // n NO es primo
      break;
    }
  }

  // Si después de probar todos los divisores sigue siendo true, es primo
  if (esPrimo) {
    console.log(n);
  }
}
