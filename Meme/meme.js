const btn = document.getElementById("btn");
const body = document.getElementById("body");
const loader = document.getElementById("loading");
var resultImg = document.getElementById("img-result");
var title = document.getElementById("title");

const displayLoading = () => {
  body.style.opacity = 0.5;
  loader.classList.add("display");
  setTimeout(() => {
    loader.classList.remove("display");
  }, 10000);
};

const hideLoading = () => {
  body.style.opacity = 1;
  loader.classList.remove("display");
};

const memeGenerator = async () => {
  displayLoading();
  try {
    const response = await axios.get("https://meme-api.com/gimme");
    console.log("ini responese", response);
    const allData = response.data;
    hideLoading();
    resultImg.setAttribute("src", allData.url);
    title.innerHTML = allData.title;
  } catch (error) {
    resultImg.setAttribute("alt", "Something went wrong");
    console.log(error);
    hideLoading();
  }
};

memeGenerator();
btn.addEventListener("click", memeGenerator);
