import { useState } from "react";
import StarRating from "./StarRating";

export default function BookBox({ bookList, selected }) {
  const [rating, setRating] = useState(0);

  const [isOpen, setIsOpen] = useState(true);
  const book = bookList?.find((book) => book.id === selected);
  function handleClick() {
    setIsOpen(!isOpen);
  }
  return (
    <div className="box">
      <button className="toggle-button" onClick={handleClick}>
        {isOpen ? "-" : "+"}
      </button>
      {isOpen && book && (
        <div className="book-details">
          <div className="book-details-top">
            <img src={book?.imageLinks?.smallThumbnail} alt="" />
            <div className="book-details-text">
              <span className="book-title">{book?.title}</span>
              <div className="sub-details">
                <span className="book-date">
                  {book?.publishedDate?.split("-")[0]}
                </span>
                <span>•</span>
                <span className="book-pages">{`${book?.pageCount} pages`}</span>
              </div>
              <p className="book-categories">{book?.categories}</p>
            </div>
          </div>
          <div className="book-details-bottom">
            <div className="book-rating">
              <StarRating
                stars={10}
                selected={selected}
                rating={rating}
                setRating={setRating}
              />
              {rating ? (
                <button className="book-add-button"> + Add to list</button>
              ) : (
                ""
              )}
            </div>
            <p className="book-description">
              <em>{book?.description}</em>
            </p>
            <p className="book-authors">
              {book?.authors ? `By: ${book?.authors}` : ""}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
