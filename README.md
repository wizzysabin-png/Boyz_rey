# E-Commerce Platform

## Project Overview
The E-Commerce Platform is an online shopping solution that allows users to buy and sell products easily and efficiently. It features a user-friendly interface, a secure payment system, and a robust backend to manage product listings and user accounts.

## Tech Stack
- **Frontend:** React, Redux, HTML, CSS
- **Backend:** Node.js, Express
- **Database:** MongoDB
- **Authentication:** JWT (JSON Web Token), OAuth
- **Hosting:** AWS, Heroku
- **Payment Processing:** Stripe, PayPal

## Features
- User registration and login
- Product search and filtering
- Shopping cart functionality
- Secure payment processing
- Admin dashboard for product management
- Order tracking
- User profiles and order history

## Setup Instructions
### Prerequisites
- Install [Node.js](https://nodejs.org/) (version 14 or higher)
- Install [MongoDB](https://www.mongodb.com/) and have it running

### Installation Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/wizzysabin-png/Boyz_rey.git
   cd Boyz_rey
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file in the root directory and add your MongoDB URI and other environment variables:
   ```bash
   MONGODB_URI=<your_mongodb_uri>
   JWT_SECRET=<your_jwt_secret>
   STRIPE_SECRET_KEY=<your_stripe_secret_key>
   ```
4. Start the server:
   ```bash
   npm start
   ```
5. Open your browser and go to `http://localhost:5000` to see the application running!

## License
This project is licensed under the MIT License.

## Acknowledgments
- Thanks to all the contributors for their hard work on this project.