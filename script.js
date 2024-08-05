const userString = prompt("Enter a String");

const indexAdder = (string) => {
  let newStr = "";
  for (let i = 0; i < string.length; i++) {
    newStr += i + string[i];
  }
  return newStr.toUpperCase();
};

const result = indexAdder(userString);
alert(result);
