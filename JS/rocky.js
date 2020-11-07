const rockyCoor = [-31.5366408,-68.5278336];

const rocky = L.map("rocky").setView(rockyCoor, 20);
    
L.tileLayer("https://api.maptiler.com/maps/streets/{z}/{x}/{y}.png?key=7x7gQepFIy7N7U4tRNKS", {
    attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>',

}).addTo(rocky);

const marker = L.marker(rockyCoor).addTo(rocky);