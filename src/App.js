import "./App.css";
import requests from "./request";
import Row from "./Row";
import Banner from "./Banner.js";
import Navbar from "./Navbar";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Row
        title={"NETFLIX ORIGINAL"}
        isLargeRow={true}
        fetchURL={requests.fetchNetflixOriginals}
      />
      <Row title={"Trending Now"} fetchURL={requests.fetchTrending} />
      <Row title={"Top Rated"} fetchURL={requests.fetchTopRated} />
      <Row title={"Action Movies"} fetchURL={requests.fetchActionMovies} />
      <Row title={"Comedy Movies"} fetchURL={requests.fetchComedyMovies} />
      <Row title={"Horror Movies"} fetchURL={requests.fetchHorrorMovies} />
      <Row title={"Romance Movies"} fetchURL={requests.fetchRomanceMovies} />
      <Row title={"Documentaries"} fetchURL={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
