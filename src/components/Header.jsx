import { useEffect, useRef } from "react";

export default function Header({ setQuery, query, bookList }) {
  const inputEl = useRef(null);

  useEffect(function () {
    inputEl.current.focus();
  }, []);

  useEffect(
    function () {
      const addEvent = function (e) {
        if (e.key === "Enter") {
          setQuery("");
          inputEl.current.focus();
        }
      };
      document.addEventListener("keypress", addEvent);
      return () => {
        document.removeEventListener("keypress", addEvent);
      };
    },
    [setQuery]
  );
  return (
    <header>
      <span> 📚 useLibrary</span>
      <input
        value={query}
        type="text"
        className="book-input"
        placeholder="Search for a book"
        onChange={(e) => setQuery(e.target.value)}
        ref={inputEl}
      />
      <span>Found {bookList ? bookList?.length : "0"} results</span>
    </header>
  );
}
