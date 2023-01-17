const result = document.getElementById("card");
result.addEventListener("click", () => {
  navigator.geolocation
    ? navigator.geolocation.getCurrentPosition(onSuccess, onFailure)
    : (result.innerHTML = "Broweser not Support, to detect location");
});

// Api Source Link : https://opencagedata.com/
const onSuccess = async (userPosition) => {
  try {
    let { latitude, longitude } = userPosition.coords;
    let myApi = config.myApi;

    const response = await fetch(
      "https://api.opencagedata.com/geocode/v1/json?q=" +
        latitude +
        "+" +
        longitude +
        "&key=" +
        myApi
    );

    const data = await response.json();
    let allDetails = data.results[0].components;
    let { city, state, country } = allDetails;
    result.innerText = `${city}, ${state}, ${country}`;
  } catch (error) {
    result.innerText = "Something went wrong";
  }
};

const onFailure = (error) => {
  return error.code === 1
    ? (result.innerText = "User Denied")
    : error.code === 2
    ? (result.innerText = "Unknown Location")
    : (result.innerText = "Timeout");
};

// const onSuccess = (userPosition) => {
//   fetch(
//     `https://api.opencagedata.com/geocode/v1/json?q=${latitude}+${longitude}&key=26060a6fec784faab0eb8c0e0ec1edd7`
//   )
//     .then((response) => response.json())
//     .then((response) => {
//       let allDetails = response.results[0].components;
//       console.table(allDetails);
//       let { city, state, country } = allDetails;
//       tes.innerText = `${city}, ${state}, ${country}`;
//     })
//     .catch(() => {
//       tes.innerText = "Something went wrong";
//     });
// };
