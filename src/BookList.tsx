import BookCard from "./BookCard";
import { useState } from "react";
import AddBookForm from "./AddBookForm";

type TBook = {
  name: string;
  author: string;
  genre: string;
  read: boolean;
};

type TArray = {
  bookArray: TBook[];
};

type TRead = "all" | "read" | "unread";

export default function Booklist({ bookArray }: TArray) {
  const [books, setBooks] = useState<TBook[]>(bookArray);
  const [selectedBook, setSelectedBook] = useState<TBook | null>(null);
  const [filter, setFilter] = useState<TRead>("all");
  const [addBook, setAddBook] = useState<boolean>(false);

  const filteredBooks = books.filter((book) => {
    if (filter == "read") return book.read === true;
    if (filter == "unread") return book.read === false;
    return true;
  });

  const toggleRead = (bookName: string) => {
    setBooks((oldList: TBook[]) =>
      oldList.map((book: TBook) =>
        book.name === bookName ? { ...book, read: !book.read } : book,
      ),
    );
    setSelectedBook((prev) =>
      prev && prev.name === bookName ? { ...prev, read: !prev.read } : prev,
    );
  };

  const deleteBook = (bookName: string) => {
    setBooks((oldList: TBook[]) =>
      oldList.filter((book: TBook) => book.name !== bookName),
    );
    setSelectedBook(null);
  };
  const addNewBook = (newbook: TBook) => {
    setBooks((prev) => [...prev, newbook]);
  };
  return (
    <div>
      <div className="booksList">
        <img src="/src/images/img1.webp" alt="library" />
        <div className="books-list">
          <button
            className="addBook"
            onClick={() => {
              setAddBook(true);
              setSelectedBook(null);
            }}
          >
            Add new book
          </button>
          <div className="filter">
            Filter books:
            <button
              id="all"
              className={filter === "all" ? "active" : ""}
              onClick={() => setFilter("all")}
            >
              All
            </button>
            <button
              id="read"
              className={filter === "read" ? "active" : ""}
              onClick={() => setFilter("read")}
            >
              Read
            </button>
            <button
              id="unread"
              className={filter === "unread" ? "active" : ""}
              onClick={() => setFilter("unread")}
            >
              Unread
            </button>
          </div>
          <div className="filtered-books">
            {filteredBooks.map((book, index) => (
              <div key={index} className="list-element">
                <h3 className="book-title">
                  <img src="/src/images/book1.svg" alt="Book" />
                  {book.name}
                </h3>
                <button
                  className="bookcard-click"
                  onClick={() => {
                    setSelectedBook(book);
                    setAddBook(false);
                  }}
                >
                  Read more
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      {selectedBook && (
        <div className="book-card-element">
          <BookCard
            book={selectedBook}
            onClose={() => setSelectedBook(null)}
            onToggleRead={toggleRead}
            onDelete={deleteBook}
          />
        </div>
      )}
      {addBook && (
        <AddBookForm onAddBook={addNewBook} onClose={() => setAddBook(false)} />
      )}
    </div>
  );
}
