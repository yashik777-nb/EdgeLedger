var map;
function initMap() {
    const loc = { lat: 17.432050, lng: 78.372660 };
    map = new google.maps.Map(document.querySelector('.map'), {
        center: loc,
        zoom: 8
    });
    const marker = new google.maps.Marker({position: loc, map: map});
}