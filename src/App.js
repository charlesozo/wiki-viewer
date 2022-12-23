import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import { Routes, Route } from 'react-router-dom';
import { Context } from './components/context';
import OutputSearch from './components/OutputSearch';
import {FaWikipediaW} from "react-icons/fa"
function App() {
  return (
    <Context>
      <div className='wiki'>
      <a href="https://en.wikipedia.org/wiki/Main_Page" alt="" rel='noreferrer noopenner' target="_blank"><FaWikipediaW className='wiki-icon'/></a>
      </div>
      <Routes>
        <Route exact path='/' element={<Search />}></Route>
        <Route path='search' element={<OutputSearch />}></Route>
      </Routes>
       </Context>
  );
}

export default App;
