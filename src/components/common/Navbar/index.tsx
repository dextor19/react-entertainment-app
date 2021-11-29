import React,{useState,useEffect} from 'react';
import logo from '../../../assets/images/logo.png';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const [show, handleShow] = useState(false);

  useEffect(()=>{
      window.addEventListener("scroll", () =>{
          if(window.scrollY > 50){
              handleShow(true);
          }else{
              handleShow(false);
          }
          
      });
      return () => {
          window.removeEventListener("scroll",()=>{})
      }
  }, [])

  return (
    <nav className={`${styles.nav} ${ show && styles.nav__black}`}>
      <img
                alt="Entertainment Movie logo"
                src={logo}
                className={styles.nav__logo}
            />
    </nav>
  );
}

export default Navbar;