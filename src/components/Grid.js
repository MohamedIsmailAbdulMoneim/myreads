import React from 'react'
import Book from "./Book";

const Grid = ({ data, update }) => {


  return (
    <ol className="books-grid">
      {data.map(el =>
          <Book key={el.id} update={update} el={el} />
      )}
    </ol>
  )
}

export default Grid