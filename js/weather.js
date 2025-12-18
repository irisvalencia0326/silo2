let weatherChart;

function updateWeather(data) {
  const hourly = data.hourly;

  document.getElementById("current-conditions").innerHTML =
    `<h3>${hourly.temperature_2m[0]}°C</h3>`;

  if (weatherChart) weatherChart.destroy();

  weatherChart = new Chart(
    document.getElementById("weather-chart"),
    {
      type: "line",
      data: {
        labels: hourly.time.slice(0, 24),
        datasets: [{
          label: "Temperature °C",
          data: hourly.temperature_2m.slice(0, 24)
        }]
      }
    }
  );
}
