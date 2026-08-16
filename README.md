# DrinkHub

A React-based Single Page Application (SPA) for an online drinks e-commerce store with an administrator portal. Built as a group project demonstrating modern frontend development practices including React hooks, client-side routing, context-based state management and CRUD operations via a simulated backend.

## Features

- **Home Page** (`/`) — Landing page with store overview and featured drinks
- **Shop Page** (`/shop`) — Browse all drinks with search and category filtering
- **Cart Page** (`/cart`) — Shopping cart with quantity management and checkout summary
- **Admin Dashboard** (`/admin`) — Manage inventory: view, edit, and delete products
- **Add Product Page** (`/admin/add`) — Form to add new drinks to the catalog
- **Responsive Design** — Mobile-friendly layout with clean, modern styling

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | UI library with functional components |
| **Vite** | Fast development build tool |
| **React Router DOM** | Client-side routing (5 routes) |
| **React Context API** | Global cart state management |
| **JSON Server** | Simulated REST API backend |
| **Vitest** | Unit and integration testing |
| **React Testing Library** | Component testing utilities |

## Project Structure

```
drinkhub-leader-starter/
├── public/
│   └── drink-placeholder.svg       # Product placeholder image
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Navigation with active links & cart count
│   │   ├── admin/
│   │   │   ├── AdminProductCard.jsx
│   │   │   └── ProductForm.jsx
│   │   ├── cart/
│   │   │   └── CartItem.jsx
│   │   └── products/
│   │       ├── CategoryFilter.jsx
│   │       ├── ProductCard.jsx
│   │       ├── ProductList.jsx
│   │       └── SearchBar.jsx
│   ├── context/
│   │   ├── CartContext.jsx         # Cart state: add, remove, quantity, total
│   │   └── ProductContext.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── CartPage.jsx
│   │   ├── AdminDashboard.jsx
│   │   └── AddProductPage.jsx
│   ├── tests/
│   │   ├── setup.jsx               # Test environment setup
│   │   └── App.test.jsx
│   ├── App.jsx                     # Root component with route definitions
│   ├── main.jsx                    # Entry point with BrowserRouter
│   └── index.css                   # Global styles & CSS variables
├── db.json                         # Simulated backend database
├── package.json
├── vite.config.js
└── README.md
```

## Data Model (db.json)

Each product in the catalog contains:

```json
{
  "id": 1,
  "name": "Coca-Cola",
  "brand": "Coca-Cola",
  "category": "Soda",
  "description": "Refreshing carbonated soft drink.",
  "price": 100,
  "image": "/drink-placeholder.svg"
}
```

## Setup Instructions

### Prerequisites
- [Node.js](https://nodejs.org/) (v18 or higher)
- npm (comes with Node.js)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Boboinna/module-3-project.git
   cd module-3-project
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the JSON Server** (simulated backend):
   ```bash
   npm run server
   ```
   The API will be available at `http://localhost:3001`

4. **In a new terminal, start the React development server:**
   ```bash
   npm run dev
   ```
   The app will open at `http://localhost:5173`

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run server` | Start JSON Server on port 3001 |
| `npm test` | Run tests once (CI mode) |
| `npm run test:watch` | Run tests in watch mode |

## API Endpoints (JSON Server)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/products` | List all products |
| GET | `/products/:id` | Get single product |
| POST | `/products` | Add new product |
| PATCH | `/products/:id` | Update product fields |
| DELETE | `/products/:id` | Remove product |

## State Management

### CartContext (`src/context/CartContext.jsx`)
Provides global cart state across the application:
- `cart` — Array of cart items with quantities
- `cartCount` — Total number of items in cart
- `cartTotal` — Total price of all items
- `addToCart(product)` — Add item or increase quantity
- `increaseQuantity(productId)` — Increment item quantity
- `decreaseQuantity(productId)` — Decrement item quantity (removes at 0)
- `removeFromCart(productId)` — Remove item entirely
- `clearCart()` — Empty the cart

## Testing

Tests are written with **Vitest** and **React Testing Library**.

```bash
# Run all tests
npm test

# Run tests in watch mode (for development)
npm run test:watch
```

Test files are located in `src/tests/`.

## React Hooks Used

| Hook | Usage |
|------|-------|
| `useState` | Local component state (forms, search, UI toggles) |
| `useEffect` | Data fetching, side effects |
| `useContext` | Access CartContext in components |
| `useRef` | DOM references (form inputs, scroll positions) |
| `useMemo` | Expensive computations (filtered product lists) |
| `useCallback` | Stable function references for child components |

## Contributors

This project was built collaboratively as part of a module assignment. Each team member contributed to different features and components.

## License
This project is for educational purposes.

This is a React + Vite project for a drinks shop selling sodas, beers and juices.
