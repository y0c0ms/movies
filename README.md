# Movies

React and Vite app to browse and search movies, save favorites, and rate them out of 10.

Live demo: https://movies-3uo.pages.dev

## Features

- Browse popular movies from The Movie Database (TMDB)
- Search movies by title
- Add and remove movies from your favorites
- Rate favorite movies with a 10-star rating
- Favorites are stored in the browser's localStorage, so they persist across reloads
- Client-side routing between Home and Favorites (React Router)

## Run it

Requires Node.js and npm.

```bash
npm install
npm run dev
```

Other scripts from `package.json`:

```bash
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # run ESLint
```

## Stack

- React 19
- Vite 6
- React Router 7
- react-icons
- ESLint
