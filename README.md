# YazzFoods - Tailwind CSS Tutorial

Welcome to **YazzFoods**, a project built to demonstrate the power of utility-first CSS using **Tailwind CSS**. This repository serves as a step-by-step tutorial for building a modern, responsive food delivery or restaurant front-end.

## 🚀 Features

* **Utility-First Styling:** Built entirely with Tailwind CSS classes, eliminating the need for custom CSS files.
* **Fully Responsive:** Mobile-first design approach using Tailwind's responsive modifiers (`sm:`, `md:`, `lg:`).
* **Custom Theme:** Integration of custom colors and spacing defined in `tailwind.config.js`.
* **Modern UI Components:** Includes navigation bars, hero sections, food cards, and filter menus.

---

## 🛠️ Installation & Setup

To get this project running locally, follow these steps:

### 1. Clone the Repository
```bash
git clone https://github.com/HAMYL-Aththnayaka/YazzFoods.git
cd YazzFoods
```

### 2. Install Dependencies
Make sure you have [Node.js](https://nodejs.org/) installed, then run:
```bash
npm install
```

### 3. Start the Build Process
To watch for changes and compile your CSS in real-time:
```bash
npm run watch
```
*(Note: Ensure your `package.json` has the appropriate script mapping to the Tailwind CLI).*

### 4. Open the Project
Open `public/index.html` (or your main entry point) in your browser to see the live results.

---
## Output
<img width="900" height="600" alt="image" src="https://github.com/user-attachments/assets/c9feab80-a727-4e9e-874f-915edfe57824" />


## 📁 Project Structure

* `src/`: Contains the source CSS file with `@tailwind` directives.
* `public/`: Contains the compiled `styles.css` and `index.html`.
* `tailwind.config.js`: The heart of the project where custom fonts, colors, and extensions are defined.

---

## 📝 Learning Objectives

In this tutorial repo, you will explore:
1.  **The Box Model:** Managing `margin`, `padding`, and `border` effortlessly.
2.  **Flexbox & Grid:** Creating complex layouts without floats.
3.  **Hover & Focus States:** Adding interactivity with `hover:bg-gray-100`.
4.  **Optimization:** Using PurgeCSS (built into Tailwind) to keep production files tiny.

---
