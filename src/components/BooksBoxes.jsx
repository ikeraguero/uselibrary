import ListBox from "./ListBox";
import BookBox from "./BookBox";

export default function BooksBoxes({
  bookList,
  setSelectedBook,
  selectedBook,
  bookmarkedBooks,
}) {
  return (
    <main className="books-boxes">
      <ListBox bookList={bookList} setSelected={setSelectedBook} />
      <BookBox
        bookList={bookList}
        selected={selectedBook}
        bookmarkedBooks={bookmarkedBooks}
      />
    </main>
  );
}
