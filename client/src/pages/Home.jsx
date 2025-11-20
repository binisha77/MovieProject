import MovieCard from "../components/MovieCard"
import { useState } from "react"

function Home() {
  const [searchQuery, setSearchQuery] = useState("")
  const movies =[
    {id:1, title:"Jeri", release_date:"2025"},
    {id:2, title:"paran", release_date:"2025"},
    {id:3, title:"spider", release_date:"2025"},
    

  ] 
  const handleSearch = (e) => {
  e.preventDefault()
  alert(searchQuery)
  setSearchQuery("")
}

  return (
  <div className="home">
        <form onSubmit={handleSearch} className="search-form"></form>
          <input type="text"
          placeholder="search for movies.." 
          className="search-input"
          value={searchQuery} 
          onChange={(e) => setSearchQuery(e.target.value)} />
          <button type="submit" className="search-button">Search</button>
    <div className="movies-grid">
      {movies.map((movie)=>(
        <MovieCard movie={movie} key={movie.id} />
          ))}
    </div>
  </div>
  )
}

export default Home