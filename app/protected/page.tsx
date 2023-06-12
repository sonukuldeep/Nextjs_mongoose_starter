"use client"

import { useSession, signIn, signOut } from "next-auth/react"

const Home = () => {
    const { data: session } = useSession()

    if (session) {
        return (
            <>
                <h1>Signed in as {session?.user?.email}</h1>
                <p>This is protected component and is only rendered after successful sign in</p>
                <p>Checkout api/../route.tsx for next-auth configuration</p>
                <button className='bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-3 my-2 border border-blue-500 rounded' onClick={() => signOut()}>Sign out</button>
            </>
        )
    } else
        return (
            <div>
                <h1>Protected page</h1>
                <h2>Sign in to access protected page</h2>
                <p>This page is shown when the user is not logged in</p>
                <p>This also protects data from unauthorized users</p>
                <p>Once signed in, useful data is rendered as required</p>
                <button className='bg-green-400 hover:bg-green-500 text-white font-bold py-1 px-3 my-2 border border-green-500 rounded' onClick={() => signIn()}>Sign in</button>
            </div>
        )
}

export default Home 