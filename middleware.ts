// Without a defined matcher, this one line applies next-auth 
// to the entire project
// https://next-auth.js.org/configuration/nextjs#basic-usage
export { default } from "next-auth/middleware"

// Applies next-auth only to matching routes - can be regex
// Ref: https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
// export const config = { matcher: ["/extra",] }
export const config = { matcher: ['/protected-by-nextjs'] }