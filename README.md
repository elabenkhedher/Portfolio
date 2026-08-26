# Portfolio

Personal portfolio site. Built with Next.js (App Router), Tailwind CSS and
Framer Motion. The contact form is sent through a small API route using
[Resend](https://resend.com).

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

## Contact form

The form posts to `/api/send`, which uses Resend. To make it work, set two
environment variables (for example in `.env.local`):

```
RESEND_API_KEY=your_key
FROM_EMAIL=you@yourdomain.com
```

## Things to update before deploying

- Social links in `src/app/components/EmailSection.jsx`
- Project links and descriptions in `src/app/components/ProjectsSection.jsx`
- Email address in the contact section
- Portrait photo at `public/images/hero-image.png`

## License

MIT
