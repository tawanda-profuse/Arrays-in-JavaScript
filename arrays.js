// Initially declaring an array:
var africanCountries = ['Zimbabwe', 'Nigeria', 'South Africa', 'Egypt', 'DRC', 'Kenya'];

console.log("My home country is " + africanCountries[0]);

africanCountries.push('Botswana');

console.log(`Here is a list of African countries: ${africanCountries}`); // Prints the new array to the console

africanCountries.pop(); // Removes the last item in the array

africanCountries[3] = 'Ghana'; // Assigns an item at array index 3

console.log(`The list of African countries has a new entry: ${africanCountries}`); // Ghana has been inserted and has an index of 3

// Iterating over our array:
for(var x = 0; x < africanCountries.length; x++){
    console.log(`Country ${x + 1}: ${africanCountries[x]}`); // Prints out each item in the array
}

africanCountries.length; // This will return 6

console.log("There are " + africanCountries.length + " items in the array");

// Declare an empty array:
var internationalUnion = [];

//Declare 3 arrays for the other continents:
var asianCountries = ['Japan', 'China', 'Thailand'];
var northAmerica = ['USA', 'Canada'];
var europeNations = ['France', 'UK', 'Spain'];

// Re-assign the array using the spread operator:

internationalUnion = [...asianCountries, ...northAmerica, ...europeNations, ...africanCountries];

console.log("The countries attending the meeting are " + internationalUnion); // Returns the array with all the countries

internationalUnion.push('Australia');

console.log(`The new list of countries attending: ${internationalUnion}`); // The list now includes Australia