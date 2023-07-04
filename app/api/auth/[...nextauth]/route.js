// please check the old-way repo to see how i did it earlier to this solution
// This solution works better and i have provided more help in the documentation 
// to address some caveats o next-auth

import NextAuth from 'next-auth/next'
import { options } from './options'

const handler = NextAuth(options)

export { handler as GET, handler as POST }