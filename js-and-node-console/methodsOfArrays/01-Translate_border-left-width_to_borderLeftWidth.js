function camelize(myString) {
  const camelizeString = myString.split("-");
  const wordEdit = camelizeString.map((word, index) => {
    if (index === 0) {
      return word;
    } else {
      return word[0].toUpperCase() + word.slice(1);
    }
  });
  return wordEdit.join("");
}

console.log(`First: ${camelize("background-color") == "backgroundColor"}`);
console.log(`Second: ${camelize("list-style-image") == "listStyleImage"}`);
console.log(`Third: ${camelize("-webkit-transition") == "WebkitTransition"}`);
