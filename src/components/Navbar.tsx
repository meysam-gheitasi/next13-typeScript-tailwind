import Link from "next/link";
import NavMenu from "./NavMenu";


function Navbar() {
  return (
    <nav className='flex-center  w-full fixed z-50 top-0 border border-b-2 border-black-200 text-white bg-black-100'>
      <div className='flex-between mx-auto w-full  max-w-screen-2xl px-6 py-3 md:px-8 sm:px-16'>
        <div className='flex-center pb-4 px-2 gap-x-6'>
          <Link href='/' className="flex-center max-md:hidden body-text !font-bold gap-x-1">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5  text-clip">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z" />
            </svg>
            <span>
              حساب کاربری
            </span>
          </Link>
          <span className='block max-md:hidden text-gradient_blue-purple !font-bold'>
            <Link href="*" target='_blank' className="flex-center gap-x-1">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-clip">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9" />
              </svg>
              <span>
                ورود
              </span>
            </Link>
          </span>
        </div>

        <NavMenu />

        {/* InputBox */}

        <div className=" w-64 max-md:w-96 relative hover:cursor-pointer">
          <input className="w-full  py-3 px-2 mt-2 hover:cursor-pointer placeholder:text-sm rounded-md bg-black-200 border border-indigo-400 outline outline-1 outline-indigo-900     focus:outline-indigo-500 placeholder-gray-500 italic mb-4" type="text" placeholder="جستجو فیلم ؟" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 absolute top-5 left-1 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>

      </div>
    </nav>
  )
}

export default Navbar