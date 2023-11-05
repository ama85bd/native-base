import Toast from 'react-native-toast-message';
import Layout from './layout/Layout';
// import { StatusBar } from 'expo-status-bar';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Footer from './components/footer/Footer';
import { StatusBar } from 'react-native';

export default function App() {
  return (
    <>
      {/* <StatusBar style='light' /> */}
      <StatusBar barStyle='light-content' backgroundColor='#4b1d03' />
      <Provider store={store}>
        <Layout />
        {/* <Footer /> */}
      </Provider>
      <Toast />
    </>
  );
}
