# Rakesh Reddy T - Portfolio

A modern, responsive portfolio website built with React and Vite. Showcasing 5+ years of Full Stack Development experience with expertise in React, Node.js, Azure, and AWS services.

## 🌟 Features

- **Fully Responsive Design** - Works seamlessly on mobile, tablet, and desktop
- **Modern UI/UX** - Clean, professional design with smooth animations
- **Hero Section** - Eye-catching introduction with call-to-action buttons
- **About Section** - Professional summary and key achievements
- **Skills Section** - Comprehensive technical skills organized by category
- **Experience Timeline** - Detailed work history with responsibilities and achievements
- **Education Section** - Academic background and credentials
- **Contact Form** - Easy way for potential employers to reach out
- **Mobile Navigation** - Hamburger menu for mobile-friendly navigation
- **Dark Mode Ready** - Foundation for dark theme implementation

## 🚀 Quick Start

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/rakesh-portfolio.git
cd rakesh-portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 🛠️ Development

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Run Linter

```bash
npm run lint
```

## 📁 Project Structure

```
src/
├── components/
│   ├── Navigation.jsx       # Header navigation
│   ├── Hero.jsx            # Hero section
│   ├── About.jsx           # About me section
│   ├── Skills.jsx          # Technical skills
│   ├── Experience.jsx      # Work experience
│   ├── Education.jsx       # Education details
│   ├── Contact.jsx         # Contact section
│   ├── Footer.jsx          # Footer
│   └── *.css              # Component styles
├── App.jsx                # Main app component
├── App.css               # Global styles
├── main.jsx             # Application entry point
└── index.css            # Base styles
```

## 🎨 Customization

### Update Personal Information

Edit the component files to update your information:

- **Navigation**: Update `Logo` in `Navigation.jsx`
- **Hero**: Update name and contact info in `Hero.jsx`
- **About**: Update summary and achievements in `About.jsx`
- **Skills**: Modify skill categories in `Skills.jsx`
- **Experience**: Add/edit work experience in `Experience.jsx`
- **Education**: Update education details in `Education.jsx`
- **Contact**: Update contact methods and links in `Contact.jsx`

### Modify Colors

Edit the CSS custom properties in `App.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --text-color: #1f2937;
  --light-bg: #f9fafb;
  --border-color: #e5e7eb;
  --success-color: #10b981;
}
```

## 📦 Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **CSS3** - Modern styling with custom properties
- **JavaScript (ES6+)** - Modern JavaScript features

## 🚀 Deployment

### Deploy to GitHub Pages

1. Update `vite.config.js`:
```javascript
export default {
  base: '/rakesh-portfolio/',
}
```

2. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

3. Add deployment scripts to `package.json`:
```json
{
  "deploy": "npm run build && gh-pages -d dist",
  "predeploy": "npm run build"
}
```

4. Run deployment:
```bash
npm run deploy
```

### Deploy to Vercel

1. Push to GitHub
2. Import your repository in Vercel
3. Vercel will auto-detect Vite and deploy

### Deploy to Netlify

1. Push to GitHub
2. Connect your repository in Netlify
3. Set build command: `npm run build`
4. Set publish directory: `dist`

## 📞 Contact Information

- **Email**: Rakeshreddythippana99@gmail.com
- **LinkedIn**: [linkedin.com/in/rakeshreddy](https://linkedin.com)
- **GitHub**: [github.com/rakeshreddy](https://github.com)

## 📄 License

This project is open source and available under the MIT License.

## 💡 Future Enhancements

- [ ] Dark mode support
- [ ] Blog section
- [ ] Projects showcase with live demos
- [ ] Download resume as PDF
- [ ] Testimonials section
- [ ] Animation improvements
- [ ] Multi-language support

---

Built with ❤️ using React and Vite
