import NextAuth from "next-auth"
import GoogleProvider from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      // login prompts is not skipped when this is set. Not recommended by next auth
      // authorization: {
      //   params: {
      //     prompt: "consent",
      //     access_type: "offline",
      //     response_type: "code"
      //   }
      // }
    })
  ],
  callbacks: {
    async session({ session }) {
      // console.log(session)
      return session;
    },
    async signIn({ account, profile, user, credentials }) {
      try {
        if (account.provider === "google") {
          const { email, email_verified, name } = profile
          // console.log(email, email_verified, name, user)
          // do something like register user to db
          const allowedEmails = process.env.ALLOWEDEMAILS.split(',')

          if (allowedEmails.includes(user.email))
            return true
          else
            return false
        }

        return false
      } catch (error) {
        console.log("Error checking if user exists: ", error.message);
        return false
      }
    },
  }
})

export { handler as GET, handler as POST }