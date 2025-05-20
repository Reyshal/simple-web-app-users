# Higo Tech Test Frontend

A modern web application built with Next.js 14 and Material-UI, featuring a users management interface.

## Tech Stack

- **Framework**: Next.js 14
- **UI Components**: Material-UI (MUI) v7
- **Styling**: Tailwind CSS
- **Data Fetching**: Axios
- **Charts & Data Grid**: MUI X Charts and Data Grid
- **Icons**: Lucide React

## Features

- Modern UI with Material-UI components
- Responsive design using Tailwind CSS
- Users management interface
- Interactive data grid for user data
- Chart visualization capabilities

## Getting Started

1. Install dependencies:
```bash
npm install
# or
yarn install
```

2. Create a `.env.local` file based on `.env.local.example`:
```bash
cp .env.local.example .env.local
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `/app` - Main application routes and pages
- `/components` - Reusable UI components
- `/lib` - Utility functions and shared logic
- `/app/users` - Users management interface

## Development

The application uses Next.js App Router architecture with server components by default. Client components are marked with "use client" directive when needed.

## Environment Variables

Create a `.env.local` file based on `.env.local.example` to configure environment-specific settings.

## Deployment

The application is built with Next.js and can be deployed to various platforms including Vercel, Netlify, or any other hosting service that supports Node.js applications.
