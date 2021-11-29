import React from 'react';
import Navbar from '../Navbar';
import Banner from '../Banner';
import Footer from '../Footer';
import requests from '../../../api/requests';
import Slider from '../Slider';

const App = () => {

  return (
    <div>
      <Navbar />
      <Banner url={requests.discoverMovie} />
      <Slider
        title="Entertainment Movie Originals"
        url={requests.netflixOriginals}
        isLargeRow 
      />
      <Slider
        title="Trending Now"
        url={requests.trending}
      />
      <Slider
        title="Top Rated"
        url={requests.topRated}
      />
      <Slider
        title="Action Movies"
        url={requests.actionMovies}
      />
      <Slider
        title="Comedy Movies"
        url={requests.comedyMovies}
      />
      <Slider
        title="Horror Movies"
        url={requests.horrorMovies}
      />
      <Slider
        title="Romance Movies"
        url={requests.romanceMovies}
      />
      <Slider
        title="Documentaries"
        url={requests.documentaries}
      />
      <Footer />
    </div>
  );
}

export default App;