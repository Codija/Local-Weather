$(document).ready(function() {
  var lat, long;
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      long = position.coords.longitude;
      var url = 'https://fcc-weather-api.glitch.me';
      var api = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long;
      $.getJSON(api, function(json) {
        var city = json.name;
        var country = json.sys.country;
        var weatherIcon = json.weather[0].icon;
        var weather = json.weather[0].description;
        var tempC = Math.round(json.main.temp);
        var tempF = Math.round((tempC*(9/5)) + 32);
        $('#city').html('Your city is: ' + city);
        $('#country').html('Your country is: ' + country);
        $('#weatherIcon').attr("src", weatherIcon);
        $('#weather-desc').html(weather);
        $('#temp-btn').html(tempC + ' - C');
        $('#temp-btn').click(function() {
          var changeText = $('#temp-btn').html();
          if(changeText) {
            $("#temp-btn").html(tempC + " - C");
          }else {
            $("#temp-btn").html(tempF + " - F");
          }
          if(changeText == tempC + ' - C') {
            $('#temp-btn').html(tempF + ' - F');
          }else {
            $('temp-btn').html(tempC + ' - C');
          }
        });
      })
    });
  }else {
    alert('Sorry, your browser does not allow you to view weather details.');
  }
});