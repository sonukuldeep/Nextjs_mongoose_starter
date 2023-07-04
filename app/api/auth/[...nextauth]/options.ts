import type { NextAuthOptions } from 'next-auth'
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from 'next-auth/providers/credentials'

export const options: NextAuthOptions = {
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                username: {
                    label: "Username:",
                    type: "text",
                    placeholder: "Enter-username"
                },
                password: {
                    label: "Password:",
                    type: "password",
                    placeholder: "Enter-password"
                }
            },
            async authorize(credentials) {
                // This is where you need to retrieve user data 
                // to verify with credentials
                // Docs: https://next-auth.js.org/configuration/providers/credentials
                const user = { id: "42", name: "hello world", password: "qwerty" }

                if (credentials?.username === user.name && credentials?.password === user.password) {
                    return user
                } else {
                    return null
                    // maybe create a log for false login
                }
            }
        }),
    ],
    // https://next-auth.js.org/configuration/callbacks#redirect-callback
    // at the moment redirect has some issue hence using this
    callbacks: {
        async redirect({ url, baseUrl }) {
            // Allows relative callback URLs
            // if (url.startsWith("/")) return `${baseUrl}${url}`
            // Allows callback URLs on the same origin
            // else if (new URL(url).origin === baseUrl) return url
            return baseUrl
        }
    }

}