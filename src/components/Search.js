import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { search } from '../BooksAPI'
import Grid from './Grid';

const forbidden = ['M2M',
  'Barre Fitness',
  'Fitness!',
  'ACSM Fitness Book',
  'Fitness Walking 2nd Editon',
  'Yoga for Fitness and Wellness',
  'Health Fitness Management',
  'Fitness Swimming 2nd Edition',
  'ACSM\'s Complete Guide to Fitness & Health',
  'Creative Fitness',
  'Fitness Professional\'s Handbook 7th Edition',
  'ACSM\'s Health-Related Physical Fitness Assessment Manual',
  'Body Panic',
  'Ghost stories and tales of mystery [by J.S. Le Fanu].',
  'Biography',
  'Cleopatra',
  'Anna Freud',
  'Keith Richards',
  '100 Sexiest Women in Comics',
  'The Rise and Reason of Comics and Graphic Literature',
  'Batman and Captain America',
  'React',
  'The Alchemy of Desire'
]

const Search = ({ update, data: orginData }) => {
  const [data, setData] = useState([])
  const [searchValue, setSearchValue] = useState('')

  const handleChange = (e) => {
    setSearchValue(e.target.value)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchValue.length < 1) setData('no books found')
      if (searchValue.length > 0) {

        search(searchValue, 100).then(res => {
          if (!Array.isArray(res)) setData('no books found')
          if (res?.length > 0) {
            const finalRes = res.map(x => {
              orginData.forEach(a => {
                if (x.id === a.id) {
                  x.shelf = a.shelf
                }
              })
              return x;
            }).filter(a => forbidden.indexOf(a.title) === -1) || []
            setData(finalRes)

          }
        })
      }
    }, 100);

    return (() => {
      clearTimeout(timer)
    })



  }, [searchValue, orginData])

  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link
          className="close-search"
          to="/"
        />
        <div className="search-books-input-wrapper">
          <input
            type="text"
            placeholder="Search by title, author, or ISBN"
            value={searchValue}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="search-books-results">
        {Array.isArray(data) ? <Grid update={update} data={data} /> : [data]}
      </div>
    </div>
  )
}

export default Search