import React from 'react';
import styles from './Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter,faTwitch,faFacebookF,faYoutube } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
      <FontAwesomeIcon icon={faTwitter} />
      <FontAwesomeIcon icon={faTwitch} />
      <FontAwesomeIcon icon={faFacebookF} />
      <FontAwesomeIcon icon={faYoutube} />
      </div>
    </footer>
  );
}

export default Footer;