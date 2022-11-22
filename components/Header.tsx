const Header = () => {
  return (
    <nav className='px-4 py-4 mx-auto text-center md:flex md:items-center md:justify-between md:text-left lg:text-left'>
      <span className='mx-auto text-sm text-center text-gray-500 sm:mx-0'>
        <a href='https://cho.sh/' className='hover:underline' target='_blank' rel='noopener noreferrer'>
          Sunghyun Cho
        </a>
        {' ❤️ '}
        <a href='https://github.com/anaclumos/dynamic-island' className='hover:underline' target='_blank' rel='noopener noreferrer'>
          Open Source
        </a>
      </span>
      <ul className='flex flex-row items-center justify-center mt-4 space-x-4 text-sm text-center text-gray-500 md:flex-row md:mt-0 md:space-y-0 md:space-x-6 md:text-left lg:text-left'>
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
          <a href='https://cho.sh/w/9F7F85' target='_blank' rel='noopener noreferrer'>
            Technical Review (WIP 🚧)
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Header
