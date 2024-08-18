import Header from "./Header";
import BooksBoxes from "./BooksBoxes";
import { useEffect, useState } from "react";

function App() {
  const [query, setQuery] = useState("");
  const [bookList, setBookList] = useState(null);
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
          const list = data.items.map((book) => {
            const { title, publishedDate, pageCount, authors, imageLinks } =
              book.volumeInfo;
            return { title, publishedDate, pageCount, authors, imageLinks };
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
      <BooksBoxes bookList={bookList} />
    </body>
  );
}

export default App;
