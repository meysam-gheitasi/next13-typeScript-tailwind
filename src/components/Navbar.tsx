import NavMenu from "./NavMenu";


function Navbar() {
  return (
    <nav className='flex-center  w-full fixed z-50 top-0 border border-b-2 border-black-200 text-white'>
      <div className='flex-between mx-auto w-full  max-w-screen-2xl px-6 py-3 md:px-8 sm:px-16'>
        <NavMenu />
        <div className="relative hover:cursor-pointer">
          <input className="w-96 py-3 px-2 mt-2 hover:cursor-pointer placeholder:text-sm rounded-md bg-black-300 border-none outline-none  placeholder-gray-500 italic mb-4" type="text" placeholder="جستجو فیلم ؟" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 absolute top-5 left-1 text-gray-500">
            <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
          </svg>
        </div>

      </div>
    </nav>
  )
}

export default Navbar