import React from 'react';
import styles from './App.module.scss';
import Navbar from '../Navbar';
import Banner from '../Banner';
import Slider from '../Slider';

const App = () => {
  return (
    <div className={styles.App}>
      <Navbar />
      <Banner />
      <Slider />
    </div>
  );
}

export default App;