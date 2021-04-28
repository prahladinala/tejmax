import { React, useEffect } from "react"
import MovieCard from "./MovieCard"
export default function Theatres() {
  useEffect(() => {
    const fetchTheaters = async () => {
      const response = await fetch("http://localhost:3000/theatres")
      const data = await response.json()
      console.log(data)
    }
    fetchTheaters()
  })
  return (
    <div className='container'>
      <h1>Theatres</h1>
      <div className='row'>
        <MovieCard title='A Theatre' rating='5' btntext='Check the Shows' />
        <MovieCard title='B Theatre' rating='4.2' btntext='Check the Shows' />
        <MovieCard title='C Theatre' rating='3.8' btntext='Check the Shows' />
        <MovieCard title='D Theatre' rating='2.0' btntext='Check the Shows' />
      </div>
    </div>
  )
}
