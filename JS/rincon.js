const rinconCoor = [-31.5378549,-68.5502726]

const rincon = L.map("rincon").setView(rinconCoor, 20);
    
L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=7x7gQepFIy7N7U4tRNKS", {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

}).addTo(rincon);

const marker = L.marker(rinconCoor).addTo(rincon);