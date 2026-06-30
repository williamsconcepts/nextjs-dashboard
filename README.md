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

## Chapter 5

Navigating Between Pages
In the previous chapter, you created the dashboard layout and pages. Now, let's add some links to allow users to navigate between the dashboard routes.

In this chapter..

Here are the topics we'll cover

How to use the next/link component.

How to show an active link with the usePathname() hook.

How navigation works in Next.js.




## Chapter 6

Setting Up Your Database


## Chapter 7

Fetching Data
Now that you've created and seeded your database, let's discuss the different ways you can fetch data for your application, and build out your dashboard overview page.

In this chapter...

Here are the topics we'll cover

Learn about some approaches to fetching data: APIs, ORMs, SQL, etc.

How Server Components can help you access back-end resources more securely.

What network waterfalls are.

How to implement parallel data fetching using a JavaScript Pattern.


Note: you should not query your database directly when fetching data on the client as this would expose your database secrets.


## Chapter 8

Static and Dynamic Rendering
In the previous chapter, you fetched data for the Dashboard Overview page. However, we briefly discussed two limitations of the current setup:

The data requests are creating an unintentional waterfall.
The dashboard is static, so any data updates will not be reflected on your application.
In this chapter...

Here are the topics we'll cover

What static rendering is and how it can improve your application's performance.

What dynamic rendering is and when to use it.

Different approaches to make your dashboard dynamic.

Simulate a slow data fetch to see what happens.

## Chapter 9

Streaming

Let's look at how you can improve the user experience when there are slow data requests.

In this chapter...

Here are the topics we'll cover

What streaming is and when you might use it.

How to implement streaming with loading.tsx and Suspense.

What loading skeletons are.

What Next.js Route Groups are, and when you might use them.

Where to place React Suspense boundaries in your application.

## Chapter 10

Adding Search and Pagination

Now let's move on to the /invoices page, and learn how to add search and pagination.

In this chapter...

Here are the topics we'll cover

Learn how to use the Next.js APIs: useSearchParams, usePathname, and useRouter.

Implement search and pagination using URL search params.


## Chapter 11

Mutating Data

Let's continue working on the Invoices page by adding the ability to create, update, and delete invoices!

In this chapter...

Here are the topics we'll cover


What React Server Actions are and how to use them to mutate data.

How to work with forms and Server Components.

Best practices for working with the native FormData object, including type validation.

How to revalidate the client cache using the revalidatePath API.

How to create dynamic route segments with specific IDs.

## Chapter 12

Handling Errors
Let's see how you can handle errors gracefully using JavaScript's try/catch statements and Next.js APIs for uncaught exceptions.

In this chapter...

Here are the topics we'll cover

How to use the special error.tsx file to catch errors in your route segments, and show a fallback UI to the user.

How to use the notFound function and not-found file to handle 404 errors (for resources that don’t exist).


## Chapter 13

Improving Accessibility
In the previous chapter, we looked at how to catch errors (including 404 errors) and display a fallback to the user. However, we still need to discuss another piece of the puzzle: form validation. Let's see how to implement server-side validation with Server Actions, and how you can show form errors using React's useActionState hook - while keeping accessibility in mind!

How to use eslint-plugin-jsx-a11y with Next.js to implement accessibility best practices.

How to implement server-side form validation.

How to use the React useActionState hook to handle form errors, and display them to the user.


## Chapter 14

Adding Authentication
In the previous chapter, you finished building the invoices routes by adding form validation and improving accessibility. In this chapter, you'll be adding authentication to your dashboard.

In this chapter...

Here are the topics we'll cover

What is authentication.


How to add authentication to your app using NextAuth.js.

How to use Proxy to redirect users and protect your routes.


How to use React's useActionState to handle pending states and form errors.

## Somethings to NOTE

- /app: Contains all the routes, components, and logic for your application, this is where you'll be mostly working from.
- /app/lib: Contains functions used in your application, such as reusable utility functions and data fetching functions.
- /app/ui: Contains all the UI components for your application, such as cards, tables, and forms. To save time, we've pre-styled these components for you.
- /public: Contains all the static assets for your application, such as images.
- Config Files: You'll also notice config files such as next.config.ts at the root of your application. Most of these files are created and pre-configured when you start a new project using create-next-app. You will not need to modify them in this course.
