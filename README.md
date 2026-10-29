# Irfan Faris F — Portfolio

Personal portfolio website for **Irfan Faris F**, a second-year B.Tech Computer Science & Engineering student at NSS College of Engineering, Palakkad. Showcases projects, skills, education, academic performance, and achievements.

🔗 **Live site:** [irfanfarisf.vercel.app](https://irfanfarisf.vercel.app/) · also served at [irfanfarisf.github.io/portfolio](https://irfanfarisf.github.io/portfolio/)

---

## ✨ Sections

- **Home** — animated intro headline with a typed eyebrow line and resume download.
- **About** — short bio, photo, and a terminal-style info card (name, year, focus).
- **Education** — timeline of schooling and current B.Tech program.
- **Skills** — tech and soft-skill tags with icons (Python, JavaScript, HTML, CSS, C, Problem Solving, Leadership).
- **Work** — project cards with description, tech stack, and Live/GitHub links:
  - Portfolio (this site)
  - Assignment Tracker
  - Pookalam Designer
- **Achievements** — milestone cards (certifications, scholarships, competition prizes) with a "show certificate" image modal.
- **Academics** — SGPA trend chart across semesters, with grade-card modals.
- **Contact** — working contact form (via Formspree) plus direct social links (Instagram, GitHub, LinkedIn).

Other touches: animated scroll progress bar, cursor glow effect, scroll-reveal animations, a back-to-top button, and a mobile nav toggle.

## 🛠️ Tech Stack

- **HTML5 / CSS3 / vanilla JavaScript** — no framework or build step
- [Formspree](https://formspree.io/) — contact form handling
- [Google Fonts](https://fonts.google.com/) — Space Grotesk, Inter, JetBrains Mono
- [Remix Icon](https://remixicon.com/) — UI icons
- [Devicon](https://devicon.dev/) — technology/skill icons
- Vercel Analytics & Speed Insights (`/_vercel/insights`, `/_vercel/speed-insights`)
- Deployed via **Vercel** and **GitHub Pages**

## 🚀 Getting Started

This is a static site with no build process — just open it or serve the folder.

### Prerequisites

- Any modern web browser
- (Optional) [Node.js](https://nodejs.org/) if you want to use a local dev server package like `serve` or `live-server`

### Run Locally

```bash
# Clone the repository
git clone https://github.com/irfanfarisf/portfolio.git
cd portfolio

# Option 1 — just open it directly
open index.html      # macOS
start index.html      # Windows

# Option 2 — serve it (recommended, avoids relative-path/CORS quirks)
npx serve .
# or
npx live-server
```

Then visit the local URL printed in the terminal (typically `http://localhost:3000` or similar).

### Setting Up the Contact Form

The contact form posts to a [Formspree](https://formspree.io/) endpoint. To use your own:

1. Create a free form at [formspree.io](https://formspree.io/).
2. Replace the `action` attribute on `<form class="contact-form" ...>` in `index.html` with your own Formspree endpoint URL.

## 📁 Project Structure

```
portfolio/
├── index.html      # All page markup/content
├── styles.css       # Site styling
├── script.js        # Scroll reveal, typed text, SGPA chart, cert modal, nav toggle, etc.
├── photo.jpg         # About-section profile photo
├── portfolio.png      # Project One preview image
├── prj2.png           # Assignment Tracker preview image
├── pookalam.png        # Pookalam Designer preview image
├── resume.pdf           # Downloadable resume
└── *.jpg / *.png          # Certificate & grade-card images used in modals
```

## 📦 Deployment

The site is deployed as a static site on **Vercel** (primary) and mirrored on **GitHub Pages**. Since there's no build step, any static host — Vercel, Netlify, GitHub Pages, or Cloudflare Pages — works by simply serving the repository's root files.

## 🔗 Connect

- [GitHub](https://github.com/irfanfarisf)
- [LinkedIn](https://www.linkedin.com/in/irfan-faris-f-159b04365)
- [Instagram](https://www.instagram.com/farisbinfaizal)
