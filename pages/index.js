import Head from 'next/head'
import Image from 'next/image'
import About from '../components/about/About'
import Hero from '../components/HeroSection/Hero'
import Process from '../components/Process/Process'
import Want from '../components/Want/Want'
import When from '../components/When/When'
import Layout from '../components/layout/Layout';


export default function Home() {
  return (
    
      <Layout>
      <Hero/>
       <About/>
       <When/>
       <Process/>
       <Want/>
       </Layout>
      
  )
}



/* import '../styles/globals.css'
import Layout from '../components/layout/Layout';
 
function MyApp({ Component, pageProps }) {

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp


*/
