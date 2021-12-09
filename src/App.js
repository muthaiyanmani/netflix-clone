import React from 'react' 
import Rows from './Rows';

import requests from './requests'
import NavBar from './NavBar';
import Banner from './Banner';
import './App.css'
function App() {
  return (
    <div className="App">

      <NavBar/>
      <Banner/>
      <Rows title="Netflix Originals" isLargeRow={true} fetchUrl={requests.fetchNetflixOriginals}/>
      <Rows title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Rows title="Top Rated" fetchUrl={requests.fetchTopRated}/>
      <Rows title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Rows title="Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
      <Rows title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Rows title="Romantic Movies" fetchUrl={requests.fetchRomanceMovies}/>
      <Rows title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
        <p style={{color:"white",textAlign:"center",padding:"1%"}}>Made with 💖 by <a style={{textDecoration:"none",color:"white"}} href="https://www.linkedin.com/in/muthaiyanmani" target={'_blank'} rel="noreferrer">muthaiyanmani</a></p>
    </div>
  );
}

export default App;
