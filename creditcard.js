// module to obscure a CC number
const obscureNum = (string) => {
  if (string.length >= 12 && string.length <= 16) {
    let lastFour = string.substr(string.length - 4, string.length - 4);
    let newStr = string.slice(0, string.length - 4).replaceAll(/[0-9]/g, "X");
    return `${newStr}${lastFour}`;
  } else {
    return "Invalid Credit Card";
  }
};

module.exports = obscureNum;
