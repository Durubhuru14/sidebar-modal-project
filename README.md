# Sidebar and Modal Project with React

![Project Screenshot](https://i.imgur.com/aT8wAP7.png)

A modern React application showcasing a responsive sidebar navigation system and modal dialog, implemented with clean animations and state management using React Context API.

## ✨ Features

- **Interactive Sidebar**:
  - Smooth slide-in/slide-out animation
  - Responsive design (full-screen on mobile, 400px width on desktop)
  - Navigation links with icons
  - Social media links section

- **Modal System**:
  - Centered modal with overlay
  - Fade-in/out animation
  - Customizable content

- **State Management**:
  - Global state for sidebar and modal visibility
  - Context API for clean state sharing
  - Custom hooks for easy access to state and actions

- **UI/UX Enhancements**:
  - Bouncing animation on sidebar toggle button
  - Smooth transitions for all interactive elements
  - Responsive design that works across devices
  - Accessible close buttons and interactions

## 🛠 Technologies Used

- **Frontend**:
  - React 18 (with Vite)
  - React Icons (Font Awesome)
  - CSS3 with custom properties
  - Modern CSS layout (Flexbox, Grid)

- **State Management**:
  - React Context API
  - Custom hooks

- **Build Tool**:
  - Vite (for fast development and builds)

## 🎨 Figma Design

The project follows a clean, minimalist design with attention to animation details:

[Sidebar and Modal](https://www.figma.com/file/cFyEiRb6jQdVIVK9M5eoe6/Sidebar-and-modal?node-id=0%3A1&t=sg6VSjSNK3T1Uy8P-1)

Key design elements:
- Color scheme based on blue primary colors (`#49A6E9`)
- Consistent spacing and typography
- Micro-interactions for buttons and links
- Dark overlay for modal background
- Responsive breakpoints for different screen sizes

## 📂 Project Structure

```
├── index.html
├── package.json
├── package-lock.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── context.jsx           # Context API implementation
│   ├── data.jsx             # Navigation and social links data
│   ├── Home.jsx             # Main page with toggle buttons
│   ├── index.css            # Global styles
│   ├── logo.svg             # Brand logo
│   ├── main.jsx             # Application entry point
│   ├── Modal.jsx            # Modal component
│   └── Sidebar.jsx          # Sidebar component
└── vite.config.js
```

## 🚀 Installation & Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/durubhuru14/sidebar-modal-project.git
   cd sidebar-modal-project
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run the development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 🖥 Usage

1. **Opening the Sidebar**:
   - Click the animated ☰ icon in the top-left corner
   - Sidebar slides in from the left with smooth animation
   - Click the × button to close

2. **Opening the Modal**:
   - Click the "Show Modal" button
   - Modal fades in with dark overlay
   - Close by clicking the × button or clicking outside

3. **Responsive Behavior**:
   - On mobile: Sidebar takes full width
   - On desktop (≥676px): Sidebar limited to 400px width
   - Modal always remains centered with appropriate width

## 🎨 Customization

### Colors
Modify the CSS variables in `index.css`:
```css
:root {
  --primary-500: #49a6e9; /* Change primary blue color */
  --grey-100: #f1f5f9;    /* Change background shades */
  /* ... other variables */
}
```

### Content
Edit `data.jsx` to update:
- Navigation links
- Social media links
- Icons (using React Icons)

### Animations
Adjust in `index.css`:
```css
/* Change bounce animation */
@keyframes bounce {
  0% { transform: scale(1); }
  50% { transform: scale(1.3); } /* Less aggressive bounce */
  100% { transform: scale(1); }
}

/* Change transition speed */
:root {
  --transition: 0.2s ease-in-out all; /* Faster transitions */
}
```

## 📚 Implementation Details

### Context API
The application uses React Context to manage global state for:
- Sidebar visibility (`isSidebarOpen`)
- Modal visibility (`isModalOpen`)
- Action functions to control them (`openSidebar`, `closeSidebar`, etc.)

### Performance
- Optimized re-renders with proper context splitting
- CSS transitions instead of JavaScript animations for smoother performance
- Minimal bundle size thanks to Vite's optimizations

### Accessibility
- Proper button roles and labels
- Keyboard navigation support
- Focus management for modal
- Sufficient color contrast
