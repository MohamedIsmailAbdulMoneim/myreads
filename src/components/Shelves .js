import React from 'react'
import Grid from './Grid'

const Shelves = ({ data, update }) => {

  const filterToShelfs = (shelf) => {

    return data.filter(x => x.shelf === shelf);
  }

  return (
    <div className="list-books">
      <div className="list-books-title">
        <h1>MyReads</h1>
      </div>
      <div className="list-books-content">
        <div>
          <div className="bookshelf">
            {['currentlyReading', 'wantToRead', 'read'].map(el => (
              <div key={el}>
                <h2 className="bookshelf-title">{el}</h2>
                <div className="bookshelf-books">
                  <Grid update={update} data={filterToShelfs(el)} />
                </div>
              </div>

            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Shelves