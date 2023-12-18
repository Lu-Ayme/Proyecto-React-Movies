import './assets/css/app.css'

import SideBar from './components/SideBar'
import ContentWrapper from './components/ContentWrapper'
import ContentRowMovies from "./components/ContentRowMovies";
import SearchMovies from './components/SearchMovies';
import LastMovieInDB from './components/LastMovieInDb';
import GenresInDb from './components/GenresInDb';
import Error404 from './components/Error404'

import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <div id="wrapper">
        <SideBar />

        <Routes>
          <Route path='/' element={<ContentWrapper />} />
          <Route path='/lastMovieInDB' element={<LastMovieInDB />} />
          <Route path='/tables' element={<ContentRowMovies />} />
          <Route path='/genresInDb' element={<GenresInDb />} />
          <Route path='/search' element={<SearchMovies />} />
          <Route element={<Error404 />} />
        </Routes>

      </div>
    </>
  )
}

export default App
