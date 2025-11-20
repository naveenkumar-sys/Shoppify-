# Fake Store

A modern e-commerce application built with React and Vite that displays products from the Fake Store API with a shopping cart functionality.

## Features

- **Product Listing**: Browse products fetched from the Fake Store API
- **Shopping Cart**: Add/remove items to your cart with a modal interface
- **Responsive Design**: Built with Tailwind CSS for a responsive layout
- **Real-time Cart Counter**: Displays the number of items in the cart on the navbar

## Tech Stack

- **Frontend Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.2
- **Styling**: Tailwind CSS 4.1.17
- **HTTP Client**: Axios 1.13.2
- **Linting**: ESLint with React plugins

## Project Structure

```
src/
├── App.jsx              # Main application component with cart state management
├── main.jsx             # Entry point
├── Components/
│   ├── Navbar.jsx       # Navigation bar with cart counter
│   ├── ProductList.jsx  # Product listing component fetching from API
│   └── Cart.jsx         # Shopping cart modal component
├── App.css              # App styles
└── index.css            # Global styles
```

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Runs the development server using Vite. Open [http://localhost:5173](http://localhost:5173) to view it in your browser.

### Build

```bash
npm run build
```

Creates an optimized production build in the `dist` folder.

### Preview

```bash
npm run preview
```

Preview the production build locally.

### Lint

```bash
npm run lint
```

Run ESLint to check code quality.

## Usage

1. **Browse Products**: The product list automatically loads all products from the Fake Store API on page load
2. **Add to Cart**: Click "Add to cart" button on any product
3. **View Cart**: Click the cart icon in the navbar to open the shopping cart modal
4. **Remove Items**: Remove items from the cart using the remove button in the modal
5. **Close Cart**: Click the X button to close the cart modal

## API Integration

This project uses the [Fake Store API](https://fakestoreapi.com/) to fetch product data.
