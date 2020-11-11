
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
    return(
        <>
            <Navbar></Navbar>
            <Component {...pageProps} />
            <h1>Footer</h1>
        </>
    
    )
  }
  

  
  export default MyApp