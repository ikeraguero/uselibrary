import { useState } from "react";

export default function Box({ bookList, setSelected }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleSelection(id) {
    setSelected(id);
  }

  return (
    <div className="box">
      <button className="toggle-button" onClick={handleClick}>
        {isOpen ? "-" : "+"}
      </button>
      {bookList && isOpen ? (
        <ul className="book-list">
          {bookList.map((book) => (
            <li
              key={book.id}
              className="book-item"
              onClick={() => handleSelection(book.id)}
            >
              <img src={book.imageLinks?.smallThumbnail} alt="" />
              <div className="book-item-text">
                <span className="book-item-text-title">{book.title}</span>
                <span className="book-item-text-year">
                  {`📅  ${book.publishedDate?.split("-")[0]}`}
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
