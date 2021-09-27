var inputValue = document.querySelector(".inputValue");
var button = document.querySelector(".button");
var cityName = document.querySelector(".cityName");
var desc = document.querySelector(".desc");
var temp = document.querySelector(".temp");

button.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputValue.value +
      "&appid=fa136aa3a82862d24726460164cd0dc0"
  )
    .then((res) => res.json())
    .then((data) => {
      var nameValue = data["name"];
      var tempValue = data["main"]["temp"];
      var descValue = data["weather"][0]["description"];

      cityName.innerHTML = nameValue;
      temp.innerHTML = Math.round((tempValue - 273.15) * 100) / 100 + `°C`;
      desc.innerHTML = descValue;
    })
    .catch((err) => {
      alert("Wrong city name!");
      inputValue.value = "";
      cityName.innerHTML = "";
      desc.innerHTML = "";
      temp.innerHTML = "";
    });
});
