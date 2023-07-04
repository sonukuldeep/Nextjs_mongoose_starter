import { options } from "../api/auth/[...nextauth]/options"
import { getServerSession } from "next-auth/next"
import Link from 'next/link'
import { redirect } from "next/navigation"

const Home = async () => {
    const session = await getServerSession(options)

    if (!session) {
        redirect('/api/auth/signin?callbackUrl=/server')
    }

    return (
        <>
            <h1>Signed in as {session?.user?.email}</h1>
            <p>This is protected route too and this msg is only rendered if user is logged in</p>
            <p>Checkout api/../route.tsx for next-auth configuration</p>
            <Link href='api/auth/signout' className='bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-3 my-2 border border-blue-500 rounded'>Sign out</Link>
        </>
    )

}

export default Home 