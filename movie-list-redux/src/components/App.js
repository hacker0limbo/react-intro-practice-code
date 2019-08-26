import React from 'react'
import MovieListPage from './MovieListPage'
import MovieDetail from './MovieDetail'

const App = () => {
  return (
    <div>
      <h1 className="text-center my-3">Redux Movie Lists</h1>
      <div className="container">
        <div className="row">
          <div className="col">
            <MovieListPage />
          </div>
          <div className="col">
            <MovieDetail />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App