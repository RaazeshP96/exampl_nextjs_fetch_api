import {Container} from 'next/app'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
    return(
        <Container>
            <Navbar></Navbar>
            <Component {...pageProps} />
            <h1>Footer</h1>
        </Container>
    
    )
  }
  

  
  export default MyApp