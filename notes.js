/**
 * Fetching Data
 * 
 * Using Server Components to fetch data
 * 
 * By default, Next.js applications use React Server Components. Fetching data with Server Components is a relatively new approach and there are a few benefits of using them:
 * 
 * Server Components support JavaScript Promises, providing a solution for asynchronous tasks like data fetching natively. You can use async/await syntax without needing useEffect, useState or other data fetching libraries.
 * 
 * Server Components run on the server, so you can keep expensive data fetches and logic on the server, only sending the result to the client.
 * 
 * Since Server Components run on the server, you can query the database directly without an additional API layer. This saves you from writing and maintaining additional code.
 *
 * 
 * Note: you should not query your database directly when fetching data on the client as this would expose your database secrets.
 * 
 * >>> one advantage of using React Server Components to fetch data?
 * They allow you to query the database directly from the server without an additional API layer.
 * 
 * 
 * 
 */


/**
 * 
 * What is streaming?
Streaming is a data transfer technique that allows you to break down a route into smaller "chunks" and progressively stream them from the server to the client as they become ready.
 */

/**
 * Debouncing
 * 
 * Debouncing is a programming practice that limits the rate at which a function can fire. In our case, you only want to query the database when the user has stopped typing.

How Debouncing Works:

Trigger Event: When an event that should be debounced (like a keystroke in the search box) occurs, a timer starts.
Wait: If a new event occurs before the timer expires, the timer is reset.
Execution: If the timer reaches the end of its countdown, the debounced function is executed.
 */

/**
 * I just implemented search and pagination using URL search params and Next.js APIs.
 * To summarize, in this chapter:

You've handled search and pagination with URL search parameters instead of client state.
You've fetched data on the server.
You're using the useRouter router hook for smoother, client-side transitions.
These patterns are different from what you may be used to when working with client-side React, but hopefully, you now better understand the benefits of using URL search params and lifting this state to the server.
 */