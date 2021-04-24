import React from 'react'
import MovieCard from './MovieCard'

export default function Movies() {
  return (
    <div className='container'>
      <h1>Movies</h1>
      <div className='row'>
        <MovieCard title='Joker' rating='5' />
        <MovieCard title='Avengers' rating='3' />
        <MovieCard title='Avatar' rating='2.0' />
        <MovieCard title='ABS' rating='1.5' />
      </div>
    </div>
  )
}
