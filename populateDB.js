// populateDB.js
const connectDB = require('./db'); // MongoDB connection function
const Host = require('./server/models/hosts'); // Import Host model
const Apartment = require('./server/models/apartments'); // Import Apartment model

// Connect to MongoDB
connectDB();

async function populateDatabase() {
  try {
    // Create Hosts
    const host1 = new Host({ id: 1, name: 'Rony Eshel', phone: '1234567890', country: 'USA', ownApartments: 101 });
    const host2 = new Host({ id: 2, name: 'Eytan Aronvich', phone: '0987654321', country: 'Canada', ownApartments: 10 });
    const host3 = new Host({ id: 3, name: 'Moran Cohen', phone: '1122334455', country: 'UK', ownApartments: 24 });

    await host1.save();
    await host2.save();
    await host3.save();

    console.log('Hosts created successfully!');

    // Create Apartments with reference to the created hosts
    const apartment1 = new Apartment({ id: 101, country: 'USA', city: 'New York', address: '123 Main St', size: 55, bedrooms: 2, host: host1.name });
    const apartment2 = new Apartment({ id: 102, country: 'Canada', city: 'Toronto', address: '456 Maple Rd', size: 70, bedrooms: 3, host: host2.name });
    const apartment3 = new Apartment({ id: 103, country: 'UK', city: 'London', address: '789 King St', size: 65, bedrooms: 2, host: host3.name });

    await apartment1.save();
    await apartment2.save();
    await apartment3.save();

    console.log('Apartments created successfully!');
  } catch (err) {
    console.error('Failed to populate the database:', err);
  } finally {
    process.exit(); // Close the script once the operation is done
  }
}

// Execute the function to populate the database
populateDatabase();
