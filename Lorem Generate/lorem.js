const data = [
  "Dolor consectetur commodo quis non eu cillum sunt do et deserunt do. Irure nulla voluptate officia cillum eiusmod ullamco minim non exercitation. Occaecat cillum incididunt incididunt deserunt aute anim ullamco do ut dolor proident esse sunt. Sint sunt laboris reprehenderit commodo pariatur veniam Lorem est. Velit sunt nisi anim ex fugiat sit et. Quis sit duis voluptate eiusmod magna nisi. Cupidatat nisi sunt consequat ad nisi velit consequat officia amet.",

  "Irure est duis tempor laborum consequat pariatur nulla dolor pariatur. Nostrud ut officia commodo ullamco incididunt nulla adipisicing consequat voluptate aliqua elit. Duis eiusmod velit in consectetur incididunt ea aliqua nisi officia. Velit dolore proident pariatur sint aliquip culpa. Sunt incididunt velit adipisicing quis eu. Aute consectetur qui nostrud velit dolore consectetur est mollit anim eiusmod. Velit nostrud veniam nulla aliquip aliqua.",

  "Qui non magna eiusmod elit. Minim velit anim deserunt cupidatat sit ex tempor pariatur ex occaecat dolore fugiat do ipsum. Aute ad nulla eu dolor et commodo. Id laboris enim nostrud proident in id. Tempor ea dolor nostrud aliqua. Elit deserunt Lorem consectetur in velit do culpa incididunt magna consectetur consectetur exercitation irure ad. Exercitation nostrud sunt labore velit id laborum culpa magna enim.",

  "Do esse fugiat amet duis anim ad sint dolor quis. Et voluptate quis aliquip laboris id dolore culpa ex. Proident ea Lorem enim proident id cillum ea minim officia sunt mollit. Consequat sit ad pariatur deserunt consequat non ipsum excepteur.",

  "Labore labore voluptate duis mollit incididunt non quis adipisicing adipisicing magna minim id enim. In nostrud officia eiusmod in ex consequat laboris nisi. Aliqua laborum commodo dolore anim labore est do. Cillum incididunt laboris incididunt Lorem. Deserunt nisi ea mollit duis elit proident. Veniam commodo dolore incididunt irure excepteur laboris ullamco consequat tempor aliquip velit.",
];

const btn = document.getElementById("btn");
const btnClear = document.getElementById("btn-clear");

const amount = document.getElementById("input-amount");
const resultLorem = document.getElementById("lorem-text");

const result = document.getElementsByClassName("result");

btn.addEventListener("click", (e) => {
  e.preventDefault();
  const value = amount.value;

  let text = data.slice(0, value);
  text = text
    .map((item) => {
      return `<p class="result" align="center">${item}</p>`;
    })
    .join("");
  resultLorem.innerHTML = text;
});

btnClear.addEventListener("click", (e) => {
  e.preventDefault();
  return result.length > 0
    ? (resultLorem.innerHTML = "")
    : (resultLorem.innerHTML = "Generate Lorem First");
});
