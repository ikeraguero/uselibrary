import { useState } from "react";

export default function Box({ bookList }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  return (
    <div className="box">
      <button className="toggle-button" onClick={handleClick}>
        {isOpen ? "-" : "+"}
      </button>
      {bookList && isOpen ? (
        <ul className="book-list">
          {bookList.map((book) => (
            <li key={book.title} className="book-item">
              <img src={book.imageLinks?.smallThumbnail} alt="" />
              <div className="book-item-text">
                <span className="book-item-text-title">{book.title}</span>
                <span className="book-item-text-year">
                  {book.publishedDate?.split("-")[0]}
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}
