const apartments = [
  {
    "id": 12345,
    "country": "Italy",
    "city": "Rome",
    "address": "newTown 5",
    "size": "50",
    "bedrooms": "2",
    "host": "Ron Levi"
  },
  {
    "id": 67890,
    "country": "Israel",
    "city": "Tel Aviv",
    "address": "hashalom 5",
    "size": "50",
    "bedrooms": "3",
    "host": "Nave Cahen"
  }
]

function getAllApartments() {
  return apartments
}

function getApartment(id) {
  return apartments.filter(apartment => apartments.id == id)[0]
}

function deleteApartment (id) {
  const apartmentToDelete = apartments.findIndex(apartment => apartment.id == id)
  if (apartmentToDelete !== -1) {
    apartments.splice(apartmentToDelete, 1);
    return true;
  }
  return false;
}

function newApartment(id, country, city, address, size, bedroom, host) {
  if (country && city && address && size && bedroom && host) {
    const apartment = { id, country, city, address, size, bedroom, host };
    apartments.push(apartment);
    return true;
  } else {
    console.error('Invalid apartment data:', { id, country, city, address, size, bedroom, host });
    return false;
  }
}

module.exports = {
  getAllApartments,
  getApartment,
  deleteApartment,
  newApartment
}