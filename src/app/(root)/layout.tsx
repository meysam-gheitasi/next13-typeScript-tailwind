import Footer from "@/components/Footer"
import Navbar from "@/components/Navbar"

function layout({ children }: { children: React.ReactNode}) {
  return (
    <>
    <Navbar />
    {children}
    <Footer />
    </>
  )
}

export default layout