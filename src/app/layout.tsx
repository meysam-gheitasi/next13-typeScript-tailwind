import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'FilmDezCom',
  description: 'The Move Films Web Seit',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa">
      <body dir='rtl' className=" min-h-screen bg-black-100 font-poppins right">{children}</body>
    </html>
  )
}
