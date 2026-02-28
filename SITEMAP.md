# 📍 Portfolio Site Map & Component Structure

## Visual Site Map

```
┌─────────────────────────────────────────────────────────────┐
│                    NAVIGATION BAR                            │
│  Logo        Home  About  Skills  Experience  Education  Contact
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                    HERO SECTION                              │
│                  (id="hero")                                 │
│                                                              │
│                  Rakesh Reddy T                              │
│              Full Stack Developer                            │
│         Building scalable solutions...                       │
│                                                              │
│         [Get in Touch] [View My Work]                        │
│                                                              │
│          📧 Email  📱 Phone                                  │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                    ABOUT SECTION                             │
│                  (id="about")                                │
│                                                              │
│  About Me (with professional summary and achievements)      │
│  - Key achievement 1                                         │
│  - Key achievement 2                                         │
│  - Key achievement 3                                         │
│  (etc.)                                                      │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                   SKILLS SECTION                             │
│                  (id="skills")                               │
│                                                              │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐            │
│  │ Languages & │ │  Front-End  │ │  Back-End   │            │
│  │ Scripting   │ │ Technologies│ │   & APIs    │            │
│  │             │ │             │ │             │            │
│  │ JS  TS  SQL │ │ React Redux │ │ Node Express│           │
│  │ Python Java │ │ CSS Angular │ │ GraphQL JWT │           │
│  └─────────────┘ └─────────────┘ └─────────────┘            │
│                                                              │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐            │
│  │Cloud        │ │ Databases   │ │ DevOps      │            │
│  │Platforms    │ │             │ │ & Container │            │
│  │             │ │ PostgreSQL  │ │             │            │
│  │Azure AWS    │ │ MongoDB     │ │ Docker K8s  │           │
│  │Lambda EC2   │ │ MySQL       │ │ Jenkins CI  │           │
│  └─────────────┘ └─────────────┘ └─────────────┘            │
│                                                              │
│  ┌─────────────┐ ┌─────────────┐ ┌─────────────┐            │
│  │Testing      │ │ Monitoring  │ │ Tools &     │            │
│  │ Tools       │ │ & Logging   │ │ Utilities   │            │
│  │             │ │             │ │             │            │
│  │Jest Mocha   │ │ ELK Stack   │ │ Git Postman │           │
│  │Cypress      │ │ Prometheus  │ │ Swagger     │           │
│  └─────────────┘ └─────────────┘ └─────────────┘            │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│               EXPERIENCE TIMELINE SECTION                    │
│                (id="experience")                             │
│                                                              │
│  ┌────────────────────────────────────────────────┐         │
│  │ Cigna - Full Stack Developer                   │         │
│  │ May 2025 - Present                             │         │
│  │                                                 │         │
│  │ • Built scalable healthcare portals with React │         │
│  │ • Engineered microservices in Node.js          │         │
│  │ • Integrated Azure Blob Storage                │         │
│  │ • Automated CI/CD pipelines w/ Jenkins         │         │
│  │ (... more achievements)                        │         │
│  └────────────────────────────────────────────────┘         │
│                                                              │
│  ┌────────────────────────────────────────────────┐         │
│  │ PNC Financial - Full Stack Developer           │         │
│  │ Mar 2024 - Apr 2025                            │         │
│  │                                                 │         │
│  │ • Rebuilt onboarding platform w/ Angular       │         │
│  │ • Engineered AWS Lambda for fraud detection    │         │
│  │ • Implemented real-time alerting w/ WebSockets │         │
│  │ (... more achievements)                        │         │
│  └────────────────────────────────────────────────┘         │
│                                                              │
│  ┌────────────────────────────────────────────────┐         │
│  │ Verizon - Software Engineer                    │         │
│  │ Jan 2021 - July 2023                           │         │
│  │                                                 │         │
│  │ • Led full-stack development of productivity   │         │
│  │ • Built mobile-first interfaces w/ React       │         │
│  │ • Designed RESTful APIs w/ Express             │         │
│  │ (... more achievements)                        │         │
│  └────────────────────────────────────────────────┘         │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                 EDUCATION SECTION                            │
│                (id="education")                              │
│                                                              │
│   ┌──────────────────────┐  ┌──────────────────────┐        │
│   │ 🎓 Master's Degree   │  │ 🎓 Bachelor's Degree │        │
│   │                      │  │                      │        │
│   │ Computer Information │  │ Electronics and      │        │
│   │ Systems & Technology │  │ Communication Eng.   │        │
│   │                      │  │                      │        │
│   │ University of        │  │ JNTU, Hyderabad     │        │
│   │ Central Missouri     │  │                      │        │
│   └──────────────────────┘  └──────────────────────┘        │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                  CONTACT SECTION                             │
│                 (id="contact")                               │
│                                                              │
│  ┌────────────────────────┐  ┌─────────────────────┐        │
│  │  CONTACT INFO          │  │  CONTACT FORM       │        │
│  │                        │  │                     │        │
│  │ 📧 Email               │  │  Name: [________]   │        │
│  │    your-email@...      │  │  Email: [________]  │        │
│  │                        │  │  Message:           │        │
│  │ 📱 Phone               │  │  [_____________]    │        │
│  │    +1 (913) 238-8137   │  │                     │        │
│  │                        │  │  [Send Message]     │        │
│  │ 💼 LinkedIn            │  │                     │        │
│  │    linkedin.com/...    │  │                     │        │
│  │                        │  │                     │        │
│  │ 🐙 GitHub             │  │                     │        │
│  │    github.com/...      │  │                     │        │
│  └────────────────────────┘  └─────────────────────┘        │
└─────────────────────────────────────────────────────────────┘
                          ↓
┌─────────────────────────────────────────────────────────────┐
│                      FOOTER                                  │
│                                                              │
│  © 2026 Rakesh Reddy T. All rights reserved.               │
│  GitHub  LinkedIn  Email                                    │
└─────────────────────────────────────────────────────────────┘
```

---

## Component Hierarchy

```
App (Main Container)
│
├── Navigation (Header with smooth scroll)
│   └── Hamburger Menu (Mobile)
│
├── main
│   ├── Hero (Welcome Section)
│   │   ├── Title
│   │   ├── Subtitle
│   │   ├── Description
│   │   ├── Call-to-Action Buttons
│   │   └── Contact Info
│   │
│   ├── About (Professional Summary)
│   │   ├── Paragraph 1
│   │   ├── Paragraph 2
│   │   ├── Paragraph 3
│   │   └── Key Achievements List
│   │
│   ├── Skills (Technical Expertise)
│   │   └── For each Category
│   │       └── Skill Tags
│   │
│   ├── Experience (Work History)
│   │   └── For each Job
│   │       ├── Company Name
│   │       ├── Job Title
│   │       ├── Date Range
│   │       └── Responsibilities List
│   │
│   ├── Education (Academic Background)
│   │   └── For each Degree
│   │       ├── Icon
│   │       ├── Degree Name
│   │       └── Institution
│   │
│   └── Contact (Get in Touch)
│       ├── Contact Methods
│       │   ├── Email
│       │   ├── Phone
│       │   ├── LinkedIn
│       │   └── GitHub
│       └── Contact Form
│           ├── Name Input
│           ├── Email Input
│           ├── Message Textarea
│           └── Submit Button
│
└── Footer
    ├── Copyright Text
    └── Social Links
```

---

## Responsive Behavior

### Desktop (> 1024px)
```
┌────────────────────────────────────────┐
│ Full Width Multi-column Layouts        │
│ - Skills: 3 columns                    │
│ - Contact: 2 columns (Info + Form)     │
│ - All content side-by-side             │
└────────────────────────────────────────┘
```

### Tablet (768px - 1024px)
```
┌────────────────────────────────────────┐
│ Adjusted Layouts                       │
│ - Skills: 2 columns                    │
│ - Contact: Stacked vertically          │
│ - Optimized for touch                  │
└────────────────────────────────────────┘
```

### Mobile (< 768px)
```
┌──────────────────┐
│ Single Column    │
│ - Hamburger Menu │
│ - All Content    │
│   Stacked        │
│ - Touch Friendly │
│ - Readable Fonts │
└──────────────────┘
```

---

## Data Flow

```
User Lands on Portfolio
         ↓
Loads Navigation (sticky header)
         ↓
Displays Hero Section (catchs attention)
         ↓
User Scrolls Down
         ↓
Sees About Section (your story)
         ↓
Reviews Skills Grid (your expertise)
         ↓
Reads Work Experience Timeline (your background)
         ↓
Checks Education (your credentials)
         ↓
Arrives at Contact Section (next steps)
         ↓
Optionally Fills Contact Form
         ↓
Sees Footer (closing impression)
```

---

## URL Navigation Map

When user clicks navigation:

```
Navigation Click  →  Smooth Scroll to Section
─────────────────────────────────────────────
Home              →  Hero (id="hero")
About             →  About (id="about")
Skills            →  Skills (id="skills")
Experience        →  Experience (id="experience")
Education         →  Education (id="education")
Contact           →  Contact (id="contact")
```

---

## Color Scheme Application

```
Primary Color (#2563eb):
├── Navigation: Hover states & logo
├── Buttons: CTA buttons
├── Cards: Border accents
├── Links: All hyperlinks
└── Text: Important highlights

Secondary Color (#1e40af):
├── Hero: Gradient background
├── Button Hover: Darker shade
└── Section Borders: Left accent

Light Background (#f9fafb):
├── Alternating sections
├── About section background
├── Form input fields
└── Card backgrounds

Success Color (#10b981):
├── Achievement checkmarks
└── Positive indicators
```

---

## State Management

```
Navigation State:
├── mobileMenuOpen: boolean
│   ├── false (desktop or menu closed)
│   └── true (mobile menu open)
└── activeSection: string
    └── Tracks currently visible section

Forms:
├── Contact Form
│   ├── Name: string
│   ├── Email: string (validated)
│   └── Message: string
```

---

## Performance Optimization Points

```
<head>
├── Meta Tags (SEO)
├── Fonts: System fonts (no external requests)
├── CSS: Minimal & optimized
└── JavaScript: Code-split by route

<body>
├── Lazy Loading: Images (if added)
├── Smooth Scrolling: Hardware accelerated
├── Transitions: GPU accelerated
└── Form Submission: Async (if backend added)
```

---

## Accessibility Features

```
Navigation:
├── Semantic HTML (<nav>, <main>, <footer>)
├── Skip to main content (optional)
├── Keyboard navigation (Tab key)
└── Focus indicators

Forms:
├── Label associations
├── Input validation
├── Error messages
└── Screen reader support

Content:
├── Proper heading hierarchy (h1, h2, h3)
├── Alt text for images (if added)
├── Color contrast ratios
└── Readable font sizes
```

---

## External Links (External to Site)

These links open in new tabs:

```
Contact Section:
├── Link to Email (mailto:)
├── Link to Phone (tel:)
├── Link to LinkedIn (https://)
└── Link to GitHub (https://)

Footer:
├── Link to LinkedIn
├── Link to GitHub
└── Link to Email
```

---

## File Dependency Map

```
App.jsx
├── imports → App.css
├── imports → Navigation.jsx
│   └── imports → Navigation.css
├── imports → Hero.jsx
│   └── imports → Hero.css
├── imports → About.jsx
│   └── imports → About.css
├── imports → Skills.jsx
│   └── imports → Skills.css
├── imports → Experience.jsx
│   └── imports → Experience.css
├── imports → Education.jsx
│   └── imports → Education.css
├── imports → Contact.jsx
│   └── imports → Contact.css
├── imports → Footer.jsx
│   └── imports → Footer.css
└── main.jsx
    └── renders → App.jsx
        └── renders in → index.html
            └── styles from → index.css
```

---

## Customization Points Map

```
Name/Contact Info
├── Hero.jsx
├── Navigation.jsx
├── Contact.jsx
└── Footer.jsx

Professional Content
├── About.jsx
├── Experience.jsx
└── Education.jsx

Technical Info
└── Skills.jsx

Colors
└── App.css (--primary-color, etc)

Sections
├── Add to App.jsx
├── Add to Navigation.jsx
└── Create Component
```

---

## Key Decision Points for Users

```
On Hero Section:
├── [Get in Touch] → Scroll to Contact
└── [View My Work] → Scroll to Experience

On Navigation:
├── Click Logo → Scroll to Hero
└── Click Any Link → Scroll to Section

On Contact:
├── Fill Form → Send (if backend added)
├── Click Email → Open mail client
├── Click Phone → Dial (mobile)
└── Click Social → New tab
```

---

<div align="center">

### Understanding Your Portfolio Structure 🗺️

This site map shows how all pieces fit together!

</div>
