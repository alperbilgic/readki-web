import type {ReactNode} from 'react'
import Header from "@/components/layout/header";
import {Footer} from "@/components/layout/footer";

export function Layout({ children, locale }: { children: ReactNode, locale?: string}) {
  return (
    <div className="flex flex-col h-screen mx-auto">
      <Header/>
      {children}
      <Footer/>
    </div>
  )
}
