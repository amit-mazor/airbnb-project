# ourBnB

**ourBnB** is a web application inspired by Airbnb, where users can browse apartments, leave reviews, and make reservations. Built with **Node.js**, **Express**, and **MongoDB**, it allows users to book apartments, view available listings, and interact with other users. This platform supports both regular users and hosts who can list their apartments.

## Features

- **User Authentication**: Users can register, log in, and manage their accounts.
- **Apartment Listings**: Hosts can list apartments with detailed descriptions, prices, and availability.
- **Booking (Orders)**: Users can book apartments for a specified period.
- **Reviews**: Users can leave ratings and reviews for apartments they've stayed in.
- **Admin Panel**: Admin users can manage apartments, users, orders, and reviews.

## Technologies Used

- **Node.js**: Backend server environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing data (apartments, users, reviews, orders).
- **Mongoose**: ODM (Object Data Modeling) library to interact with MongoDB.
- **JWT (JSON Web Tokens)**: For user authentication and authorization.

## Models

### 1. **User Model**

The User model represents an individual user in the system. A user can be a regular customer, an admin, or a host who can list apartments.

- **Fields:**
  - `username`: String, required, unique.
  - `email`: String, required, unique.
  - `password`: String, required (hashed).
  - `firstName`: String, required.
  - `lastName`: String, required.
  - `profilePicture`: String, optional (URL to profile image).
  - `isHost`: Boolean, default is `false`, indicates if the user is a host.
  - `isAdmin`: Boolean, default is `false`, indicates if the user is an admin.
  - `createdAt`: Date, automatically set to current date.
  - `updatedAt`: Date, automatically set to current date.

### 2. **Apartment Model**

The Apartment model represents a property listed by a host for booking.

- **Fields:**
  - `title`: String, required.
  - `description`: String, required.
  - `price`: Number, required.
  - `host`: ObjectId, reference to the User model (who listed the apartment), required.
  - `imageUrl`: String, required (URL to an image of the apartment).
  - `availableFrom`: Date, required.
  - `availableTo`: Date, required.
  - `location`: Object, contains:
    - `address`: String, required.
    - `city`: String, required.
    - `state`: String, required.
    - `country`: String, required.
    - `zip`: String, required.
    - `coordinates`: Object:
      - `lat`: Number, required.
      - `lng`: Number, required.
  - `amenities`: Array of strings, optional, e.g., ["Wi-Fi", "Pool"].
  - `maxGuests`: Number, required.
  - `bedrooms`: Number, required.
  - `beds`: Number, required.
  - `bathrooms`: Number, required.
  - `createdAt`: Date, automatically set to current date.
  - `updatedAt`: Date, automatically set to current date.

### 3. **Order Model**

The Order model represents a booking made by a user for an apartment.

- **Fields:**
  - `user`: ObjectId, reference to the User model (who made the booking), required.
  - `apartment`: ObjectId, reference to the Apartment model (which is booked), required.
  - `checkIn`: Date, required.
  - `checkOut`: Date, required.
  - `guests`: Number, required (how many guests are included in the booking).
  - `totalPrice`: Number, required.
  - `status`: String, can be one of `active`, `completed`, or `cancelled` (default is `active`).
  - `isHistory`: Boolean, default is `false`, used to track historical bookings.
  - `createdAt`: Date, automatically set to current date.
  - `updatedAt`: Date, automatically set to current date.

### 4. **Review Model**

The Review model represents a review left by a user for an apartment they stayed at.

- **Fields:**
  - `user`: ObjectId, reference to the User model (who left the review), required.
  - `apartment`: ObjectId, reference to the Apartment model (which is being reviewed), required.
  - `rating`: Number, required, between 1 and 5 (inclusive).
  - `comment`: String, required.
  - `createdAt`: Date, automatically set to current date.
  - `updatedAt`: Date, automatically set to current date.
