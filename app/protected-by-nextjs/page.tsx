import Link from 'next/link'

const Home = async () => {

    return (
        <>
            <h1>Hi there</h1>
            <p>Its the third way in which next auth with nextjs middleware protects route</p>
            <p>Checkout api/../route.tsx and middleware.ts for next-auth configuration</p>
            <Link href='api/auth/signout' className='bg-blue-400 hover:bg-blue-500 text-white font-bold py-1 px-3 my-2 border border-blue-500 rounded'>Sign out</Link>
        </>
    )

}

export default Home 