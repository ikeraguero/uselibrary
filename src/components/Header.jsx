export default function Header() {
  return (
    <header>
      <span> 📚 useLibrary</span>
      <input
        type="text"
        className="book-input"
        placeholder="Search for a book"
      />
      <span>Found X results</span>
    </header>
  );
}
