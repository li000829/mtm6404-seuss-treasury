// src/App.jsx
import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Books from './pages/Books'
import BookDetail from './pages/BookDetail'
import Quotes from './pages/Quotes'

export default function App() {
  return (
    <div>
      {/* Site-wide Navigation */}
      <nav style={{
        display: 'flex',
        gap: '1rem',
        padding: '1rem',
        background: '#eee',
        borderBottom: '1px solid #ccc'
      }}>
        <Link to="/">📚 Books</Link>
        <Link to="/quotes">💬 Quotes</Link>
      </nav>

      {/* Routing for each page */}
      <Routes>
        <Route path="/" element={<Books />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
    </div>
  )
}




