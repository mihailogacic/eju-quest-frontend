# EJU QUEST – Frontend (React + TypeScript + Vite)

Frontend of the EJU QUEST application, built with React 19, TypeScript, Vite, and MUI components. It talks to the backend via REST API and uses JWT tokens for authentication.

---

## 1. Tech stack

- React 19 + TypeScript
- Vite
- React Router DOM v7
- @tanstack/react-query
- Axios
- MUI (Material UI)
- react-hook-form + zod
- zustand (auth state)

---

## 2. Running locally

### 2.1. Prerequisites

- Node.js 18+ (recommended)
- npm or yarn (this project uses npm)
- Backend running (default: `http://localhost:8000`)

### 2.2. Install dependencies

```bash
cd eju-quest-frontend
npm install
```

### 2.3. Environment configuration (`.env`)

The frontend uses Vite and reads the backend URL from `VITE_BACKEND_URL`. Create a `.env` file in the frontend project root (`eju-quest-frontend`):

```env
VITE_BACKEND_URL=http://localhost:8000/api/v1
```

This value is used in `src/api/axios-instance.tsx`:

```typescript
const BASE_URL = import.meta.env.VITE_BACKEND_URL;
```

If the backend uses a different host, port, or prefix, update `VITE_BACKEND_URL` accordingly.

### 2.4. Run the dev server

```bash
npm run dev
```

Vite will print the URL, e.g.:

- `http://localhost:5173/`

Open that URL in your browser.

---

## 3. Build and production

### 3.1. Build

```bash
npm run build
```

Output goes to the `dist/` folder and can be served by any static server (e.g. nginx, S3 + CloudFront).

### 3.2. Preview production build locally

```bash
npm run preview
```

This runs a Vite server that serves the `dist/` output so you can test the production build locally.

---

## 4. Authentication and API calls

- JWT tokens (`access_token`, `refresh_token`) are returned by the backend at `/auth/login/`.
- The frontend stores `access_token` in `localStorage` and adds `Authorization: Bearer <token>` to all requests via `axiosInstance`:

```typescript
axiosInstance.interceptors.request.use((config) => {
  const token = localStorage.getItem('access_token');
  if (token) {
    config.headers = {
      ...config.headers,
      Authorization: `Bearer ${token}`,
    };
  }
  return config;
});
```

- Server state is handled with `@tanstack/react-query` (hooks in `src/hooks/*`); forms and validation use `react-hook-form` + `zod` (`src/utils/validation.tsx`).

---

## 5. Main routes

Key routes (defined in `src/App.tsx`):

- `/` – landing page
- `/sign-in`, `/sign-up` – login and registration
- `/admin` – parent dashboard
- `/add-topic` – create new lesson (AI generation)
- `/pending-content`, `/pending-content/:id` – review and approve lessons
- `/explore-topics` – list of approved lessons for children
- `/lesson/:id` – lesson view
- `/quiz/:id` – take quiz
- `/lesson-summary/:id` – submit summary after lesson/quiz

For a full description of user flows, see `info/info-detailed.txt` (section “Frontend – user flows”).
