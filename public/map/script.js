(function(window, mapster) {

    // map options

    var options = mapster.MAP_OPTIONS,
        element = document.getElementById("map7"),
        // map
        map = Mapster.create(element, options);
    //map.zoom(18);
    //  map._on('click', function(e) {
    //     alert('click');
    //     console.log(e);
    //     console.log(this);
    //  });
    map.addMarker(10.1500, 76.2299);
    map.addMarker(10.1512, 76.2350);
    map.addMarker(10.1460, 76.2220);
    map.addMarker(10.1480, 76.2180);
    map.addMarker(10.1560, 76.2460);
    map.addMarker(10.1600, 76.2160);

}(window, window.Mapster || (window.Mapster = {})));
