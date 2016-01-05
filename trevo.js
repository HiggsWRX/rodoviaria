var map;
var paragemLuis = new google.maps.LatLng(38.572859, -7.910755);
var estacao = new google.maps.LatLng(38.567787, -7.918346);

var carreira21paragem1 = new google.maps.LatLng(38.583720, -7.912567);

function initialize() {
    // Google maps para a carreira 21
    var mapProp = {
        center: new google.maps.LatLng(38.5697999,-7.9149639),
        zoom: 16,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    
    var marker = new google.maps.Marker({
        position: paragemLuis,
        title: "Largo Luis de Camões"
    });
    marker.setMap(map);
    
    var marker = new google.maps.Marker({
        position: estacao,
        title: "Estação de Autocarros"
    });
    marker.setMap(map);
    
    var marker = new google.maps.Marker({
        position: carreira21paragem1,
        title: "Bairro do Granito"
    });
    marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);

$("#modal21mapa").on("shown.bs.modal", function(event) {
    google.maps.event.trigger(map, "resize");
    var bounds = new google.maps.LatLngBounds();
    bounds.extend(estacao);
    bounds.extend(carreira21paragem1);
    bounds.extend(paragemLuis);
    map.fitBounds(bounds);
});