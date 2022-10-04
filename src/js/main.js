var lat = 47.26370300692381;
var lon = -0.13383160243064476;
var map = null;
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: new google.maps.LatLng(lat, lon), 
        zoom: 15, 
        gestureHandling: "none",
        disableDefaultUI: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP, 
        mapTypeControl: false,
        scrollwheel: true, 
        mapTypeControlOptions: {
            style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR 
        },
        navigationControl: true, 
        navigationControlOptions: {
            style: google.maps.NavigationControlStyle.ZOOM_PAN 
        }
    });
    var marker0 = new google.maps.Marker({
        position: {lat: 47.26370300692381, lng: -0.13383160243064476},
        map: map
    });
}
window.onload = function(){
    initMap(); 
};