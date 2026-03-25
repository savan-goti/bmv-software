# BMV Software

A modern, responsive corporate website built with React and Vite. This project showcases the company's services, tech stack, portfolio, and process, acting as a complete landing page with smooth scroll animations and an interactive user interface.

## 🚀 Features

- **Modern UI/UX:** Clean, professional, and visually appealing design.
- **Responsive Layout:** Works seamlessly across desktops, tablets, and mobile devices.
- **Smooth Animations:** Built-in scroll reveals and dynamic components.
- **Comprehensive Sections:** Includes Hero, Services, About Us, Tech Stack, Portfolio, Pricing, Reviews, FAQ, and Contact.
- **Interactive Elements:** Fixed Navigation, Topbar, Ticker, WhatsApp Floating Action Button, and a Back-To-Top button.

## 🛠️ Tech Stack

- **Frontend Framework:** [React 19](https://react.dev/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** Vanilla CSS (Modular and scalable structure)
- **Linting:** ESLint

## 📦 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bmv-software
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the Development Server

To start the local development server with Hot Module Replacement (HMR):

```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The compiled assets will be generated in the `dist` folder, ready for deployment.

### Previewing the Production Build

To preview the built application locally:

```bash
npm run preview
```

## 📂 Project Structure

```text
bmv-software/
├── public/               # Static assets
├── src/
│   ├── assets/           # Images, icons, and other media
│   ├── components/       # Reusable React components (Hero, Navbar, Services, etc.)
│   ├── App.jsx           # Main application entry component
│   ├── index.css         # Global styles and variables
│   └── main.jsx          # React DOM rendering entry point
├── index.html            # Main HTML template
├── package.json          # Project metadata and dependencies
└── vite.config.js        # Vite configuration
```

## 🎨 Customization

The project uses vanilla CSS for styling, with main styles defined in `src/index.css`. Component-specific styles may be colocated within the `components/` directory or organized in dedicated CSS files. You can easily tweak color palettes, typography, and spacing by modifying the CSS variables.

## 📄 License

This project is proprietary and confidential. Unauthorized copying of files, via any medium, is strictly prohibited.
