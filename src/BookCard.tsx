type TBook = {
  name: string;
  author: string;
  genre: string;
  read: boolean;
};
type TProps = {
  book: TBook;
  onClose: () => void;
  onDelete: (bookName: string) => void;
  onToggleRead: (bookName: string) => void;
};
export default function BookCard({
  book,
  onClose,
  onToggleRead,
  onDelete,
}: TProps) {
  return (
    <div>
      <h1>Selected Book</h1>
      <div className="book-card show">
        <button className="delete" onClick={() => onDelete(book.name)}>
          <img src="/src/images/delete.svg" alt="Close" />
        </button>
        <button className="close" onClick={onClose}>
          <img src="/src/images/close.svg" alt="Close" />
        </button>
        <div
          onClick={() => onToggleRead(book.name)}
          className={`status ${book.read ? `read` : `unread`}`}
        ></div>
        <h2>{book.name}</h2>
        <div className="about-book">
          <div className="book-image">
            <img src="/src/images/book.png" alt="book image" />
          </div>
          <div className="book-info">
            <h3>
              <span>Author:</span>
              {book.author}
            </h3>
            <h4>
              <span>Genre:</span>
              {book.genre}
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
