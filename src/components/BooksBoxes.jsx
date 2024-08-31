import ListBox from "./ListBox";
import BookBox from "./BookBox";

export default function BooksBoxes({
  bookList,
  setSelectedBook,
  selectedBook,
  bookmarkedBooks,
  setBookmarkedBooks,
}) {
  return (
    <main className="books-boxes">
      <ListBox bookList={bookList} setSelected={setSelectedBook} />
      <BookBox
        bookList={bookList}
        selected={selectedBook}
        setSelectedBook={setSelectedBook}
        bookmarkedBooks={bookmarkedBooks}
        setBookmarkedBooks={setBookmarkedBooks}
      />
    </main>
  );
}
