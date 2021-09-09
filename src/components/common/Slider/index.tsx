import React, {FC, useState, useEffect, useRef} from 'react';
import axios from '../../../api/api';
import styles from './Slider.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'

interface SliderProps {
  isLargeRow?: boolean,
  title: string,
  url: string
}

const Slider: FC<SliderProps> = ({isLargeRow, title, url}) => {
  const base_url = "https://image.tmdb.org/t/p/original/";
  const [trendingMovie, setTrendingMovie] = useState([] as any[]);
  const ref = useRef<null | HTMLDivElement>(null);

  useEffect(()=>{

    async function fetchData(){
      const res = await axios.get(
        url, 
        {
          params: { api_key: process.env.REACT_APP_API_KEY }
        });
      setTrendingMovie(res.data.results)
    }
    fetchData();
  }, [url]);

  const scrollPlus = (scrollOffset: number) => {
      ref!.current!.scrollLeft += scrollOffset;
  };
  
  const scrollMinus = (scrollOffset: number) => {
    ref!.current!.scrollLeft -= scrollOffset;
};

  return (
    <section className={styles.row}>
      <h2>{title}</h2>
      <div className={styles.slider}>
        <div className={styles.row__posters} ref={ref}>
          <div className={styles.slider__arrowleft} onClick={()=> scrollMinus(window.innerWidth-80)}>
            <span className={styles.arrow}>
              <FontAwesomeIcon icon={faChevronLeft} />
            </span>
          </div>
          {trendingMovie.map(movie=>(
            <img 
              key={movie.id}
              className={` ${styles.row__poster} ${isLargeRow && styles.row__posterLarge }`} 
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}/>
          ))};
          <div className={styles.slider__arrowright} onClick={()=> scrollPlus(window.innerWidth-80)}>
            <span className={styles.arrow}>
            <FontAwesomeIcon icon={faChevronRight} />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Slider;