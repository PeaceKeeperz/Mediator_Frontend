













import '../styles/globals.css'
import Layout from '../components/layout/Layout';
 
function MyApp({ Component, pageProps }) {

  return (
    
      <Component {...pageProps} />
   
  );
}

export default MyApp



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
