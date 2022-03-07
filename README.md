# bikeville | MERN

Author: Martin I. Lupa Groppelli, January 2022.

Presentational video:

Full-stack MERN E-Commerce. Shopping Cart managed with Redux Toolkit. List of products, product details, Contact info, Registration and Login, Search input with Dropdown Menu and Price filter. Payment area and Order summary as protected routes that can only be accesed by logged users (Use of two routers), Dashboard only accessible for Administrator.

## Repository

https://github.com/MartinLupa/bikeville-mern

## How to use

Replace .env dummy variables.

Navigate to api and client folders and run in both:

```bash
npm install
npm start
```

## Project info

Tested with Node v14.16.1 and npm 6.14.12.

### Front-end | REACT

- useState, useEffect, useContext. useRef.
- Redux | Toolkit.
- React Router v6 | Public and protected routes (Admin access only).
- Use of third party APIs: Leaflet(map on Contact page).
- Form management: Formik, Yup.
- Use of localStorage to maintain user session and shopping cart states.
- SASS.
- Libraries: Material UI, CSS Animate.
- Basic SEO, useSEO, React Helmet.

### Back-end | NODE, EXPRESS, MONGO, MONGOOSE

- REST API made with Node and Express | Full CRUD.
- Payment via Stripe.
- Authentification/verification: Crypto JS, JWT.
- MongoDB, Mongoose.
