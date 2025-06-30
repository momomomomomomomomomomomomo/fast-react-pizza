# Fast React Pizza

This is a pizza ordering application built with React, Redux, and React Router. It allows users to browse a menu, add pizzas to a cart, and place an order.

## Features

- **Browse Menu:** Users can view a list of available pizzas with their ingredients and prices.
- **Add to Cart:** Users can add pizzas to their shopping cart.
- **Update Cart:** Users can increase or decrease the quantity of pizzas in their cart or remove them entirely.
- **Place Order:** Users can place an order by providing their name, phone number, and address.
- **Priority Orders:** Users can mark their orders as a priority for an additional fee.
- **Order Tracking:** Users can view the status of their order and an estimated delivery time.
- **Geolocation:** The application can use the user's geolocation to pre-fill the address form.

## Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Redux:** A predictable state container for JavaScript apps.
- **React Router:** A routing library for React.
- **Tailwind CSS:** A utility-first CSS framework.
- **Vite:** A fast build tool for modern web projects.

## Project Structure

The project is structured into the following directories:

- **`src/features`:** Contains the core features of the application, such as `cart`, `menu`, `order`, and `user`.
- **`src/services`:** Contains the API services for interacting with the backend.
- **`src/ui`:** Contains the UI components used throughout the application.
- **`src/utils`:** Contains utility functions.

## Getting Started

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/your-username/fast-react-pizza.git
cd fast-react-pizza
npm install
```

Then, you can start the development server:

```bash
npm run dev
```

This will start the development server at `http://localhost:5173`.

## Scripts

- **`npm run dev`:** Starts the development server.
- **`npm run build`:** Builds the application for production.
- **`npm run lint`:** Lints the code using ESLint.
- **`npm run preview`:** Starts a local server to preview the production build.