const sekolahGroup = L.layerGroup();
const masjidGroup = L.layerGroup();
const tokoGroup = L.layerGroup();
const puskesmasGroup = L.layerGroup();
const pasarGroup = L.layerGroup();




const iconSekolah = L.icon({
    iconUrl: 'assets/leaflet/images/school.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconmasjid = L.icon({
    iconUrl: 'assets/leaflet/images/mosquee.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconToko = L.icon({
    iconUrl: 'assets/leaflet/images/grocery.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});
const iconpuskesmas = L.icon({
    iconUrl: 'assets/leaflet/images/hospital-building.png',
    iconSize: [50, 50], // size of the icon
    iconAnchor: [22, 54], // point of the icon which will correspond to marker's location
    popupAnchor: [-3, -26] // point from which the popup should open relative to the iconAnchor
});



// ===================== Marker ===========================
var masjid = [
    L.marker([-8.634860040603257, 116.24831333773645], { icon: iconmasjid }).addTo(masjidGroup).bindPopup(` <img src="assets/leaflet/images/masjid2.jpg">`),
    L.marker([-8.637699452006407, 116.25088423507182], { icon: iconmasjid }).addTo(masjidGroup).bindPopup(` <img src="assets/leaflet/images/masjid3.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];

var sekolah = [
    L.marker([-8.635683598242005, 116.24662084181429], { icon: iconSekolah }).addTo(sekolahGroup).bindPopup(` <img src="assets/leaflet/images/sdn1pengenjek.jpg">`),
    L.marker([-8.637621786714925, 116.25263025278868], { icon: iconSekolah }).addTo(sekolahGroup).bindPopup(` <img src="assets/leaflet/images/miberembeng.jpg">`),
    L.marker([-8.637796011670966, 116.25487844034637], { icon: iconSekolah }).addTo(sekolahGroup).bindPopup(` <img src="assets/leaflet/images/sdnberembeng.jpg">`),
];
var toko = [
    L.marker([-8.637802426971408, 116.2420757573796], { icon: iconToko }).addTo(tokoGroup).bindPopup(` <img src="assets/leaflet/images/tokogrosir.jpg">`),
    // Tambahkan Kornat jika lebih dari 1
];
var streets  = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    id: 'mapbox.streets',   
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
});
var satelit = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    id: 'mapbox.streets',
    attribution: 'Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
    });

const map = L.map('map', {
    center: [-8.634173884984019, 116.24921668372933],
    zoom: 13,
    layers: [satelit, sekolahGroup, masjidGroup, tokoGroup, puskesmasGroup]
});


const baseLayers = {
    'streets': streets,
    'satelit': satelit,
};

const overlays = {
    'Sekolah': sekolahGroup,
    'Masjid': masjidGroup,
    'Toko': tokoGroup,
    'puskesmas': puskesmasGroup,
};

const layerControl = L.control.layers(baseLayers, overlays).addTo(map);



//  Menampilkan geojSON
L.geoJSON(gis).addTo(map);