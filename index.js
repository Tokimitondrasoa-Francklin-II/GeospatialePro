
window.addEventListener("load", function(){
  const loader = document.querySelector(".loader");
  loader.className += " hidden";
  
})
// query for hide and show sidebar
$(document).ready(function () {
  $(".sidebar-router").click(function () {
    $(".target").hide();
    $("#sidebar" + $(this).attr("target")).show();
    $(".tab-content").addClass("active");
    $(".navbar-collapse").removeClass("show");
    $(".open-btn").css("visibility", "hidden");
  });
});
// query for active navbar
$(document).on("click", ".nav-container li", function () {
  $(this).addClass("clicked").siblings().removeClass("clicked");
});
// query for Hide and show sub_item
$(document).ready(function () {
  $("#title").click(function () {
    $(this).next(".item").slideToggle();
  });
  $("#title2").click(function () {
    $(this).next(".item").slideToggle();
  });
  $("#title3").click(function () {
    $(this).next(".item").slideToggle();
  });
  $("#title4").click(function () {
    $(this).next(".item").slideToggle();
  });

  $("#title6").click(function () {
    $(this).next(".item").slideToggle();
  });

  //JQuery for toggle subenus
  $(".sub-btn").click(function () {
    $(this).next(".sub-menu").slideToggle();
    $(this).find(".dropdown").toggleClass("rotate");
  });

  // $(".sub-item").click(function () {
  //   $(this).next(".sub-menu2").slideToggle();
  //   $(this).find(".dropdown").toggleClass("rotate");
  // });

  $(parentList).delegate(".sub-item", "click", function (value) {
    var child = $(value.currentTarget.nextElementSibling);

    child.slideToggle(500);
    $(this).find(".dropdown").toggleClass("rotate");
  });

  $(sidebar2).delegate(".sidebar2", "click", function (value) {
    var child = $(value.currentTarget.nextElementSibling);

    child.slideToggle(500);
    // $(this).find(".dropdown").toggleClass("rotate");
  });

  $(sidebar3).delegate(".sidebar3", "click", function (value) {
    var child = $(value.currentTarget.nextElementSibling);
    child.slideToggle(500);
    // $(this).find(".dropdown").toggleClass("rotate");

  });

  
  $(sidebar4).delegate(".sidebar4", "click", function (value) {
    var child = $(value.currentTarget.nextElementSibling);
    child.slideToggle(500);
    // $(this).find(".dropdown").toggleClass("rotate");

  });

   
  $(sidebar6).delegate(".sidebar6", "click", function (value) {
    var child = $(value.currentTarget.nextElementSibling);
    child.slideToggle(500);
    $(this).find(".dropdown").toggleClass("rotate");

  });

  $(sidebar6).delegate(".dropdown6", "click", function (value) {
    var child = $(value.currentTarget.nextElementSibling);
    child.slideToggle(500);
    $(this).find(".dropdown").toggleClass("rotate");

  });



  //Jquery for expand and collapse the sidebar
  $(".open-btn").click(function () {
    $(".tab-content").addClass("active");
    $(".open-btn").css("visibility", "hidden");
  });
  $(".close-btn").click(function () {
    $(".tab-content").removeClass("active");
    $(".open-btn").css("visibility", "visible");
  });
});

$(document).ready(function () {
  $("#open").click(function () {
    $(".upload-Boundary-popup").css("transform", "scale(1)");
  });

  $("#close").click(function () {
    $(".upload-Boundary-popup").css("transform", "scale(0)");
  });

  $("#sethotspot").click(function () {
    $(".upload-Hotspot-Alert-popup").css("transform", "scale(1)");
  });

  $("#closeHotspot").click(function () {
    $(".upload-Hotspot-Alert-popup").css("transform", "scale(0)");
  });
});

// LEFALET MAP

osmUrl = 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			osmAttrib='Map data © <a href="http://openstreetmap.org">OpenStreetMap</a> contributors',		
			OpenStreetMap = new L.TileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib}),
			OpenStreetMiniMap = new L.TileLayer(osmUrl, {maxZoom: 18, attribution: osmAttrib}),


GoogleHybrid = L.tileLayer('http://{s}.google.com/vt?lyrs=s,h&x={x}&y={y}&z={z}',{
    maxZoom: 20,
    subdomains:['mt0','mt1','mt2','mt3']
});

googleSat = L.tileLayer('http://{s}.google.com/vt?lyrs=s&x={x}&y={y}&z={z}',{
        maxZoom: 20,
        subdomains:['mt0','mt1','mt2','mt3']
    });

googleTerrain = L.tileLayer('http://{s}.google.com/vt?lyrs=p&x={x}&y={y}&z={z}',{
      maxZoom: 20,
      subdomains:['mt0','mt1','mt2','mt3']
  });

// /GeoJson

point = L.geoJSON(pt, {
  pointToLayer: function (feature, latlng) {
      return new L.circle(latlng, {
          radius: 3,
          fillColor: 'red',
          color: 'red',
          // weight: 2,
          opacity: 1,
          fillOpacity: 0.1,
      }
      )
  },
 
});


antennaLocation = L.geoJSON(places, {
  pointToLayer: function (feature, latlng) {
    return L.circle(latlng, {
      radius: 90000,
      stroke: true,
      color: "red",
    });
  },
})

cloudMap = L.map("cloud-map", {
  zoomControl: false,
  attributionControl:false
}).setView([-18,45], 4);

googleSat.addTo(cloudMap)


Baselayers ={
    "GoogleMapSat": googleSat,
    "GoogleTerrainMap": googleTerrain,
    "OpenStreetMap": OpenStreetMap,
    "GoogleHibridMap":GoogleHybrid
}

Overlayers ={
  "Point":point,
  "Antenna": antennaLocation
}


// HIDE LANDING PAGE
let rightNavButton = document.querySelector(".rightBtn");

let homePage = document.querySelector(".home-page");

let CouldMapContainer = document.querySelector("#cloud-map.leaflet-container.leaflet-touch-drag");

rightNavButton.addEventListener("click", () => {
  cloudMap.setView([-18, 45], 4)
  homePage.style.display = "block";

});


CouldMapContainer.addEventListener("click", () => {
  homePage.style.display = "none";



  const map = L.map("map", {
    zoomControl: true,
    attributionControl: false,
  }).setView([-18,45], 4);

 
  googleTerrain.addTo(map);
  L.control.mousePosition().addTo(map);
  L.control.layers(Baselayers, Overlayers,{collapsed:true}).addTo(map);
	var miniMap = new L.Control.MiniMap(OpenStreetMiniMap, { toggleDisplay: true , position:'bottomright'}).addTo(map);

;


  
  // drawmap
  drawnItems = L.featureGroup().addTo(map);
  map.addControl(
    new L.Control.Draw({
      edit: {
        featureGroup: drawnItems,
        poly: {
          allowIntersection: false,
        },
      },
      draw: {
        polygon: {
          allowIntersection: false,
          showArea: true,
        },
      },
    })
  );

  // Truncate value based on number of decimals
  var _round = function (num, len) {
    return Math.round(num * Math.pow(10, len)) / Math.pow(10, len);
  };
  // Helper method to format LatLng object (x.xxxxxx, y.yyyyyy)
  var strLatLng = function (latlng) {
    return "(" + _round(latlng.lat, 6) + ", " + _round(latlng.lng, 6) + ")";
  };

  // Generate popup content based on layer type
  // - Returns HTML string, or null if unknown object
  var getPopupContent = function (layer) {
    // Marker - add lat/long
    if (layer instanceof L.Marker || layer instanceof L.CircleMarker) {
      return strLatLng(layer.getLatLng());
      // Circle - lat/long, radius
    } else if (layer instanceof L.Circle) {
      var center = layer.getLatLng(),
        radius = layer.getRadius();
      return (
        "Center: " +
        strLatLng(center) +
        "<br />" +
        "Radius: " +
        _round(radius, 2) +
        " m"
      );
      // Rectangle/Polygon - area
    } else if (layer instanceof L.Polygon) {
      var latlngs = layer._defaultShape
          ? layer._defaultShape()
          : layer.getLatLngs(),
        area = L.GeometryUtil.geodesicArea(latlngs);
      return "Area: " + L.GeometryUtil.readableArea(area, true);
      // Polyline - distance
    } else if (layer instanceof L.Polyline) {
      var latlngs = layer._defaultShape
          ? layer._defaultShape()
          : layer.getLatLngs(),
        distance = 0;
      if (latlngs.length < 2) {
        return "Distance: N/A";
      } else {
        for (var i = 0; i < latlngs.length - 1; i++) {
          distance += latlngs[i].distanceTo(latlngs[i + 1]);
        }
        return "Distance: " + _round(distance, 2) + " m";
      }
    }
    return null;
  };

  // Object created - bind popup to layer, add to feature group
  map.on(L.Draw.Event.CREATED, function (event) {
    var layer = event.layer;
    var content = getPopupContent(layer);
    if (content !== null) {
      layer.bindPopup(content);
    }
    drawnItems.addLayer(layer);
  });

  // Object(s) edited - update popups
  map.on(L.Draw.Event.EDITED, function (event) {
    var layers = event.layers,
      content = null;
    layers.eachLayer(function (layer) {
      content = getPopupContent(layer);
      if (content !== null) {
        layer.setPopupContent(content);
      }
    });
  });
});

