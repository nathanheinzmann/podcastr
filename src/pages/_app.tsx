import '../styles/global.scss'
import { Header } from '../components/Header';
import styles from '../styles/app.module.scss';
import { Playerrr } from '../components/Player';

function MyApp({ Component, pageProps }) {
  return(
    <div className={styles.wrapper}>
      <main>
        <Header />
        <Component {...pageProps} />
      </main>
      <Playerrr />
    </div>
  );
  
}

export default MyApp
