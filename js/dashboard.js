async function fetchData() {
  const vessels = await fetch(`${API_BASE}/api/vessels`).then(r => r.json());
  const alerts = await fetch(`${API_BASE}/api/alerts`).then(r => r.json());
  const weather = await fetch(`${API_BASE}/api/weather`).then(r => r.json());

  updateStats(vessels);
  updateMap(vessels);
  updateAlerts(alerts);
  updateWeather(weather);
}

function updateStats(vessels) {
  document.getElementById("total-vessels").textContent = vessels.length;
  document.getElementById("active-vessels").textContent =
    vessels.filter(v => v.status === "active").length;
}

fetchData();
setInterval(fetchData, 10000);
