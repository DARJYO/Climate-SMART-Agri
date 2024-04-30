if ('geolocation' in navigator) {
  navigator.geolocation.getCurrentPosition(success, error);
} else {
  console.error("Geolocation is not supported by this browser.");
}

function success(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;

  // Use latitude and longitude to fetch weather data from an API
  // Display the retrieved weather data on the page
  console.log(`User located at: ${latitude}, ${longitude}`);
}

function error(err) {
  console.error("Error getting user location:", err);
}
