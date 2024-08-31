import Header from "./Header";
import BooksBoxes from "./BooksBoxes";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState(null);
  const [selectedBook, setSelectedBook] = useState(null);
  const [bookmarkedBooks, setBookmarkedBooks] = useState([]);
  const API = "https://www.googleapis.com/books/v1/volumes?q=";

  useEffect(
    function () {
      const controller = new AbortController();
      async function getBook() {
        try {
          const res = await fetch(`${API}${query}`, {
            signal: controller.signal,
          });
          if (!res.ok) throw new Error("Problems fetching your book");
          const data = await res.json();
          if (data.Response === "False") throw new Error("Book not found!");
          console.log(data);
          const list = data.items.map((book) => {
            const {
              title,
              publishedDate,
              pageCount,
              authors,
              imageLinks,
              description,
              categories,
            } = book.volumeInfo;
            return {
              id: book.id,
              title,
              publishedDate,
              pageCount,
              authors,
              imageLinks,
              description,
              categories,
            };
          });
          setBookList(list);
          console.log(list);
        } catch (err) {
          if (err.name !== "AbortError" && query != "") {
            console.error(err.message);
          }
        }
      }
      getBook();

      return function () {
        controller.abort();
      };
    },
    [query]
  );

  return (
    <body>
      <Header setQuery={setQuery} query={query} bookList={bookList} />
      <BooksBoxes
        bookList={bookList}
        setSelectedBook={setSelectedBook}
        selectedBook={selectedBook}
        bookmarkedBooks={bookmarkedBooks}
        setBookmarkedBooks={setBookmarkedBooks}
      />
    </body>
  );
}

export default App;
