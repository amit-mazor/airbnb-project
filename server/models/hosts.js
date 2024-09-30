const hosts = [
    {
      "id": 9348398,
      "name": "David Izo",
      "phone": "0525602589",
      "country": "Israel",
      "ownApartments": 12345 // apartment from the apartments list 
    },
    {
      "id": 348395,
      "name": "Nadav Sha",
      "phone": "0545602189",
      "country": "France",
      "ownApartments": 67890 // apartment from the apartments list 
    }
  ]
  
  function getAllHosts() {
    return hosts
  }
  
  function getHost(id) {
    return hosts.filter(host => host.id == id)[0]
  }
  
  function deleteHost(id) {
    const hostToDelete = hosts.findIndex(host => host.id == id)
    if (hostToDelete !== -1) {
      hosts.splice(hostToDelete, 1);
      return true;
    }
    return false;
  }
  
  function newHost(id, name, phone, country, ownApartments) {
    if (name && phone && country && ownApartments) {
      const host = { id, name, phone, country, ownApartments };
      hosts.push(host);
      return true;
    } else {
      console.error('Invalid host data:', { id, name, phone, country, ownApartments });
      return false;
    }
  }
  
  module.exports = {
    getAllHosts,
    getHost,
    deleteHost,
    newHost,
  }