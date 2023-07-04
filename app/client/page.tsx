'use client'
// Remember you must use an AuthProvider for 
// client components to useSession
import { useSession } from 'next-auth/react'
import { redirect } from 'next/navigation'


export default function ClientPage() {
    const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
            redirect('/api/auth/signin?callbackUrl=/client')
        }
    })

    return (
        <section className="flex flex-col gap-6">
            <h2>Hello world</h2>
            {session?.user && <p>Logged in as {session?.user.name}</p>}
            <p>This is the next-auth client component</p>
        </section>
    )
}