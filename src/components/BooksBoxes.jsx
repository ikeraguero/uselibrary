import ListBox from "./ListBox";
import BookBox from "./BookBox";

export default function BooksBoxes({ bookList }) {
  return (
    <main className="books-boxes">
      <ListBox bookList={bookList} />
      <BookBox />
    </main>
  );
}
