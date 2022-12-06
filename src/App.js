import './App.css';
import { Banner } from './components/navBar/Banner/Banner';
import { Navbar } from './components/navBar/navBar';
import { Rowpost } from './components/navBar/RowPost/Rowpost';
import {base,api_key,action,horror,comedy, romance, docs} from "./constants"

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <Rowpost title="Netflix Originals" link={`${base}/discover/tv?api_key=${api_key}&with_networks=213`}/>
      <Rowpost title="Action" isSmall link={action}/>
      <Rowpost title="Horror" isSmall  link={horror}/>
      <Rowpost title="Comedy movies" isSmall link={comedy}/>
      <Rowpost  title="RomanceMovies" isSmall link={romance}/>
      <Rowpost  title="Documentaries" isSmall link={docs}/>
    </div>
  );
}

export default App;
