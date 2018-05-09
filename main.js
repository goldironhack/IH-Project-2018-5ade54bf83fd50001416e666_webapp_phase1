const GOOGLE_KEY = "AIzaSyAfvKfWwVo8eF8aons3akMI6Fdj0x2CVcw";
const NAMES = "https://data.cityofnewyork.us/api/views/xyye-rtrs/rows.json";
const GEOSHAPES = "http://services5.arcgis.com/GfwWNkhOj9bNBqoJ/arcgis/rest/services/nycd/FeatureServer/0/query?where=1=1&outFields=*&outSR=4326&f=geojson";
const CRIME = "https://data.cityofnewyork.us/api/views/qgea-i56i/rows.json";
const HOUSING = "https://data.cityofnewyork.us/api/views/hg8x-zxpr/rows.json";
const AIR = "https://data.cityofnewyork.us/api/views/c3uy-2p5r/rows.json";

var map;
var center={lat:40.7291, lng:-73.9965};
var directionService;
var directionRenderer;

function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: center
        });

        directionService=new google.maps.DirectionsService();
        directionRenderer=new google.maps.DirectionsRenderer();
}
