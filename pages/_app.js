import '../styles/globals.css';
import Layout from '../components/layout/layout';
import { Fragment } from 'react';

function MyApp({ Component, pageProps }) {
  return <Fragment>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </Fragment> 
}

export default MyApp
