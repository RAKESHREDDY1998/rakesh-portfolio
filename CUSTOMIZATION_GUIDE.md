# 🔧 How to Customize Your Portfolio - Step by Step

This guide walks you through every customization needed to make the portfolio yours.

---

## Step 1: Update Hero Section (Top of Page)

**File:** `src/components/Hero.jsx`

This is the first thing people see. Update:

1. **Your Name:**
   ```javascript
   // Line 12
   <h1 className="hero-title">Rakesh Reddy T</h1>
   // Change to:
   <h1 className="hero-title">Your Name Here</h1>
   ```

2. **Your Email:**
   ```javascript
   // Line 19
   <p>📧 <a href="mailto:Rakeshreddythippana99@gmail.com">Rakeshreddythippana99@gmail.com</a></p>
   // Change to:
   <p>📧 <a href="mailto:YOUR-EMAIL@example.com">YOUR-EMAIL@example.com</a></p>
   ```

3. **Your Phone:**
   ```javascript
   // Line 20
   <p>📱 <a href="tel:+19132388137">+1 (913) 238-8137</a></p>
   // Change to:
   <p>📱 <a href="tel:+1234567890">+1 (234) 567-8900</a></p>
   ```

---

## Step 2: Update Navigation Logo

**File:** `src/components/Navigation.jsx`

1. **Logo Text:**
   ```javascript
   // Line 18
   <span className="logo-text">Rakesh Reddy T</span>
   // Change to:
   <span className="logo-text">Your Name</span>
   ```

---

## Step 3: Update About Section

**File:** `src/components/About.jsx`

1. **Summary Paragraphs:**
   ```javascript
   // Lines 13-27
   // Update the text to your own professional summary
   ```

2. **Key Achievements:**
   ```javascript
   // Lines 30-37
   // Update the bullet points with your achievements
   // Example:
   <li>Your achievement #1</li>
   <li>Your achievement #2</li>
   ```

---

## Step 4: Update Skills Section

**File:** `src/components/Skills.jsx`

1. **Modify Skill Categories:**
   ```javascript
   // Lines 4-13
   const skillCategories = [
     {
       category: 'Languages & Scripting',
       skills: ['JavaScript (ES6+)', 'TypeScript', 'Your Skill', ...]
     },
     // Add or remove categories as needed
   ]
   ```

**Example - Adding/Removing Skills:**
```javascript
// BEFORE
skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'Bash', 'Shell', 'Java', 'Python']

// AFTER
skills: ['JavaScript (ES6+)', 'TypeScript', 'HTML5', 'CSS3', 'SQL', 'Go', 'Rust']
```

**Example - Adding New Category:**
```javascript
{
  category: 'Data Science',
  skills: ['TensorFlow', 'Pandas', 'NumPy', 'Scikit-learn']
},
```

---

## Step 5: Update Experience Section

**File:** `src/components/Experience.jsx`

Update each position:

```javascript
// Lines 4-98
const experiences = [
  {
    company: 'Your Company Name',
    position: 'Your Job Title',
    period: 'Month Year – Present',
    highlights: [
      'Your achievement #1',
      'Your achievement #2',
      'Your achievement #3',
      // Add up to 10 highlights per job
    ]
  },
  // Add more jobs or remove existing ones
]
```

**Example - Adding a New Position:**
```javascript
{
  company: 'Acme Corp',
  position: 'Senior Developer',
  period: 'Jan 2023 – Jul 2024',
  highlights: [
    'Led team of 5 developers on microservices migration',
    'Improved API response time by 50%',
    'Implemented CI/CD pipeline reducing deployment time by 80%'
  ]
}
```

**Tip:** Add achievements with metrics (percentages, numbers) for impact!

---

## Step 6: Update Education Section

**File:** `src/components/Education.jsx`

```javascript
// Lines 4-11
const educations = [
  {
    degree: "Your Degree Name",
    institution: 'Your University Name'
  },
  {
    degree: "Your Second Degree",
    institution: 'Another University'
  }
]
```

**Example:**
```javascript
const educations = [
  {
    degree: "Bachelor's in Computer Science",
    institution: 'Stanford University'
  },
  {
    degree: "Certification: AWS Solutions Architect",
    institution: 'Amazon Web Services'
  }
]
```

---

## Step 7: Update Contact Section

**File:** `src/components/Contact.jsx`

Update your contact methods:

```javascript
// Lines 21-22
<a href="https://linkedin.com">linkedin.com/in/rakeshreddy</a>

// Change to:
<a href="https://linkedin.com/in/YOUR-PROFILE">linkedin.com/in/your-profile</a>
```

**Update all contact methods:**

```javascript
// Email
<a href="mailto:YOUR-EMAIL@example.com">YOUR-EMAIL@example.com</a>

// Phone  
<a href="tel:+1234567890">+1 (234) 567-8900</a>

// LinkedIn
<a href="https://linkedin.com/in/your-username">linkedin.com/in/your-username</a>

// GitHub
<a href="https://github.com/your-username">github.com/your-username</a>
```

---

## Step 8: Update Footer

**File:** `src/components/Footer.jsx`

```javascript
// Line 10
<a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
<a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>

// Change to:
<a href="https://linkedin.com/in/your-username" target="_blank" rel="noopener noreferrer">LinkedIn</a>
<a href="https://github.com/your-username" target="_blank" rel="noopener noreferrer">GitHub</a>
```

---

## Step 9: Update Navigation Links in Header

**File:** `src/components/Navigation.jsx`

If you want to customize which sections appear in navigation:

```javascript
// Lines 24-30
<ul className={`nav-menu ${mobileMenuOpen ? 'active' : ''}`}>
  <li><a onClick={() => scrollToSection('hero')}>Home</a></li>
  <li><a onClick={() => scrollToSection('about')}>About</a></li>
  <li><a onClick={() => scrollToSection('skills')}>Skills</a></li>
  <li><a onClick={() => scrollToSection('experience')}>Experience</a></li>
  <li><a onClick={() => scrollToSection('education')}>Education</a></li>
  <li><a onClick={() => scrollToSection('contact')}>Contact</a></li>
</ul>
```

**To add a new section:**
1. Create a new component file in `src/components/`
2. Add it to `App.jsx` with an `id` attribute
3. Add a nav link in `Navigation.jsx`

---

## Step 10: Customize Colors (Optional)

**File:** `src/App.css`

Find the `:root` section (lines 7-15):

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

**Popular color schemes:**

**Modern Purple:**
```css
--primary-color: #8b5cf6;
--secondary-color: #6d28d9;
--success-color: #a78bfa;
```

**Tech Green:**
```css
--primary-color: #059669;
--secondary-color: #047857;
--success-color: #34d399;
```

**Elegant Red:**
```css
--primary-color: #dc2626;
--secondary-color: #b91c1c;
--success-color: #f87171;
```

**Professional Dark Blue:**
```css
--primary-color: #0066cc;
--secondary-color: #004999;
--success-color: #0099ff;
```

---

## Step 11: Check Section IDs Match

Make sure all sections have the correct `id` attribute in `App.jsx`:

```javascript
// App.jsx
<Hero id="hero" />              // hero section
<About id="about" />            // about section
<Skills id="skills" />          // skills section
<Experience id="experience" />  // experience section
<Education id="education" />    // education section
<Contact id="contact" />        // contact section
```

**Note:** The `id` attributes should match the names in Navigation scrollToSection() calls.

---

## Step 12: Update Browser Tab Info

**File:** `index.html`

```html
<!-- Line 5 -->
<title>Rakesh Reddy T - Full Stack Developer</title>

<!-- Change to -->
<title>Your Name - Your Title</title>
```

Optionally update meta description:
```html
<meta name="description" content="Professional portfolio of Rakesh Reddy T, Full Stack Developer with 5+ years experience">

<!-- Change to -->
<meta name="description" content="Professional portfolio of [Your Name], [Your Title]">
```

---

## Verification Checklist

After making changes, verify:

- [ ] All names and emails are updated
- [ ] Phone number format is correct
- [ ] LinkedIn URL is correct (go to your profile, copy URL)
- [ ] GitHub URL is correct
- [ ] All skills match your expertise
- [ ] Work experience dates are accurate
- [ ] Achievement descriptions are clear
- [ ] No typos or spelling errors
- [ ] All links work when clicked

---

## Testing Your Changes

After each update:

1. **Save the file** (Ctrl+S)
2. **Check the browser** - Changes should appear automatically (hot reload)
3. **No hot reload?** Try:
   - Refresh page (F5)
   - Clear cache (Ctrl+Shift+Delete)
   - Check browser console for errors (F12)

---

## Common Mistakes to Avoid

❌ **Don't:**
- Leave placeholder text
- Use old job titles or companies
- Spell skills incorrectly
- Use outdated technologies
- Forget to update contact info
- Leave broken links

✅ **Do:**
- Double-check all information
- Use current technology names
- Verify all URLs work
- Test on mobile
- Read through for typos
- Use metrics in achievements

---

## Quick Reference: File Locations

| What to Update | File | Lines |
|---|---|---|
| Name & Email | `Hero.jsx` | 12, 19, 20 |
| Logo | `Navigation.jsx` | 18 |
| About Text | `About.jsx` | 13-37 |
| Skills | `Skills.jsx` | 4-13 |
| Work History | `Experience.jsx` | 4-98 |
| Education | `Education.jsx` | 4-11 |
| Contact Links | `Contact.jsx` | 21-38 |
| Footer | `Footer.jsx` | 10-12 |
| Colors | `App.css` | 7-15 |
| Browser Title | `index.html` | 5 |

---

## Need More Help?

1. **Check QUICKSTART.md** for common customizations
2. **Review component files** - they have clear comments
3. **Check browser console** (F12) for error messages
4. **Test with `npm run dev`** frequently as you make changes

---

## Next: Deploying Your Portfolio

Once customization is complete, see `DEPLOYMENT.md` for:
- Deploying to GitHub Pages
- Deploying to Vercel
- Deploying to Netlify
- Using a custom domain

---

<div align="center">

### Ready to make it yours? 🚀

Start with Step 1 and work your way down!

</div>
