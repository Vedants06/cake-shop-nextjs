# Cake Shop – Full Stack Web Application

A modern full-stack Cake Shop web application built using **Next.js**,  
**TypeScript**, **Tailwind CSS**, **Prisma**, **PostgreSQL**, and **NextAuth.js**.

This project demonstrates secure authentication, database integration, and a scalable project structure suitable for real-world applications.

---

## Features

- User authentication using **NextAuth.js**
- Secure session handling and protected routes
- Database integration with **PostgreSQL**
- ORM-based database access using **Prisma**
- Modern UI built with **Tailwind CSS**
- Fully responsive design
- Server-side API routes using Next.js App Router
- Clean and scalable folder structure

---

## Tech Stack

**Frontend**
- Next.js 
- TypeScript
- Tailwind CSS

**Backend**
- Next.js API Routes
- Prisma ORM

**Authentication**
- NextAuth.js

**Database**
- PostgreSQL

---

## Project Structure

```txt
my-app/
├── app/              # App Router pages and API routes
├── components/       # Reusable UI components
├── hooks/            # Custom React hooks
├── lib/              # Utility and helper functions
├── prisma/           # Prisma schema and migrations
├── public/           # Static assets
├── types/            # TypeScript type definitions
├── package.json
└── README.md
```

## Environment Variables

Create a .env file in the root directory using the example below:

- DATABASE_URL=
- NEXTAUTH_SECRET=

## Getting Started 

*Clone the repository*
- git clone https://github.com/vedants06/cake-shop-nextjs.git
- cd cake-shop-nextjs

*Install dependencies*
- npm install

*Setup Prisma*
- npx prisma generate
- npx prisma migrate dev

*Run the development server*
- npm run dev