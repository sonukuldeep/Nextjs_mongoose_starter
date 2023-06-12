"use client";

import { SessionProvider } from 'next-auth/react';
import { Session } from "next-auth";

interface AppPropsWithSession {
  session?: Session;
  children: React.ReactNode
}

const Provider = ({ children, session }: AppPropsWithSession) => {
  return (
    <SessionProvider session={session}>
      {children}
    </SessionProvider>
  )
}

export default Provider;