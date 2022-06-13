import '../styles/globals.css'
import SizeObserver from '../utils/size-observer'

function MyApp({ Component, pageProps }) {
  return (
    <SizeObserver>
      <Component {...pageProps} />
    </SizeObserver>
  )
}

export default MyApp
