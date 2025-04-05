import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Books() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    fetch('https://seussology.info/api/books')
      .then(res => res.json())
      .then(data => {
        console.log('Fetched books:', data)
        setBooks(data)
      })
      .catch(err => console.error('Error fetching books:', err))
  }, [])

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', padding: '1rem' }}>
      {books.map(book => (
        <Link key={book.id} to={`/book/${book.id}`}>
          <img src={book.image} alt={book.title} style={{ width: '150px' }} />
        </Link>
      ))}
    </div>
  )
}

export default Books




  