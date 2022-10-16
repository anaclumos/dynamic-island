import type { AppProps } from 'next/app'
import 'tailwindcss/tailwind.css'

const App = ({ Component, pageProps }: AppProps) => <Component {...pageProps} />

export default App
