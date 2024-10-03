import React from 'react';
import { useGlobalContext } from '../../context';
import Book from "../BookList/Book";
import Loading from "../Loader/Loader";
import coverImg from "../../images/cover-not.jpg";
import "./BookList.css";

const BookList = () => {
  const { books, loading, resultTitle } = useGlobalContext();

  // Asegúrate de que `books` sea un array
  const booksWithCovers = (books || []).map((singleBook) => {
    return {
      ...singleBook,
      // Verificar si `id` es válido antes de hacer `replace`
      id: singleBook.id ? singleBook.id.replace("/works/", "") : null,
      cover_img: singleBook.cover_id ? `https://covers.openlibrary.org/b/id/${singleBook.cover_id}-L.jpg` : coverImg
    };
  });

  if (loading) return <Loading />;

  return (
    <section className='booklist'>
      <div className='container'>
        <div className='section-title'>
          <h2>{resultTitle}</h2>
        </div>
        <div className='booklist-content grid'>
          {
            // Verificar si hay libros antes de mapear
            booksWithCovers.length > 0 ? (
              booksWithCovers.slice(0, 30).map((item, index) => (
                <Book key={index} {...item} />
              ))
            ) : (
              <p>No books found for your search.</p> // Mensaje si no hay libros
            )
          }
        </div>
      </div>
    </section>
  );
}

export default BookList;
