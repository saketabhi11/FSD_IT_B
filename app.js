// app.js

// Dummy data for the ride prices for different services
// Dummy data with placeholder links
const cabPrices = [
    { service: "Ola", price: 15, link: "https://www.olacabs.com/" },
    { service: "Uber", price: 13, link: "https://m.uber.com/ul/?action=setPickup&pickup[latitude]=12.9716&pickup[longitude]=77.5946&dropoff[latitude]=12.9352&dropoff[longitude]=77.6245" },
    { service: "BluSmart", price: 10, link: "https://www.blu.cab/" },
    { service: "Rapido", price: 12, link: "https://rapido.bike/" }
];

// Function to handle the form submission
document.getElementById("cabForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const fromLocation = document.getElementById("fromLocation").value;
    const toLocation = document.getElementById("toLocation").value;

    // Just a placeholder for actual API integration
    if (fromLocation && toLocation) {
        showResults();
    }
});

// Function to display the sorted prices
function showResults() {
    // Sort the dummy data by price
    const sortedPrices = cabPrices.sort((a, b) => a.price - b.price);

    const resultsBody = document.getElementById("resultsBody");
    resultsBody.innerHTML = ""; // Clear previous results

    sortedPrices.forEach(cab => {
        const row = document.createElement("tr");
        
        // Create table cells
        const serviceCell = document.createElement("td");
        const priceCell = document.createElement("td");
        const linkCell = document.createElement("td");
        
        // Fill the cells with data
        serviceCell.textContent = cab.service;
        priceCell.textContent = "$" + cab.price;

        // Create "Book Now" link
        const link = document.createElement("a");
        link.href = cab.link;
        link.textContent = "Book Now";
        link.target = "_blank";
        linkCell.appendChild(link);

        // Append cells to the row
        row.appendChild(serviceCell);
        row.appendChild(priceCell);
        row.appendChild(linkCell);

        // Append the row to the results table
        resultsBody.appendChild(row);
    });

    // Show the results table
    document.getElementById("resultsTable").style.display = "table";
}
