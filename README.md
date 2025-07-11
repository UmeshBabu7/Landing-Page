# Aakash Labs Landing Page

A modern, responsive landing page built with React, featuring smooth navigation, section-based routing, and social media integration.

## Features

- **Section Navigation:**
  - Home, About Us, Our Team, Contact Us, and Functional Page sections.
  - Navigation bar with links that update the URL (e.g., `/about-us`) and smoothly scroll to the relevant section.
  - Clicking the "Aakash Labs" logo navigates to the Home section (`/home`).
- **Social Media Footer:**
  - Facebook, Twitter, LinkedIn, and Instagram icon links in the footer.
- **Responsive Design:**
  - Mobile-friendly layout and navigation.

## Getting Started

### Prerequisites
- Node.js (v14 or higher recommended)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <your-repo-url>
   cd Landing-Page
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```
   The app will run at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
Landing-Page/
  public/
  src/
    components/
      AboutUs.js
      ContactUs.js
      Footer.js
      FunctionalPage.js
      NavigationHeader.js
      OurTeam.js
      Slider.js
    App.js
    index.js
  README.md
  package.json
```

## Routing & Navigation

- The navigation bar uses React Router to update the URL for each section:
  - `/home` → Home section
  - `/about-us` → About Us section
  - `/our-team` → Our Team section
  - `/contact-us` → Contact Us section
  - `/functional` → Functional Page
- Directly visiting any of these URLs will scroll to the correct section on the landing page.

## Social Media Links

The footer includes icon links to:
- [Facebook](https://facebook.com/aakashlabs)
- [Twitter](https://twitter.com/aakashlabs)
- [LinkedIn](https://linkedin.com/company/aakashlabs)
- [Instagram](https://instagram.com/aakashlabs)

## Customization

- **Sections:** Edit or add new sections in the `src/components/` directory.
- **Navigation:** Update `NavigationHeader.js` to add or remove navigation links.
- **Social Links:** Update URLs or add new icons in `Footer.js`.
- **Styling:** Modify CSS files in `src/components/` for custom styles.

