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