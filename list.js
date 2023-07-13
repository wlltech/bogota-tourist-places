// Create a list of tourist places in Bogotá
let touristPlaces = ["Monserrate", "Gold Museum", "La Candelaria", "Plaza de Bolívar", "Botero Museum"];

// Display the list of tourist places in the console
console.log(touristPlaces);

// Access a specific tourist place in the list
console.log(touristPlaces[2]); // Displays "La Candelaria"

// Modify a tourist place in the list
touristPlaces[3] = "Guadalupe Hill";
console.log(touristPlaces); // Displays ["Monserrate", "Gold Museum", "La Candelaria", "Guadalupe Hill", "Botero Museum"]

// Get the length of the list
console.log(touristPlaces.length); // Displays 5

// Iterate through the list and display each tourist place
for (let i = 0; i < touristPlaces.length; i++) {
  console.log(touristPlaces[i]);
}