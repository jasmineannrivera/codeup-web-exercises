"use strict";
//Making map and setting sichuan point
mapboxgl.accessToken = mapboxToken;
var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11',
    zoom: 2,

    center: [-98.623396, 29.471790]
});


//Popup and Marker
var sichuanPopup = new mapboxgl.Popup()
    .setLngLat([-98.623396, 29.471790])
    .setHTML("Sichuan House")
    .addTo(map);

var sichuanMarker = new mapboxgl.Marker(markerOptions)
    .setLngLat([-98.623396, 29.471790])
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
        "recommendation": "Han Shao Bai"

    },
    {
        "name": "Down on Grayson",
        "recommendation": "Char King Burger"
    },
    {
        "name": "Nama Ramen",
        "recommendation": "Tonkotsu Ramen"
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