import { useState } from "react";

export default function BookBox({ bookList, selected }) {
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
                  {book?.publishedDate.split("-")[0]}
                </span>
                <span>•</span>
                <span className="book-pages">{`${book?.pageCount} pages`}</span>
              </div>
            </div>
          </div>
          <div className="book-details-bottom">
            <p className="book-description">{book?.description}</p>
            <p className="book-authors">
              {book?.authors ? `By: ${book?.authors}` : ""}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
