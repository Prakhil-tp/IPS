(function(window, google, mapster) {

    mapster.MAP_OPTIONS = {

        center: {
            lat: 10.1500,
            lng: 76.2299
        },
        zoom: 15,
        disableDefaultUI: false,
        scrollwheel: true,
        draggable: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        maxZoom: 16,
        minZoom: 14,
        zoomControlOptions: {
            position: google.maps.ControlPosition.LEFT_BOTTOM,
            style: google.maps.ZoomControlStyle.SMALL
        },
        panControlOptions: {
            positon: google.maps.ControlPosition.LEFT_BOTTOM
        }

    };


}(window, google, window.Mapster || (window.Mapster = {})));