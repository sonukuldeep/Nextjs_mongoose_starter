import Link from 'next/link'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'mongoose nextjs 13',
  description: 'app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={`${inter.className} max-w-7xl mx-auto text-slate-500`}>
        <header className='flex gap-2'>
          <Link className='border border-slate-400 py-1 px-3 rounded my-2 text-slate-500 hover:shadow-lg transition-all active:bg-slate-500 active:text-slate-100' href={'/'}>Home</Link>
          <Link className='border border-slate-400 py-1 px-3 rounded my-2 text-slate-500 hover:shadow-lg transition-all active:bg-slate-500 active:text-slate-100' href={'/app'}>App</Link>
        </header>
        {children}</body>
    </html>
  )
}
