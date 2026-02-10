# Orisha Tales - Official WebSite

Modern art portfolio website built with Next.js 14+ (App Router), Tailwind CSS, and TypeScript. Optimized for Vercel deployment.

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Language**: TypeScript
- **Font**: Geist Sans / Mono (Configurable in `app/layout.tsx`)

## Deployment Instructions (Vercel + GitHub)

### 1. Push to GitHub

1. Initialize git if not done:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```
2. Create a new repository on GitHub (Private recommended).
3. Link and push:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/REPO_NAME.git
   git branch -M main
   git push -u origin main
   ```

### 2. Connect to Vercel

1. Log in to [Vercel](https://vercel.com/).
2. Click "Add New..." -> "Project".
3. Import your GitHub repository.
4. Framework Preset should automatically detect "Next.js".
5. **Environment Variables**:
   - Even if you don't have secrets yet, this project is configured to look for them in `process.env`.
   - Add any future keys (like Email service keys) here.
6. Click **Deploy**.

## Security & Best Practices

- **Secrets**: NEVER commit `.env` files. The `.gitignore` is pre-configured to exclude `.env`, `.env.local`, etc.
- **Images**: Use `next/image` for automatic optimization. Currently using placeholders.
- **Content**: All text is in the `app/` directory components.

## Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
