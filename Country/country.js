async function getCountryName(code) {
  async function getData(pageNumber) {
    const url =
      "https://jsonmock.hackerrank.com/api/countries?page=" + pageNumber;

    const response = await axios.get(url);
    const data = response.data;

    const currentPage = data.page;
    const totalPages = data.total_pages;

    var resultCountry = null;

    data.data.forEach((country) => {
      if (country.alpha2Code === code) {
        resultCountry = country.name;
      }
    });

    if (!resultCountry && currentPage < totalPages) {
      return await getData(currentPage + 1);
    } else {
      console.log(resultCountry);
      return resultCountry;
    }
  }

  return await getData(0);
}
