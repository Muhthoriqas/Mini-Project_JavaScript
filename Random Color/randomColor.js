const btn = document.getElementById("btn");
const body = document.getElementById("body");
const result = document.getElementById("result");
btn.addEventListener("click", (e) => {
  const color = "0123456789ABCDEF";

  const colorHex = 6;

  e.preventDefault();
  var hex = "#";

  for (var i = 0; i < colorHex; i++) {
    hex = hex + color[Math.floor(Math.random() * 16)];
  }
  //   newColor = hex
  //     .split("")
  //     .reverse()
  //     .join("")
  //     .substring(0, hex.length - 1);
  //   console.log(newColor);
  // result.style.color = "#" + newColor;

  result.innerHTML = hex;
  body.style.background = hex;
});
