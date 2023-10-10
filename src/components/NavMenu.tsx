import Link from 'next/link'
import Image from 'next/image'

function NavMenu() {
  return (
    <div className="max-[960px]:hidden flex justify-between">
      <Image src="/hamburger-menu.svg" width={30} height={30} alt='hamburger-menu' className=' block md:hidden'
      />
      <ul className='flex-center gap-x-3 max-md:hidden md:gap-x-10 ul-nav'>
        <li className='body-text !font-normal relative group overflow-hidden ul-nav-hover'>
          <Link className='flex-center' href="*" target='_blank'>
            فیلم خارجی
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Link>
          <ul className='sub-menu  opacity-0 group-hover:opacity-100  group-hover:translate-y-10 duration-200 ul-nav-sub'>
            <li className=''>
              <Link href="*" target='_blank'>
                اکشن
              </Link>
            </li>
            <li className=''>
              <Link href="*" target='_blank'>
                ترسناک
              </Link>
            </li>
            <li>
              <Link href="*" target='_blank'>
                هندی
              </Link>
            </li>
            <li>
              <Link href="*" target='_blank'>
                عاشقانه
              </Link>
            </li>
            <li>
              <Link href="*" target='_blank'>
                جنگی
              </Link>
            </li>
            <li>
              <Link href="*" target='_blank'>
                کمدی
              </Link>
            </li>
            <li>
              <Link href="*" target='_blank'>
                درام
              </Link>
            </li>
            <li>
              <Link href="*" target='_blank'>
                هیجان انگیز
              </Link>
            </li>
            <li>
              <Link href="*" target='_blank'>
                جنایی
              </Link>
            </li>
            <li>
              <Link href="*" target='_blank'>
                حادثه
              </Link>
            </li>
            <li>
              <Link href="*" target='_blank'>
                تخیلی
              </Link>
            </li>
            <li>
              <Link href="*" target='_blank'>
                قدیمی
              </Link>
            </li>
          </ul>
        </li>
        <li className='body-text !font-normal relative group'>
          <Link className='flex-center' href="*" target='_blank'>
            فیلم ایرانی
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Link>
          <ul className='sub-menu  opacity-0 group-hover:opacity-100 group-hover:translate-y-10 duration-200 ul-nav-sub'>
            <li>
              <Link href="*" target='_blank'>
                سینمایی
              </Link>
            </li>
            <li>
              <Link href="*" target='_blank'>
                سریال
              </Link>
            </li>
          </ul>
        </li>
        <li className='body-text !font-normal relative group'>
          <Link className='flex-center' href="*" target='_blank'>
            سریال
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </Link>
          <ul className='sub-menu w-20 opacity-0 group-hover:opacity-100 group-hover:translate-y-10 duration-200 ul-nav-sub'>
            <li>
              <Link href="*" target='_blank'>
                سریال ایرانی
              </Link>
            </li>
            <li>
              <Link href="*" target='_blank'>
                سریال خارجی
              </Link>
            </li>
          </ul>
        </li>
        <li className='body-text !font-normal'>             <Link className='flex-center' href="*" target='_blank'>

        </Link>
        </li>
      </ul>
    </div>
  )
}

export default NavMenu