import '../styles/css/globals.css';
import '../styles/scss/styles.scss';

import { store } from '../redux/store';
import { Provider } from 'react-redux';
import ToasterContainer from '../components/ToasterContainer';

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <ToasterContainer />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
