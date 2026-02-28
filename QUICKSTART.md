# 🚀 Getting Started with Your Portfolio

Welcome! Here's everything you need to know to run and customize your portfolio.

## Quick Start (2 minutes)

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open browser:**
   Navigate to `http://localhost:5173`

4. **Start customizing!**
   Edit files in the `src/` folder and see changes instantly with hot reload.

## Customization Guide

### 1. Update Your Name & Contact Info

**File:** `src/components/Hero.jsx`

```javascript
<h1 className="hero-title">Your Name Here</h1>
<p>📧 <a href="mailto:your-email@example.com">your-email@example.com</a></p>
<p>📱 <a href="tel:+1234567890">+1 (234) 567-8900</a></p>
```

### 2. Update Your About Section

**File:** `src/components/About.jsx`

Update the summary paragraph and key achievements list.

### 3. Add Your Skills

**File:** `src/components/Skills.jsx`

Modify the `skillCategories` array:

```javascript
const skillCategories = [
  {
    category: 'Languages & Scripting',
    skills: ['JavaScript', 'Python', 'TypeScript', ...]
  },
  // Add more categories...
]
```

### 4. Update Your Work Experience

**File:** `src/components/Experience.jsx`

Modify the `experiences` array with your job details.

### 5. Update Your Education

**File:** `src/components/Education.jsx`

Modify the `educations` array with your degrees.

### 6. Update Contact Links

**File:** `src/components/Contact.jsx`

Update social media and contact method links:

```javascript
<a href="https://linkedin.com/in/yourprofile">linkedin.com/in/yourprofile</a>
<a href="https://github.com/yourprofile">github.com/yourprofile</a>
```

### 7. Update Footer

**File:** `src/components/Footer.jsx`

Update the footer links and copyright information.

## Styling & Colors

### Change Primary Color

Edit `src/App.css`:

```css
:root {
  --primary-color: #2563eb;      /* Change this */
  --secondary-color: #1e40af;    /* And this */
  --text-color: #1f2937;
  --light-bg: #f9fafb;
  --border-color: #e5e7eb;
  --success-color: #10b981;
}
```

### Popular Color Schemes

**Professional Blue (current):**
- Primary: `#2563eb`
- Secondary: `#1e40af`

**Modern Purple:**
- Primary: `#8b5cf6`
- Secondary: `#6d28d9`

**Tech Green:**
- Primary: `#059669`
- Secondary: `#047857`

**Elegant Red:**
- Primary: `#dc2626`
- Secondary: `#b91c1c`

## Production Build

When ready to deploy:

1. **Build for production:**
   ```bash
   npm run build
   ```

2. **Files will be in the `dist/` folder**

3. **Preview locally:**
   ```bash
   npm run preview
   ```

## Deployment Options

Choose one of these platforms:

- **GitHub Pages** - Free, easy, integrated with GitHub
- **Vercel** - Fast, zero-config deployment
- **Netlify** - Feature-rich, free tier available
- **AWS** - Enterprise-grade, more complex

See `DEPLOYMENT.md` for detailed instructions.

## File Structure Explained

```
src/
├── components/
│   ├── Navigation.jsx     ← Top navigation bar
│   ├── Hero.jsx          ← Big welcome section
│   ├── About.jsx         ← Your summary
│   ├── Skills.jsx        ← Technical skills
│   ├── Experience.jsx    ← Work history
│   ├── Education.jsx     ← Degrees & diplomas
│   ├── Contact.jsx       ← Contact section
│   └── Footer.jsx        ← Footer
├── App.jsx              ← Main component (ties all sections)
├── App.css              ← Global styles & colors
├── main.jsx             ← Application entry point
└── index.css            ← Base styles
```

## Common Tasks

### Add a New Skill Category

Edit `src/components/Skills.jsx`:

```javascript
{
  category: 'New Category',
  skills: ['Skill 1', 'Skill 2', 'Skill 3']
}
```

### Change Navigation Links

Edit `src/components/Navigation.jsx`:

```javascript
<li><a onClick={() => scrollToSection('section-id')}>Link Name</a></li>
```

### Add Smooth Scrolling Offset

Edit the `scrollToSection` function in `Navigation.jsx` to add offset for fixed header.

### Add Social Media Links

Edit `src/components/Contact.jsx` and `Footer.jsx` to add or update social links.

## Tips & Best Practices

✅ **Do:**
- Keep it simple and professional
- Use high-quality content
- Test on mobile devices
- Update your contact info
- Monitor your site's performance

❌ **Don't:**
- Use outdated technologies in descriptions
- Have typos or grammatical errors
- Forget to test all links
- Use low-resolution images
- Leave placeholder text

## Performance Tips

1. **Optimize images** - Compress before using
2. **Use descriptive alt text** - For accessibility
3. **Keep descriptions concise** - Recruiters scan quickly
4. **Test on slow networks** - Use DevTools throttling
5. **Monitor Core Web Vitals** - Use PageSpeed Insights

## Next Steps

1. ✅ Customize all content with your information
2. ✅ Test all links and buttons
3. ✅ View on mobile and tablet
4. ✅ Build the project: `npm run build`
5. ✅ Deploy to your chosen platform
6. ✅ Share with recruiters and peers
7. ✅ Update regularly with new projects/skills

## Need Help?

- **React Documentation:** https://react.dev
- **Vite Documentation:** https://vitejs.dev
- **CSS Reference:** https://developer.mozilla.org/en-US/docs/Web/CSS
- **Component reusability:** DRY principle - Don't Repeat Yourself

## Advanced Customizations

### Add Dark Mode

Create a new CSS file `dark-mode.css` and toggle via a button in Navigation.

### Add Animations

Import and use a library like:
- AOS (Animate On Scroll)
- Framer Motion
- React Spring

### Add a Blog

Create a new `Blog.jsx` component with a list of articles.

### Connect a Backend

Add API calls to send contact form submissions to an email service like:
- SendGrid
- Mailchimp
- EmailJS

---

**Ready to go?** Run `npm run dev` and start customizing! 🎉
