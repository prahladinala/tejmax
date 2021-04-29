import { React, useEffect, useState } from "react"
import MovieCard from "./MovieCard"
export default function Theatres() {
  return (
    <div className='container'>
      <h1>Theatres</h1>
      <div className='row'>
        <MovieCard/>
      </div>
    </div>
  )
}
