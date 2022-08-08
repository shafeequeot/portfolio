import '../styles/globals.css'
import Header from '../components/header'
import { Provider } from 'react-redux';
import store from '../redux/store';
import Footer from '../components/footer'

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>

      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  )



}

export default MyApp
