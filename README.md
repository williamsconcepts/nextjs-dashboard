## Next.js App Router Course - Starter

This is the starter template for the Next.js App Router Course. It contains the starting code for the dashboard application.

For more information, see the [course curriculum](https://nextjs.org/learn) on the Next.js Website.

## Chapter 1 - Getting started

> npm install -g pnpm

> npx create-next-app@latest nextjs-dashboard --example "https://github.com/vercel/next-learn/tree/main/dashboard/starter-example" --use-pnpm

> cd nextjs-dashboard

## Chapter 2 CSS Styling

Currently, your home page doesn't have any styles. Let's look at the different ways you can style your Next.js application.

In this chapter...

Here are the topics we'll cover

How to add a global CSS file to your application.

Two different ways of styling: Tailwind and CSS modules.

How to conditionally add class names with the clsx utility package.

## Chapter 3 Optimizing Fonts and Images

In the previous chapter, you learned how to style your Next.js application. Let's continue working on your home page by adding a custom font and a hero image.

In this chapter...

Here are the topics we'll cover

How to add custom fonts with next/font.

How to add images with next/image.

How fonts and images are optimized in Next.js.

## Chapter 4 Creating Layouts and Pages

So far, your application only has a home page. Let's learn how you can create more routes with layouts and pages.

In this chapter...

Here are the topics we'll cover

Create the dashboard routes using file-system routing.

Understand the role of folders and files when creating new route segments.

Create a nested layout that can be shared between multiple dashboard pages.

Understand what colocation, partial rendering, and the root layout are.

## Somethings to NOTE

- /app: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
- /app/lib: Contains functions used in your application, such as reusable utility functions and data fetching functions.
- /app/ui: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
- /public: Contains all the static assets for your application, such as images.
- Config Files: You'll also notice config files such as next.config.ts at the root of your application. Most of these files are created and pre-configured when you start a new project using create-next-app. You will not need to modify them in this course.
