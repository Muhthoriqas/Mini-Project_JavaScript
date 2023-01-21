var inputUser = document.getElementById("county-input");
var resultDisplay = document.getElementById("result");
const btn = document.getElementById("btn");
const body = document.getElementById("body");
const loader = document.getElementById("loading");

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

async function getCountryName() {
  let code = inputUser.value;

  async function getData(pageNumber) {
    displayLoading();
    const url =
      "https://jsonmock.hackerrank.com/api/countries?page=" + pageNumber;

    const response = await axios.get(url);
    const allData = response.data;

    const currentPage = allData.page;
    const totalPages = allData.total_pages;

    var resultCountry = null;

    allData.data.forEach((country) => {
      if (country.alpha2Code.toLowerCase() === code.toLowerCase()) {
        resultCountry = "Country Name: <br /> " + country.name;
      } else if (country.name.toLowerCase() === code.toLowerCase()) {
        resultCountry = "Country Code: <br /> " + country.alpha2Code;
      }
    });

    if (!resultCountry && currentPage <= totalPages) {
      if (currentPage === totalPages && resultCountry === null) {
        resultDisplay.innerHTML = "Can't Find Country";
        hideLoading();
      } else {
        return await getData(currentPage + 1);
      }
    } else {
      hideLoading();
      resultDisplay.innerHTML = resultCountry;
    }
  }

  return await getData(0);
}

btn.addEventListener("click", getCountryName);
