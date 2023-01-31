const targetObject = document.getElementById("targetObject");
const inputHex = document.getElementById("inputHexa");

const ubahLatar = (inputColor) => {
  inputColor = inputHex.value.toLowerCase();

  // Cek CSS Color like red, green, blue , etc
  var s = new Option().style;
  s.color = inputColor;
  var cssColor = s.color == inputColor;

  // Cek Hex Color
  var colorRegex =
    /^(#[0-9A-Fa-f]{3}|#[0-9A-Fa-f]{6}|rgb\(\d{1,3},\s\d{1,3},\s\d{1,3}\)|hsl\(\d{1,3},\s\d{1,3}%,\s\d{1,3}%\))$/;
  var hexColor = colorRegex.test(inputColor);

  cssColor == true || hexColor == true
    ? (targetObject.style.backgroundColor = inputColor)
    : alert("Input is not a Color");
};
