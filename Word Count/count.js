const btn = document.getElementById("btn");
const result1 = document.getElementById("result1");
const result2 = document.getElementById("result2");
const result3 = document.getElementById("result3");
const result4 = document.getElementById("result4");

var input = document.getElementById("word-input");

const countLetterNumber = () => {
  var letterNumber = input.value.replace(/\s/g, "").split("");
  numberCount = 0;
  letterCount = 0;
  console.log(letterNumber);
  for (var chr of letterNumber) {
    isNaN(chr) ? letterCount++ : numberCount++;
  }
  result1.innerHTML = letterCount;
  result2.innerHTML = numberCount;
};

const countSpace = () => {
  var space = input.value;
  var spaceResult = space.split(" ").length - 1;
  result4.innerHTML = spaceResult;
};

const countWords = () => {
  var word = input.value;
  var jawab = word.split(" ").filter(function (n) {
    return n != "";
  }).length;
  result3.innerHTML = jawab;
};

btn.addEventListener("click", countLetterNumber);
btn.addEventListener("click", countWords);
btn.addEventListener("click", countSpace);
