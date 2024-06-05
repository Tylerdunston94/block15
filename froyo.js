
const flavorsInput = prompt("enter some froyo flavors.",
"vanilla,vanilla,vanilla,birthday cake,bannana,bannana");
const flavorsArray = flavorsInput.split(",");

// Make an object to store the count of each flavor
const flavorCount = {};

//  Use forEach to count the occurrences of each flavor 
flavorsArray.forEach(flavor => {
    // Trim the whitespace around the flavor
    const trimmedFlavor = flavor.trim();
    
    // Check if the flavor already exists in the count 
    if (flavorCount[trimmedFlavor]) {
        // If it does, increment the count
        flavorCount[trimmedFlavor]++;
    } else {
        // If it doesn't, initialize the count to 1
        flavorCount[trimmedFlavor] = 1;
    }
});

// Log the counts to the console
console.table(flavorCount);