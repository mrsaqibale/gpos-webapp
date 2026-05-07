# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Contact Form on Hostinger (PHP mail)

This project uses a PHP endpoint with native `mail()` when hosted on Hostinger shared hosting.

### Configure

1. Copy `public/api/config.example.php` to `public/api/config.php`.
2. Set real values in `public/api/config.php`:
   - `fromEmail` (use your domain mailbox, for example `no-reply@yourdomain.com`)
   - `fromName`
   - `recipientEmail`

### Build and upload

1. Run `npm run build`.
2. Upload all files from `dist/` to `public_html/`.
3. Ensure `public_html/api/send-demo-request.php` and `public_html/api/config.php` exist on the server.

The frontend submits to `/api/send-demo-request.php`.
