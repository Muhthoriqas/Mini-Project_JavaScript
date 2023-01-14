const btn = document.querySelector("#btn");
const person = document.querySelector("#person");
const quote = document.querySelector("#quote-result");
const speechBtn = document.querySelector("#speech-btn");
const copyBtn = document.querySelector("#copy-btn");
const twitterBtn = document.querySelector("#twitter-btn");

const loader = document.querySelector("#loading");
const body = document.querySelector("#body");

synth = speechSynthesis;

const displayLoading = () => {
  body.style.opacity = 0.5;
  loader.classList.add("display");
  // to stop loading after 5 second
  setTimeout(() => {
    loader.classList.remove("display");
  }, 5000);
};

const hideLoading = () => {
  body.style.opacity = 1;
  loader.classList.remove("display");
};

async function updateQuote() {
  // Fetch a random quote from the Quotable API
  const response = await fetch("https://api.quotable.io/random");
  const data = await response.json();
  console.log(data);

  if (response.ok) {
    // Update DOM elements
    quote.textContent = data.content;
    person.textContent = data.author;
    hideLoading();
  } else {
    quote.textContent = "An error occured";
    console.log(data);
  }
}
btn.addEventListener("click", displayLoading);

btn.addEventListener("click", updateQuote);

// call updateQuote once when page loads
window.addEventListener("load", updateQuote);

speechBtn.addEventListener("click", () => {
  if (!btn.classList.contains("loading")) {
    let utterance = new SpeechSynthesisUtterance(
      `${quote.innerText} by ${person.innerText}`
    );
    synth.speak(utterance);
    setInterval(() => {
      !synth.speaking
        ? speechBtn.classList.remove("active")
        : speechBtn.classList.add("active");
    }, 10);
  }
});

copyBtn.addEventListener("click", () => {
  alert("Quote Copy to clipboard");
  navigator.clipboard.writeText(quote.innerText);
});

twitterBtn.addEventListener("click", () => {
  let tweetUrl = `https://twitter.com/intent/tweet?url=${quote.innerText}`;
  window.open(tweetUrl, "_blank");
});
