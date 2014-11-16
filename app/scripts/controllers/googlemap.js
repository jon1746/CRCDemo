app.controller('GoogleMapCtrl', ['$scope', function ($scope) {

    $scope.myMarkers = [];

    $scope.mapOptions = {
      center: new google.maps.LatLng(26.029344, -80.144177),
      zoom: 13,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    $scope.addMarker = function ($event, $params) {
      $scope.myMarkers.push(new google.maps.Marker({
        map: $scope.myMap,
        position: $params[0].latLng
      }));
    };

    $scope.setZoomMessage = function (zoom) {
      $scope.zoomMessage = 'You just zoomed to ' + zoom + '!';
    };

    $scope.openMarkerInfo = function (marker) {
      $scope.currentMarker = marker;
      $scope.currentMarkerLat = marker.getPosition().lat();
      $scope.currentMarkerLng = marker.getPosition().lng();
      $scope.myInfoWindow.open($scope.myMap, marker);
    };

    $scope.setMarkerPosition = function (marker, lat, lng) {
      marker.setPosition(new google.maps.LatLng(lat, lng));
    };
    
    $scope.onTilesLoaded = function () {
    	
         var geoFenceCoords = 
         
         [[
             new google.maps.LatLng(26.052055, -80.135207),
             new google.maps.LatLng(26.051130, -80.128341),
             new google.maps.LatLng(26.041413, -80.127053),
             new google.maps.LatLng(26.044806, -80.134950)
             
          ]
         ];
         
         


    	 var firstLoad = true;
         return function() {
             if (firstLoad)
             {
                 $scope.geoFence = new google.maps.Polygon({
                   paths: geoFenceCoords,
                   strokeWeight: 2,
                   fillOpacity: 0.2
                 });

                 $scope.geoFence.setMap($scope.myMap);
                 firstLoad = false; 
            	 
             }
         }
    	
      }();

}]);