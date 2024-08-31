import { useState } from "react";
import StarRating from "./StarRating";

export default function BookBox({
  bookList,
  selected,
  setSelectedBook,
  bookmarkedBooks,
  setBookmarkedBooks,
}) {
  const [rating, setRating] = useState(0);

  const [isOpen, setIsOpen] = useState(true);
  let book = bookList?.find((book) => book.id === selected);
  const isBookmarked = bookmarkedBooks?.includes(book);

  function handleClick() {
    setIsOpen(!isOpen);
  }

  function handleBack() {
    setSelectedBook(null);
  }

  function handleAddBook(book) {
    if (bookmarkedBooks) {
      setBookmarkedBooks((bookmarked) => [...bookmarked, book]);
    } else {
      setBookmarkedBooks([book]);
    }
    handleBack();
  }

  return (
    <div className="box">
      <button className="toggle-button" onClick={handleClick}>
        {isOpen ? <span>&ndash;</span> : <span>+</span>}
      </button>
      {isOpen && book ? (
        <div className="book-details">
          <button className="book-back-btn" onClick={handleBack}>
            &larr;
          </button>
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
              {isBookmarked ? (
                "This book is already in your list!"
              ) : (
                <>
                  <StarRating
                    stars={10}
                    selected={selected}
                    rating={rating}
                    setRating={setRating}
                  />
                  {rating ? (
                    <button
                      className="book-add-button"
                      onClick={() => handleAddBook({ ...book, rating })}
                    >
                      {" "}
                      + Add to list
                    </button>
                  ) : (
                    ""
                  )}
                </>
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
      ) : isOpen && !book ? (
        <>
          <div className="books-stats">
            <span className="books-stats-title">BOOKS YOU READ</span>
            <div className="books-stats-stats">
              <span>{`📕 ${bookmarkedBooks?.length} ${
                bookmarkedBooks?.length > 1 || bookmarkedBooks?.length == 0
                  ? "books"
                  : "book"
              }`}</span>
              <span>{`⭐ ${
                bookmarkedBooks?.length > 0
                  ? (
                      bookmarkedBooks
                        ?.map((book) => book.rating)
                        .reduce((acc, cur) => acc + cur, 0) /
                      bookmarkedBooks?.length
                    ).toFixed(2)
                  : "0.00"
              }`}</span>
              <span>
                {`📖
                ${bookmarkedBooks
                  ?.map((book) => book.pageCount)
                  .reduce((acc, cur) => acc + cur, 0)}
                pages`}
              </span>
            </div>
          </div>
          <div>
            {bookmarkedBooks?.map((book) => (
              <li
                key={book.id}
                className="book-item"
                onClick={() => setSelectedBook(book.id)}
              >
                <img src={book.imageLinks?.smallThumbnail} alt="" />
                <div className="book-item-text">
                  <span className="book-item-text-title">{book.title}</span>
                  <div className="book-item-text-bottom">
                    <span className="book-item-text-pages">
                      <span>📖</span>
                      {`${book.pageCount} pages`}
                    </span>
                    <span className="book-item-text-rating">
                      <span>⭐</span>
                      {`${book.rating.toFixed(1)}`}
                    </span>
                  </div>
                </div>
              </li>
            ))}
          </div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}
