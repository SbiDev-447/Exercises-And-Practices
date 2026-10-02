function anagrama(word1 = "", word2 = "") {
  const test1 = word1.split("").sort().join("");
  const test2 = word2.split("").sort().join("");

  if (test1 == test2) {
    console.log("SON ANAGRAMAS: " + word1 + " y " + word2);
  }
}

/*

split => Convierte el string a un Array de Caracteres

sort => Lo Ordena Alfabeticamente

join => Vuelve a Convertirlo en String

 */

anagrama("nacionalista", "altisonancia");
