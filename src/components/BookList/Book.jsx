import React from 'react';
import { Link } from 'react-router-dom';
import "./BookList.css";

const Book = ({ id, title, cover_img, author, edition_count, first_publish_year }) => {
  return (
    <div className='book-item flex flex-column flex-sb'>
      <div className='book-item-img'>
        <img src={cover_img} alt={title} />
      </div>
      <div className='book-item-info text-center'>
        <Link to={`/book/${id}`}>
          <div className='book-item-info-item title fw-7 fs-18'>
            <span>{title}</span>
          </div>
        </Link>

        <div className='book-item-info-item author fs-15'>
          <span className='text-capitalize fw-7'>Author: </span>
          {/* Comprobamos si author existe y es un array antes de hacer join */}
          <span>{author && Array.isArray(author) ? author.join(", ") : "Unknown Author"}</span>
        </div>

        <div className='book-item-info-item edition-count fs-15'>
          <span className='text-capitalize fw-7'>Total Editions: </span>
          <span>{edition_count !== undefined ? edition_count : "N/A"}</span>
        </div>

        <div className='book-item-info-item publish-year fs-15'>
          <span className='text-capitalize fw-7'>First Publish Year: </span>
          <span>{first_publish_year || "N/A"}</span>
        </div>
      </div>
    </div>
  );
}

export default Book;
