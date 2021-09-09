import React,{FC,useState,useEffect} from 'react';
import axios from '../../../api/api';
import styles from './Banner.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

interface BannerProps {
  url: string
}
const Banner: FC <BannerProps> = ({url}) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [popularMovies,setPopularMovie] = useState([] as any);
  
  useEffect(() => {
    async function fetchData(){
        const request = await axios.get(
          url, 
          {
            params: { api_key: process.env.REACT_APP_API_KEY }
          });
        //Give to our movie hook one of all the movies randomly
        setPopularMovie(request.data.results[0]);
        return request;
    }
    fetchData();
    
  },[url]);

  return (
    <header className={styles.banner} 
    style={{
      backgroundImage : `url(
        "${base_url}${popularMovies.backdrop_path}"
        )`,
      backgroundPosition : "top center",
      backgroundSize: "cover",
    }}>
      <div className={styles.banner__contents}>
        <h1 className={styles.banner__title}>
          {popularMovies.title || popularMovies.name || popularMovies.original_name}
        </h1>
        <div className={styles.banner__buttons}>
          <button className={`${styles.banner__button} ${styles.banner__button__play}`}>
            <FontAwesomeIcon icon={faPlay} />
            <span>Play</span>
          </button>
          <button className={`${styles.banner__button} ${styles.banner__button__info}`}>
            <FontAwesomeIcon icon={faInfoCircle} />
            <span>More Information</span>
          </button>
        </div>
        <p className={styles.banner__description}>{popularMovies.overview}</p>
      </div>
    </header>
  );
}

export default Banner;