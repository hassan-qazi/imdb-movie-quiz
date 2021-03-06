import React from 'react'

const Movie = ({ onClick, primaryTitle, imgUrl}) => (
  <li>
    <a onClick={e => {
         e.preventDefault()
         onClick()
       }}>
       
      <img src={imgUrl} alt="Movie Poster N/A" />
      <br/>
      <span>{primaryTitle}</span>

    </a>
  </li>
)

export default Movie
