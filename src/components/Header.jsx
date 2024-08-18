export default function Header({ setQuery, query, bookList }) {
  return (
    <header>
      <span> 📚 useLibrary</span>
      <input
        value={query}
        type="text"
        className="book-input"
        placeholder="Search for a book"
        onChange={(e) => setQuery(e.target.value)}
      />
      <span>Found {bookList ? bookList?.length : "0"} results</span>
    </header>
  );
}
