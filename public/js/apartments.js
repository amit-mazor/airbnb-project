// Function to fetch all apartments from the API
async function fetchApartments() {
    try {
        const response = await fetch('/api/apartments'); // This will hit the apartments controller
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const apartments = await response.json(); // Parse the JSON data

        displayApartments(apartments); // Call function to display apartments
    } catch (error) {
        console.error('Error fetching apartments:', error);
        alert('Failed to fetch apartments. Please try again later.');
    }
}

// Function to display apartments on the apartments page
function displayApartments(apartments) {
    const apartmentListDiv = document.getElementById('apartment-list');

    // Clear any existing content
    apartmentListDiv.innerHTML = '';

    // Create apartment cards for each apartment
    apartments.forEach(apartment => {
        const apartmentCard = document.createElement('div');
        apartmentCard.className = 'apartment-card';
        apartmentCard.innerHTML = `
            <h3>${apartment.Name}</h3>
            <p>Location: ${apartment.Location}</p>
            <p>Price: $${apartment.Price}</p>
            <p>Size: ${apartment.Size} sq ft</p>
            <p>Bedrooms: ${apartment.Bedrooms}</p>
        `;
        apartmentListDiv.appendChild(apartmentCard); // Add the card to the container
    });
}

// Call the fetchApartments function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', () => {
    fetchApartments(); // Fetch apartments when the page loads
});
