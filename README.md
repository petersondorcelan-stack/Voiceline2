# Voice Line Services

Voice Line Services is a modern web application for a professional interpretation company, offering Over-the-Phone (OPI), Video Remote (VRI), and In Person services.

## Features
- Modern, professional React UI
- Three static pages: Home, About Us, Book Your Session
- Main menu with OPI, VRI, In Person, Book Your Session (Google Form)
- Footer with social media links (WhatsApp, TikTok, Facebook, Instagram), Contact Us (Google Form), Privacy Policy, Terms of Service
- Supabase integration ready for authentication, storage, and database
- Routing via HashRouter for GitHub Pages compatibility

## Getting Started

### Prerequisites
- Node.js (v18+ recommended)
- npm

### Installation
1. Clone the repository
2. Run `npm install`

### Development
```
npm start
```

### Build for Production
```
npm run build
```

### Deploy to GitHub Pages
1. Set your `homepage` in `package.json` to your GitHub Pages URL
2. Use `gh-pages` or GitHub Actions to deploy the `build` folder

### Supabase Setup
- Add your Supabase project URL and anon key to a `.env` file:
```
REACT_APP_SUPABASE_URL=your-supabase-url
REACT_APP_SUPABASE_ANON_KEY=your-anon-key
```

## License
MIT
