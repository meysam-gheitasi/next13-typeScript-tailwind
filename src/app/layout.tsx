import './globals.css'
import type { Metadata } from 'next'
import localFont from 'next/font/local'

export const metadata: Metadata = {
  title: 'FilmDezCom',
  description: 'The Move Films Web Seit',
}

const vazirFont = localFont({
  src: '../../public/fonts/Vazirmatn-Regular.woff2'
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fa" className={vazirFont.className}>
      <body dir='rtl' className="bg-black-100">{children}</body>
    </html>
  )
}
