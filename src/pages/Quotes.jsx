import React, { useEffect, useState } from 'react'

function Quotes() {
  const [quotes, setQuotes] = useState([])

  useEffect(() => {
    fetch('https://seussology.info/api/quotes/random/10')
      .then(res => res.json())
      .then(data => setQuotes(data))
      .catch(err => console.error('Error fetching quotes:', err))
  }, [])

  return (
    <div style={{ padding: '1rem' }}>
      <h1>Quotes</h1>
      <ul>
        {quotes.map((quote) => (
          <li key={quote.id}>{quote.text}</li>
        ))}
      </ul>
    </div>
  )
}

export default Quotes
