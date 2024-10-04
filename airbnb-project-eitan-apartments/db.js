const { application } = require('express');
const mongoose = require('mongoose');

const uri = 'mongodb+srv://eshelrony:AirbnbAdminPass123@cluster0.ijwbm.mongodb.net/airbnbDB?retryWrites=true&w=majority&appName=Cluster0';

const connectDB = async () => {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    
    console.log('MongoDB Atlas connected successfully');
    
    const db = mongoose.connection.db;
    const dbName = db.databaseName;
    console.log(`Connected to database: ${dbName}`);

    const collections = await db.listCollections().toArray();
    const allData = {};

    for (let collection of collections) {
      const collectionName = collection.name;

      // Access the collection and get all documents
      const documents = await db.collection(collectionName).find().toArray();
      allData[collectionName] = documents;

    }
    
   // console.log('All data from each collection:', allData);
   // console.log('Collections in the database:');
   // collections.forEach(collection => {
   //   console.log(collection.name); // Print each collection name
   // });
  } catch (err) {
    console.error('Failed to connect to MongoDB Atlas', err);
    process.exit(1);
  }
};


module.exports = connectDB;
