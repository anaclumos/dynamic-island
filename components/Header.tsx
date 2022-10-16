import Link from 'next/link'

const Header = () => {
  return (
    <nav className='py-4 mx-auto text-center md:flex md:items-center md:justify-between dark:bg-slate-800 md:text-left lg:text-left'>
      <span className='mx-auto text-sm text-center text-gray-500 dark:text-gray-400 sm:mx-0'>
        <a href='https://cho.sh/' className='hover:underline' target='_blank' rel='noopener noreferrer'>
          Sunghyun Cho
        </a>
        {' ❤️ '}
        <a
          href='https://github.com/anaclumos/B1DFF3'
          className='hover:underline'
          target='_blank'
          rel='noopener noreferrer'
        >
          Open Source
        </a>
      </span>
      <ul className='flex flex-row items-center justify-center mt-4 space-x-4 text-sm text-center text-gray-500 md:flex-row md:mt-0 md:space-y-0 md:space-x-6 dark:text-gray-400 md:text-left lg:text-left'>
        <li className='hover:underline'>
          <a
            href='https://developer.apple.com/design/human-interface-guidelines/components/system-experiences/live-activities'
            target='_blank'
            rel='noopener noreferrer'
          >
            Apple Docs
          </a>
        </li>
        <li className='hover:underline'>
          <a href='https://twitter.com/anaclumos' target='_blank' rel='noopener noreferrer'>
            Twitter
          </a>
        </li>
        <li className='hover:underline'>
          <a href='https://cho.sh' target='_blank' rel='noopener noreferrer'>
            Technical Review
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
