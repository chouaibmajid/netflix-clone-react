import "./App.scss";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Banner from "./components/Banner";
import Row from "./components/Row";
import Request from "./components/Request"
function App() {
  return (
    <div className="App">
      <Nav />

      <Banner />
      <Row title="Programmes originaux netflix" url={Request.fetchNetflixOriginals} posted={true} />
      <Row title="TopRated" url={Request.fetchTopRated} />
      <Row title="ActionMovies" url={Request.fetchActionMovies}/>
      <Row title="ComedyMovies" url={Request.fetchComedyMovies}/>
      <Row title="HorrorMovies" url={Request.fetchHorrorMovies}/>
      <Row title="RomanceMovies" url={Request.fetchRomanceMovies}/>
      <Row title="Documentaries" url={Request.fetchDocumentaries}/>
      <Footer />
    </div>
  );
}

export default App;
