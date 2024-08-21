# Project Title
Restaurant Booking System

## Overview

What is your app? Brief description in a couple of sentences.

The restaurant reservation website allows users to conveniently book tables directly online. It provides an interface for customers to view available time slots, select their preferred dining times, and receive immediate banner notification of their reservations.

### Problem

Why is your app needed? Background information around any pain points or other reasons.

In today's fast-paced world, diners often face challenges in securing reservations at their favorite restaurants due to busy phone lines and manual booking processes. Our app addresses these issues by providing a seamless, user-friendly platform for booking reservations, reducing wait times, and ensuring a smoother customer experience. 

### User Profile

Who will use your app? How will they use it? Any special considerations that your app must take into account.

The primary users of our app are restaurant patrons looking to make reservations quickly and easily. The app is designed to be user-friendly and accessible to a wide audience, including:
* Individuals looking to book tables for personal dining experiences.
* Families or groups wanting to reserve tables in advance.
* Business professionals scheduling lunch or dinner meetings.
* Special considerations include ensuring the app is mobile-friendly for on-the-go access and providing accessibility features for users with disabilities.

### Features

List the functionality that your app will include. These can be written as user stories or descriptions with related details. Do not describe _how_ these features are implemented, only _what_ needs to be implemented.

* User Registration/Login: Users can create an account to manage their reservations.
* Reservation System: Users can select available dates and times for their bookings.
* Real-Time Availability: Users can see real-time updates on available slots.
* Reservation Confirmation: Users receive instant confirmation of their bookings.
* User Profiles: Users can view and manage their reservation history and profile information.

## Implementation

### Tech Stack

List technologies that will be used in your app, including any libraries to save time or provide more functionality. Be sure to research any potential limitations.

* Frontend: React for building the user interface, potential limitaion would be the calendar library.
* Backend: Node.js and Express for server-side logic.
* Database: MySQL for managing reservation data.
* Styling: SASS for advanced styling options.
* API Calls: Axios for handling API requests.

### APIs

List any external sources of data that will be used in your app.


### Sitemap

List the pages of your app with brief descriptions. You can show this visually, or write it out.

* Home Page: Introduction to the restaurant, featured dishes, and navigation to reservation pages.
* Reservation Page: Interface for selecting reservation date and time.
* User Profile Page: User account details and reservation history.
* Contact Page: Restaurant contact information and a contact form.


### Mockups

Provide visuals of your app's screens. You can use tools like Figma or pictures of hand-drawn sketches.

Link to Desktop mockup: https://balsamiq.cloud/stn0n5j/p5nynit/r78C8 (a screenshot is also included in the repo) 

### Data

Describe your data and the relationships between them. You can show this visually using diagrams, or write it out. 

The primary data entities include:

* Users: User details such as name, email, password, and reservation history (TBD).
* Reservations: Details of each reservation, including user ID, date, time, number of guests, and status.
* Tables: Information about available tables, capacity, and booking status.

### Endpoints

List endpoints that your server will implement, including HTTP methods, parameters, and example responses.


* GET /reservations: Retrieve available reservation slots.
* POST /reservations: Book a new reservation.
* PUT /reservations/: Update an existing reservation.
* DELETE /reservations/ : Cancel a reservation.

### Auth

Does your project include any login or user profile functionality? If so, describe how authentication/authorization will be implemented.

> At this point, this would not be included.

## Roadmap

Scope your project as a sprint. Break down the tasks that will need to be completed and map out timeframes for implementation. Think about what you can reasonably complete before the due date. The more detail you provide, the easier it will be to build.

Week 1 (Aug 6): 
* Set up the project environment, and design the database schema.
* Develop the backend API with authentication and reservation endpoints.

Week 2 (Aug 12): 
* Build the frontend interface and integrate it with the backend.
* Implement additional features, test the app, and deploy it to a production server.

## Nice-to-haves

Your project will be marked based on what you committed to in the above document. Under nice-to-haves, you can list any additional features you may complete if you have extra time, or after finishing.