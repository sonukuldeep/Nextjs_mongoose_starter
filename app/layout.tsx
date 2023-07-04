import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './components/Provider'
import { Goto } from './components/Goto'
import connectMongo from '@/utils/mongoose'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'mongoose nextjs 13',
  description: 'app',
}

async function connectMongodb() {
  'use server'
  try {
    await connectMongo();
  } catch (error: any) {
    console.error(error.message)
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  connectMongodb()
  return (
    // provider is not needed if auth is handled on server
    // check /client to see the code for client component 
    // <Provider>
    <html lang="en">
      <body className={`${inter.className} max-w-7xl mx-auto text-slate-500`}>
        <Header />
        {children}
      </body>
    </html>
    // </Provider>
  )
}

function Header() {
  return (
    <header className='flex gap-2'>
      <Goto path='/' text='Home' />
      <Goto path='/create' text='Create db entry' />
      <Goto path='/protected' text='Go to Protected page' />
      <Goto path='/protected-two' text='Go to Protected page 2' />
      <Goto path='/protected-by-nextjs' text='Go to Protected page 3' />
      <Goto path='api/auth/signout' text='logout' />
    </header>
  )
}
