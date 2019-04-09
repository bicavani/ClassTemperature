let Temperature = function (celsius) {
  this.celsius = celsius;
  this.convertCToF = function () {
      let fahrenheit = celsius * 9 / 5 + 32;
      return fahrenheit;
  };
  this.convertCToKelvin = function () {
      let kelvin = celsius + 273.15;
      return kelvin;
  }
};
function convert() {
    let celsius = parseInt(document.getElementById("celsius").value);
    let temperature = new Temperature(celsius);
    let fah, kel;
    if (isNaN(celsius)) {
        fah = kel = "";
    }
    else {
        fah = temperature.convertCToF();
        kel = temperature.convertCToKelvin();
    }
    document.getElementById("fahrenheit").innerHTML = fah;
    document.getElementById("kelvin").innerHTML = kel;
}