let hellsCoor = [-31.5320333,-68.5531141];

const hells = L.map("hells").setView(hellsCoor, 20);
    
L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=7x7gQepFIy7N7U4tRNKS", {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

}).addTo(hells);

const marker = L.marker(hellsCoor).addTo(hells);