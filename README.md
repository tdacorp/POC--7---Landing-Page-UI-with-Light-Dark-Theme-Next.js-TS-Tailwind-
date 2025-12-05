# POC--7---Landing-Page-UI-with-Light-Dark-Theme-Next.js-TS-Tailwind-
 A responsive, mobile-first restaurant UI built with Next.js (App Router), TypeScript, Tailwind CSS, and Light/Dark Theme Context.
Includes menu browsing, category filtering, and a fully functional cart with quantity support.

🚀 Overview

This project demonstrates a clean and modern restaurant interface with:

🌓 Light/Dark Theme Toggle using Context API

📱 Mobile-First Responsive UI

🍔 Dynamic Menu Filtering

🛒 Cart Panel with Quantity & Price Calculation

⚡ Fast & scalable architecture using Next.js App Router

🏗️ Tech Stack

Next.js (App Router) → Routing, layouts & component-based UI

TypeScript → Strong typing & safer code

Tailwind CSS → Utility-first styling

Context API → Global theme + cart state

Image Optimization → Next/Image for better performance

🧩 Architecture & Decisions
1. Next.js App Router

- Easy layout control

- client components

- Fast rendering & routing

2. TypeScript

- Better maintainability

- Type-safe menu data and cart logic

3. Tailwind CSS

- Fully responsive with mobile-first approach

4. Theme Context

- Light & Dark mode

- Applied globally using context provider

5. Mobile-First Design

- Scales smoothly from small screens → tablets → desktops

🎨 UI Components
1️⃣ TopBar + Navbar

- TopBar :- number, contact, social icons, Theme toggle

- Navbar :- Home, about, menu, contact, cart

2️⃣ Hero Section

- Headline + CTA

- Mobile-first design

3️⃣ Browse Our Menu

- Includes:- Four categories: Breakfast, Main Dishes, Drinks, Desserts

- Category selector buttons

- Active category highlighting

- Menu items with:-Image, Name, Description, Price, Add to Cart button

4️⃣ Testimonials Section

- Customer reviews

- Responsive layout

5️⃣ Footer

- Contact, social links, copyright

Features

- Menu auto-filters based on selected category

- Add-to-cart action on every item

🛒 Cart System
- Cart Panel Includes:
✔ List of added items
✔ Item name
✔ Item price
✔ Increase/Decrease item quantity
✔ Remove item
✔ Total price calculation
✔ Smooth responsive drawer

📱 Responsiveness

- Designed for all devices:- Mobile (primary), Tablet, Desktop

- Tested for consistent UI in both light and dark modes.

🌗 Dark & Light Theme

- Global ThemeContext

- Toggle in Navbar

- Theme persists across components

Tailwind supports dark mode via dark: classes

### Added new features ###
**Book A Table**

Fields: Date, Time, Name, Phone, Total Person

Validates all fields

Saves data to Local Storage in JSON format

Shows success notification

Resets form after submission

Fully responsive

**Contact Us**

Fields: Name, Email, Subject, Message

Validates all fields

Saves data to Local Storage

Shows success notification

Resets form after submission

Fully responsive

