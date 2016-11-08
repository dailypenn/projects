// Smooth anchor scrolling
$('a').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    return false;
});

L.mapbox.accessToken = 'pk.eyJ1IjoiZHB3ZWJkZXYiLCJhIjoiY2lrYTdvZnU0MGpiOXYwa3BwbjA0bGJrciJ9.5wK50SNw_NQaODLWOHOboA';
var map = L.mapbox.map('map', 'mapbox.light', {attributionControl: false, infoControl: true}).setView([39.951, -75.192], 14);
var styleLayer = L.mapbox.styleLayer('mapbox://styles/dpwebdev/ciuxcndkc00fl2js5nxo7jzt2').addTo(map);
var pinLayer = L.mapbox.featureLayer().addTo(map);
$("#pollLoc").on("click", function(e) {
  getLocation();
})

String.prototype.titleCase = function () {
    return this.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
};

$("#address").keydown(function(event) {
  if (event.keyCode == 13) {
    getLocation();
  }
});

function getLocation() {
  pinLayer.clearLayers();
  var htmlAddr = $("#address").val().split(' ').join('+');
  // First put their address on the map
  $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?address="+htmlAddr.split(' ').join('+'), function(data) {
    var homeLat = data.results[0].geometry.location.lat;
    var homeLon = data.results[0].geometry.location.lng;
    L.marker([homeLat, homeLon], {
      icon: L.mapbox.marker.icon({
        'marker-size': 'small',
        'marker-symbol': 'lodging',
        'marker-color': '#aa1e22'
      })
    }).bindPopup('Your Home')
      .addTo(pinLayer);
  }).error(function(){
    alert("Uh oh, we couldn't find your home. Try being more specific.")
  });

  // then get their pollign place
  $.getJSON("https://www.googleapis.com/civicinfo/v2/voterinfo?address=" + htmlAddr + "&electionId=5000&fields=normalizedInput%2CpollingLocations&key=AIzaSyAgx76dxL-fDfCK8IMw5qv8-_9wbfYvf1o", function( data ) {

    var pollingPlace = data.pollingLocations[0].address;
    var pollAddr = pollingPlace.line1 + pollingPlace.city + ", " + pollingPlace.state;
    pollAddr = pollAddr.replace("&", "AND");

    // geocode polling place location and place on map
    $.getJSON("http://maps.googleapis.com/maps/api/geocode/json?address="+pollAddr.split(' ').join('+'), function(data) {
      var lat = data.results[0].geometry.location.lat;
      var lon = data.results[0].geometry.location.lng;
      L.marker([lat, lon], {
        icon: L.mapbox.marker.icon({
          'marker-size': 'large',
          'marker-symbol': 'polling-place',
          'marker-color': '#8fd7f2'
        })
      }).bindPopup('<b>'+  pollingPlace.locationName.titleCase() +'</b><br>' + pollingPlace.line1.titleCase() + "<br>")
        .addTo(pinLayer);
      map.setView([lat, lon], 15);
    })
  }).error(function(){
    alert("We can't find your polling place! Try again, or visit your local board's website for more information.")
  });

}