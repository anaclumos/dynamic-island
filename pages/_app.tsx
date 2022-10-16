import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'
import Script from 'next/script'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Script src='https://sa.cho.sh/latest.js' />
      <noscript>
        {/* eslint-disable @next/next/no-img-element */}
        <img src='https://sa.cho.sh/noscript.gif' alt='' referrerPolicy='no-referrer-when-downgrade' />
      </noscript>
      <div className='min-h-screen px-6 py-8 mx-auto bg-white shadow-xl dark:bg-slate-800 ring-1 ring-slate-900/5'>
        <div className='max-w-screen-xl mx-auto'>
          <Component {...pageProps} />
        </div>
      </div>
    </>
  )
}

export default App
