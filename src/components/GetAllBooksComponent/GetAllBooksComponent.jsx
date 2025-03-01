import axios from 'axios'
import React, { useEffect, useState } from 'react'
import BookComponent from './BookComponent'
import './GetAllBooksComponent.css'
import Base_Url from '../../../CONFIG.JS'

const GetAllBooksComponent = () => {
  const [books, setBooks] = useState([])

    useEffect(() => {
        axios.get(`${Base_Url}`)
            .then(response => setBooks(response.data))
            .catch(error => console.log(error))
    }, [])

  return (
    <div className='books'>
        {books.map((book, index)=>(
            <BookComponent book={book} key={index}/>
        ))}
    </div>
  )
}

export default GetAllBooksComponent