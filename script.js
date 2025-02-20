fetch('https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m')
  .then(response => response.json())
  .then(data => {
    console.log(data); // Check the API response in the console
    const temperatures = data.hourly.temperature_2m; // Array of hourly temperatures
    const times = data.hourly.time; // Array of corresponding timestamps

    // Display the first two temperature data points (for example)
    document.getElementById('temperature1').textContent = `${temperatures[0]}°C at ${times[0]}`;
    document.getElementById('temperature2').textContent = `${temperatures[1]}°C at ${times[1]}`;
  })
  .catch(error => console.error('Error:', error));