<a name="readme-top"></a>

<br />
<div align="center">
  <a href="https://github.com/priyanshubh/animature">
    <img src="public/img/gallery-1.webp" alt="Animature Logo" width="80" height=110">
  </a>

  <h3 align="center">Animature</h3>

  <p align="center">
    An Award-Winning Website Clone Experience
    <br />
    <span style="font-size: 14px; color: #666;">Inspired by Zentry</span>
    <br />
    <br />
    <a href="https://animature.vercel.app"><strong>View Live Demo »</strong></a>
    <br />
    <br />
    <a href="https://github.com/priyanshubh/animature">View Code</a>
    ·
    <a href="https://github.com/priyanshubh/animature/issues">Report Bug</a>
  </p>
</div>

<div align="center">
  <img src="https://img.shields.io/badge/Next.js_15-black?style=for-the-badge&logo=next.js&logoColor=white" alt="Next.js" />
  <img src="https://img.shields.io/badge/React_19-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React 19" />
  <img src="https://img.shields.io/badge/GSAP_3-88CE02?style=for-the-badge&logo=greensock&logoColor=white" alt="GSAP" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
</div>

<br />

<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#-about-the-project">About The Project</a></li>
    <li><a href="#-key-features">Key Features</a></li>
    <li><a href="#-tech-stack">Tech Stack</a></li>
    <li><a href="#-installation">Installation</a></li>
    <li><a href="#-folder-structure">Folder Structure</a></li>
    <li><a href="#-learning-outcomes">Learning Outcomes</a></li>
    <li><a href="#-credits">Credits</a></li>
    <li><a href="#-contact">Contact</a></li>
  </ol>
</details>

---

## 🎨 About The Project

**Animature** is a high-performance, visually immersive frontend project that replicates the award-winning design and animation mechanics of **Zentry**.

Built with the cutting-edge **Next.js 15** and **React 19**, this project serves as a masterclass in modern web animation. It utilizes **GSAP (GreenSock)** to orchestrate complex timelines, scroll-triggered effects, and video manipulation, all while maintaining a responsive layout via **Tailwind CSS**.

<div align="center">
  <img src="assets/img_main.png " alt="Hero Section Screenshot" width="100%" style="border-radius: 10px;" />
</div>

---

## 🔥 Key Features

- **🎬 Cinematic Hero Section**
  Complex video masking and transition effects that change dynamically as the user interacts with the page.
  
- **🖱️ Scroll-Triggered Animations**
  Elements fade, slide, and morph based on scroll position using GSAP ScrollTrigger, creating a storytelling experience.

- **🍱 Interactive Bento Grids**
  Modern, tilt-enabled card layouts that respond to mouse movement for a 3D tactile feel.

- **🔠 Text Reveal Effects**
  Staggered character and word animations that bring typography to life.

- **⚡ Clip-Path Transitions**
  Advanced CSS and GSAP usage to create unique geometric transitions between website sections.

- **📱 Fully Responsive**
  Optimized layouts that maintain animation fluidity across Desktop, Tablet, and Mobile devices.

---

## ⚙️ Tech Stack

| Category | Technology | Description |
| :--- | :--- | :--- |
| **Framework** | <img src="https://img.shields.io/badge/Next.js_15-000000?style=flat&logo=next.js&logoColor=white"/> | Utilizing the latest App Router and React 19 Server Components. |
| **Animation** | <img src="https://img.shields.io/badge/GSAP-88CE02?style=flat&logo=greensock&logoColor=white"/> | The core engine for timelines, ScrollTrigger, and smooth transitions. |
| **Styling** | <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white"/> | Utility-first CSS for rapid, responsive, and maintainable design. |
| **Language** | <img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white"/> | Strict type safety for complex animation logic. |
| **Icons** | <img src="https://img.shields.io/badge/React_Icons-E91E63?style=flat&logo=react&logoColor=white"/> | Lightweight and modular icon library. |

---

## 🧰 Installation

Follow these steps to set up the project locally.

### Prerequisites

* **Node.js** (v18 or higher recommended for Next.js 15)
* **npm** or **yarn**

### Steps

1.  **Clone the repository**
    ```bash
    git clone [https://github.com/priyanshubh/animature.git](https://github.com/priyanshubh/animature.git)
    cd animature
    ```

2.  **Install dependencies**
    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Start the development server**
    ```bash
    npm run dev
    ```

4.  **View the app**
    Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📂 Folder Structure

```text
animature/
├── app/                  # Next.js App Router
│   ├── layout.tsx        # Root layout (fonts, metadata)
│   ├── page.tsx          # Main Landing Page
│   └── globals.css       # Tailwind & Custom CSS
├── components/           # UI Components
│   ├── Hero.tsx          # Main video animation section
│   ├── About.tsx         # Scroll-triggered text section
│   ├── Features.tsx      # Bento grid layout
│   ├── Navbar.tsx        # Floating navigation
│   └── Footer.tsx        # Footer section
├── public/               # Static Assets
│   ├── videos/           # Background video loops
│   ├── audio/            # Sound effects (if applicable)
│   └── images/           # Placeholder images
└── README.md

```
---

## 🧠 Learning Outcomes

By building **Animature**, the following concepts were explored and mastered:

1. **GSAP Timeline Sequencing:** Chaining multiple animations (video scale, text fade, clip-path) into a single, cohesive timeline.
2. **Performance Optimization:** Using `react-use` and efficient React rendering to handle heavy animations without lag.
3. **Modern CSS Layouts:** Mastering `clip-path` and Grid layouts in Tailwind CSS 4.
4. **React 19 Integration:** ensuring third-party animation libraries work seamlessly with the latest React Server Components architecture.

---

## 💎 Credits

This project is a clone created for educational purposes. The original design and concept belong to **Zentry**.

* **Inspiration:** [Zentry Website](https://zentry.com)
* **Design Style:** Awwwards Winning "Gaming/Web3" Aesthetic

---

## 🚀 Follow Me

<div align="center">
  <a href="https://github.com/priyanshubh">
    <img src="https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white" alt="GitHub" />
  </a>
  <a href="https://linkedin.com/in/priyanshu-bharti">
    <img src="https://img.shields.io/badge/linkedin-%230077B5.svg?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn" />
  </a>
  <a href="https://priyanshubharti.vercel.app">
    <img src="https://img.shields.io/badge/Portfolio-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white" alt="Portfolio" />
  </a>
</div>

<br />
<p align="center">Built with ❤️ by <a href="https://www.google.com/search?q=https://github.com/priyanshubh">Priyanshu Bharti</a></p>
