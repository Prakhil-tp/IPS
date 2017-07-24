(function(window, google) {

    var Mapster = (function() {
        function Mapster(element, options) {

            this.gMap = new google.maps.Map(element, options);
        }

        Mapster.prototype = {

            zoom: function(level) {
                if (level) {
                    this.gMap.setZoom(level);
                } else {
                    return this.gMap.setZoom();
                }
            },
            _on: function(event, callback) {
                var self = this;
                google.maps.event.addListener(this.gMap, event, function(e) {
                    callback.call(self, e);
                });

            },
            _createMarker: function(latitude, longitude) {
                return new google.maps.Marker({
                    position: {
                        lat: latitude,
                        lng: longitude
                    },
                    map: this.gMap,
                    icon: 'map/CarMarker.png',
                    title:'Police'
                })

            },
            addMarker: function(lat, lng) {
                this._createMarker(lat, lng);
            }


        };

        return Mapster;
    }());

    Mapster.create = function(element, options) {
        return new Mapster(element, options);
    }

    window.Mapster = Mapster;
}(window, google));
