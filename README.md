# 🍕 SliceDrop Frontend

A responsive, modern web application for ordering pizzas, drinks, and sides. Built with **Next.js** and **Tailwind CSS**, this frontend features distinct, role-based flows for **Buyers** (customers) and **Sellers** (store managers), designed to seamlessly integrate with a Spring Boot REST API.

---

## Tech Stack

* **Framework:** Next.js 14 (App Router)
* **Library:** React (`useState`, `useEffect` for state management)
* **Styling:** Tailwind CSS (Mobile-first, fully responsive grid architecture)
* **Icons:** Lucide React

---

## Key Features

### Buyer Flow (Customer)
* **Authentication:** Role-based signup and login (`BUYER` role).
* **Live Menu:** Fetches and displays real-time inventory from the backend.
* **Dynamic Search & Filter:** Instant client-side filtering by category or text search.
* **Direct Checkout:** Frictionless, single-item "Buy Now" flow.
* **Order History:** Dashboard to track past purchases and total lifetime spend.

### Seller Flow (Store Manager)
* **Authentication:** Secure routing to the management portal (`SELLER` role).
* **Store Dashboard:** Responsive metrics grid tracking revenue, active orders, and low stock.
* **Inventory Management:** Dedicated, structured form to publish new items (Name, Category, Price, Stock Quantity) directly to the menu.

---

## Folder Structure

```text
src/
├── app/                        
│   ├── layout.jsx              # Global layout and fonts
│   ├── page.jsx                # (/) Buyer Home Page & Live Menu
│   ├── login/page.jsx          # (/login) User Authentication
│   ├── signup/page.jsx         # (/signup) Account Creation
│   ├── checkout/page.jsx       # (/checkout) Direct-Buy Order Screen
│   ├── orders/page.jsx         # (/orders) Buyer Receipt History
│   └── seller/                 
│       ├── dashboard/page.jsx  # Store Hub & Metrics
│       └── add-product/page.jsx# Inventory Publishing Form
│
├── components/                 
│   ├── AuthLayout.jsx          # Split-screen auth template
│   ├── InputField.jsx          # Styled form inputs with icons
│   ├── Header.jsx              # Top navigation bar
│   ├── SearchBar.jsx           # Text filter component
│   ├── CategoryList.jsx        # Horizontal category selector
│   ├── ProductCard.jsx         # E-commerce item card
│   ├── PromoBanner.jsx         # Advertising widget
│   └── BottomNav.jsx           # Mobile sticky navigation
│
└── lib/                        
    └── dummyData.js            # Mock data for UI testing
## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
