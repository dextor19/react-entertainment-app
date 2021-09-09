import React,{useState,useEffect} from 'react';
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
                alt="Netflix logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                className={styles.nav__logo}
            />
    </nav>
  );
}

export default Navbar;