import Link from 'next/link'
import { options } from '../api/auth/[...nextauth]/options'
import { getServerSession } from "next-auth/next"

const Home = async () => {
    const session = await getServerSession(options)

    if (session) {
        return (
            <>
                <h1>Signed in as {session?.user?.email}</h1>
                <p>This is protected route and is only rendered after successful sign in</p>
                <p>Checkout api/../route.tsx for next-auth configuration</p>
                <Link href='api/auth/signout' className='bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-3 my-2 border border-blue-500 rounded'>Sign out</Link>
            </>
        )
    } else
        return (
            <div>
                <h1>Protected route</h1>
                <h2>Sign in to access protected page</h2>
                <p>This page is shown when the user is not logged in</p>
                <p>This also protects data from unauthorized users</p>
                <p>Once signed in, useful data is rendered as required</p>
                <Link href='api/auth/signin' className='bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-3 my-2 border border-green-500 rounded'>Sign in</Link>
            </div>
        )
}

export default Home 