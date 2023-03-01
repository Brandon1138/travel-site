import '../styles/styles.css'
import 'lazysizes'
import MobileMenu from './modules/MobileMenu'
import RevealOnScroll from './modules/RevealOnScroll'
import StickyHeader from './modules/StickyHeader'

new StickyHeader()
new RevealOnScroll(document.querySelectorAll(".feature-item"), 75)
new RevealOnScroll(document.querySelectorAll(".testimonial"), 60)
new MobileMenu();
let modal

document.querySelectorAll(".open-modal").forEach(el => {
  el.addEventListener("click", e => {
    e.preventDefault()
    if (typeof modal == "undefined") {
      import(/* webpackChunkName: "modal" */ './modules/Modal').then(x => {
        modal = new x.default()
        setTimeout(() => modal.openTheModal(), 20)
      }).catch(() => console.log("There was a problem."))
    } else {
      modal.openTheModal()
    }
  })
})

if (module.hot) {
  module.hot.accept()
}

var map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v11",
  center: [0, 0],
  zoom: 2
});

function addMarker(lngLat, popupContent) {
  var marker = new mapboxgl.Marker()
    .setLngLat(lngLat)
    .addTo(map);

  marker.on('click', function() {
    new mapboxgl.Popup()
      .setLngLat(lngLat)
      .setHTML(popupContent)
      .addTo(map);
  });
}

addMarker([151.209900, -33.865143], '<h3>Sydney</h3><p>Experience the iconic Sydney Opera House and Harbour Bridge. Book your trip now!</p>');
addMarker([2.3522, 48.8566], '<h3>Paris</h3><p>Fall in love with the City of Love. Book your trip to Paris today!</p>');
addMarker([-86.8475, 21.1619], '<h3>Cancun</h3><p>Sip on a cocktail, soak up the sun and enjoy the beautiful beaches. Book your Cancun getaway now!</p>');
addMarker([139.6503, 35.6762], '<h3>Tokyo</h3><p>Explore the vibrant city of Tokyo and immerse yourself in Japanese culture. Book your trip to Tokyo today!</p>');
addMarker([100.5018, 13.7563], '<h3>Bangkok</h3><p>Indulge in delicious street food, visit ancient temples, and shop until you drop. Book your trip to Bangkok now!"</p>');
addMarker([12.4964, 41.9028], '<h3>Rome</h3><p>Experience the art, history, and delicious food of Rome. Book your trip to the Eternal City today!</p>');
addMarker([115.1628, -8.3405], '<h3>Bali</h3><p>Relax on the sandy beaches, explore the rice paddies, and find inner peace. Book your trip to Bali now!</p>');
addMarker([4.9041, 52.3676], '<h3>Amsterdam</h3><p>Bike along the canals, visit the museums and coffee shops, and experience the laid-back Dutch culture. Book your trip to Amsterdam today!</p>');
addMarker([-74.0060, 40.7128], '<h3>New York City</h3><p>Explore the city that never sleeps, see the Statue of Liberty, and enjoy the Big Apple\'s nightlife. Book your trip to NYC now!</p>');
addMarker([31.2357, 30.0444], '<h3>Egypt</h3><p>Marvel at the pyramids, cruise down the Nile, and discover the mysteries of Ancient Egypt. Book your trip to Egypt today!</p>');
addMarker([-54.7927, -2.6257], '<h3>Amazon Forest</h3><p>Embark on a jungle adventure, explore the worldz\'s largest rainforest, and see exotic wildlife. Book your Amazon Forest trip now!</p>');
addMarker([147.4380, -18.2871], '<h3>Great Barrier Reef</h3><p>Snorkel or scuba dive and explore one of the seven natural wonders of the world. Book your trip to the Great Barrier Reef today!</p>');
addMarker([-73.0515, -50.4921], '<h3>Perito Moreno</h3><p>Be amazed by the stunning glaciers and beautiful scenery of Patagonia. Book your trip to Perito Moreno now!</p>');

function addMarkerInteractivity(marker, coordinates, name, description) {
  marker.on('click', function() {
    new mapboxgl.Popup()
      .setLngLat(coordinates)
      .setHTML("<h3>" + name + "</h3><p>" + description + "</p>")
      .addTo(map);
  });
}

addMarkerInteractivity(sydneyMarker, [151.209900, -33.865143], "Sydney", "Experience the iconic Sydney Opera House and Harbour Bridge. Book your trip now!")
addMarkerInteractivity(parisMarker, [2.3522, 48.8566], "Paris", "Fall in love with the City of Love. Book your trip to Paris today!")
addMarkerInteractivity(cancunMarker, [-86.8475, 21.1619], "Cancun", "Sip on a cocktail, soak up the sun and enjoy the beautiful beaches. Book your Cancun getaway now!")
addMarkerInteractivity(tokyoMarker, [139.6503, 35.6762], "Tokyo", "Explore the vibrant city of Tokyo and immerse yourself in Japanese culture. Book your trip to Tokyo today!")
addMarkerInteractivity(bangkokMarker, [100.5018, 13.7563], "Bangkok", "Indulge in delicious street food, visit ancient temples, and shop until you drop. Book your trip to Bangkok now!")
addMarkerInteractivity(romeMarker, [12.4964, 41.9028], "Rome", "Experience the art, history, and delicious food of Rome. Book your trip to the Eternal City today!")
addMarkerInteractivity(baliMarker, [115.1628, -8.3405], "Bali", "Relax on the sandy beaches, explore the rice paddies, and find inner peace. Book your trip to Bali now!")
addMarkerInteractivity(amsterdamMarker, [4.9041, 52.3676], "Amsterdam", "Bike along the canals, visit the museums and coffee shops, and experience the laid-back Dutch culture. Book your trip to Amsterdam today!")
addMarkerInteractivity(newyorkcityMarker, [-74.0060, 40.7128], "New York City", "Explore the city that never sleeps, see the Statue of Liberty, and enjoy the Big Apple\'s nightlife. Book your trip to NYC now!")
addMarkerInteractivity(egyptMarker, [31.2357, 30.0444], "Egypt", "Marvel at the pyramids, cruise down the Nile, and discover the mysteries of Ancient Egypt. Book your trip to Egypt today!")
addMarkerInteractivity(amazonMarker, [-54.7927, -2.6257], "Amazon Forest", "Embark on a jungle adventure, explore the worldz\'s largest rainforest, and see exotic wildlife. Book your Amazon Forest trip now!")
addMarkerInteractivity(greatbarrierreefMarker, [147.4380, -18.2871], "Great Barrier Reef", "Snorkel or scuba dive and explore one of the seven natural wonders of the world. Book your trip to the Great Barrier Reef today!")
addMarkerInteractivity(peritomorenoMarker, [-73.0515, -50.4921], "Perito Moreno", "Be amazed by the stunning glaciers and beautiful scenery of Patagonia. Book your trip to Perito Moreno now!")
