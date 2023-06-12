import './globals.css'
import { Inter } from 'next/font/google'
import Provider from './components/Provider'
import { Goto } from './components/Goto'

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
    <Provider>
      <html lang="en">
        <body className={`${inter.className} max-w-7xl mx-auto text-slate-500`}>
          <Header />
          {children}
        </body>
      </html>
    </Provider>
  )
}

function Header() {
  return (
    <header className='flex gap-2'>
      <Goto path='/' text='Home' />
      <Goto path='/create' text='Create db entry' />
      <Goto path='/protected' text='Go to Protected page' />
    </header>
  )
}
