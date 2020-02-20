"use strict";
//Making map and setting sichuan point
var sichuan = [-98.623396, 29.471790];
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 2,

    center: sichuan
});


//Popup and Marker
var sichuanPopup = new mapboxgl.Popup()
    .setLngLat(sichuan)
    .setHTML("Sichuan House")
    .addTo(map);

var sichuanMarker = new mapboxgl.Marker(markerOptions)
    .setLngLat(sichuan)
    .setPopup(sichuanPopup)
    .addTo(map);


map.on('mouseenter', sichuanPopup, function() {
    map.getCanvas().style.cursor = 'pointer';
});

// Change it back to a pointer when it leaves.
map.on('mouseleave', sichuanPopup, function() {
    map.getCanvas().style.cursor = '';
});

//Marker Stuff
var markerOptions = {
    color: "pink",


};

//Redraw the map of the above location at zoom levels 5, 15, and 20 (buttons)

document.getElementById('zoom5').addEventListener('click', function() {
    map.zoomTo(5, { duration: 6000 });
});

document.getElementById('zoom15').addEventListener('click', function() {
    map.zoomTo(15, { duration: 6000 });
});

document.getElementById('zoom20').addEventListener('click', function() {
    map.zoomTo(20, { duration: 6000 });
});


// Refactor your code to display at least three of your favorite restaurants with information about each. Create an array of objects with information about each restaurant to accomplish this. Use a .forEach() loop rather than a for loop.



var restaurants = [
    {
        "name": "Sichuan House",
        "recommendation": "Han Shao Bai",
        "address": sichuan

    },
    {
        "name": "Down on Grayson",
        "recommendation": "Char King Burger",
        "address": "303 E Grayson St, San Antonio, TX 78215"
    },
    {
        "name": "Nama Ramen",
        "recommendation": "Tonkotsu Ramen",
        address:  "6565 Babcock Rd Suite 19, San Antonio, TX 78249"
    }
];

var layerList = document.getElementById('menu');
var inputs = layerList.getElementsByTagName('input');

function switchLayer(layer) {
    var layerId = layer.target.id;
    map.setStyle('mapbox://styles/mapbox/' + layerId);
}

for (var i = 0; i < inputs.length; i++) {
    inputs[i].onclick = switchLayer;
}


restaurants.forEach(function (x) {
    geocode(x.address, mapboxToken).then(function (result){
        var popup = new mapboxgl.Popup()
            .setLngLat(result)
            .setHTML(x.name + "<br>" + "Reccommendation: " + x.recommendation)
            .addTo(map);
        new mapboxgl.Marker(markerOptions)
            .setLngLat(result)
            .setPopup(popup)
            .addTo(map);

    })
});

