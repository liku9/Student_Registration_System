# Student Registration System

An interactive and responsive **Student Registration Web Application** that allows users to register students and maintain their records digitally.  
The system provides a simple UI to add, view, edit, and delete student details efficiently.

---

## Features

✔️ Student Registration Form  
✔️ Stores Student Details (Name, ID, Email, Contact)  
✔️ Displays Records in Table Format  
✔️ Edit and Delete Functionality  
✔️ Responsive UI  
✔️ Tailwind CSS Styling  
✔️ Smooth Animations

---

## Tech Stack

- **HTML5**
- **CSS3 / Tailwind CSS**
- **JavaScript**

---

## Project Structure

```
Student Registration System
│
├── index.html
├── script.js
├── output.css
└── README.md
```

---

## Setup Instructions

### OPTION 1 — Direct Run
1️⃣ Download project  
2️⃣ Open `index.html` in browser  
3️⃣ Done

---

### OPTION 2 — If Using Tailwind Locally

1️⃣ Install Node.js  
2️⃣ Run this in project folder:
```bash
npm init -y
npm install -D tailwindcss
npx tailwindcss init
```

3️⃣ Add this in `tailwind.config.js`
```js
content: ["./*.html"]
```

4️⃣ Create `input.css` and add:
```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

5️⃣ Build CSS
```bash
npx tailwindcss -i ./input.css -o ./output.css --watch
```

6️⃣ Open `index.html`

---

## Future Enhancements
- Database Integration (MySQL / Firebase)
- Login System
- Role-Based User Access
- Export to Excel Feature

---

## Developed By
Student Registration System Project  
Made for learning & educational purpose.
