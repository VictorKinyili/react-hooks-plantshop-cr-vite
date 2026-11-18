# Plantshop

A React application for browsing and managing a catalog of plants. Users can view available plants, add new plants to the inventory, toggle stock availability, and search for specific plants by name in real time.

## Screenshot

![Plantshop Application](./screenshot.png)

## Features

- **View All Plants (`GET`):** Fetches and displays the complete plant inventory from the local JSON server on initial page load.
- **Add a New Plant (`POST`):** Allows users to submit a controlled form with a plant's name, image URL, and price to add it to the catalog and persist it to the backend.
- **Stock Availability Toggle:** Lets users mark any plant card as `"In Stock"` or `"Out of Stock"` with a single click.
- **Live Plant Search:** Filters the displayed plant list dynamically as the user types into the search bar.

## Technologies Used

- React (`useState`, `useEffect`)
- Vite
- JSON Server (REST API)
- JavaScript (ES6+ Fetch API)

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine.

### Installation & Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com<your-plantshop-repo-name>.git
   ```
2. Navigate to the project directory:
   ```bash
   cd <your-plantshop-repo-name>
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the JSON server backend:
   ```bash
   npm run server
   ```
5. In a separate terminal, start the React development server:
   ```bash
   npm run dev
   ```

### Running Tests

To run the automated test suite:

```bash
npm run test
```
