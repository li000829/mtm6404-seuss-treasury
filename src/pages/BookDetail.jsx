import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function BookDetail() {
  const { id } = useParams()
  const [book, setBook] = useState(null)

  useEffect(() => {
    fetch(`https://seussology.info/api/books/${id}`)
      .then(res => res.json())
      .then(data => setBook(data))
      .catch(err => console.error('Error fetching book details:', err))
  }, [id])

  if (!book) return <p>Loading...</p>

  return (
    <div style={{ padding: '1rem' }}>
      <h1>{book.title}</h1>
      <img src={book.image} alt={book.title} style={{ width: '200px' }} />
      <p>{book.description}</p>
    </div>
  )
}




  