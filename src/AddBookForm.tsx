import { useState } from "react";

type TBook = {
  name: string;
  author: string;
  genre: string;
  read: boolean;
};
type TProps = {
  onAddBook: (book: TBook) => void;
  onClose: () => void;
};
export default function addBookForm({ onAddBook, onClose }: TProps) {
  const [name, setName] = useState<string>("");
  const [author, setAuthor] = useState<string>("");
  const [genre, setGenre] = useState<string>("");
  const [read, setRead] = useState<boolean>(false);

  const handleSubmit: React.SubmitEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    onAddBook({
      name,
      author,
      genre,
      read,
    });

    onClose();
  };

  return (
    <div className="addBookForm">
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Enter Book Name:</label>
          <input
            type="text"
            className="name"
            placeholder="Enter book name . . ."
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="author">Enter Book Author:</label>
          <input
            type="text"
            className="author"
            placeholder="Enter book author . . ."
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="genre">Enter Book Genre:</label>
          <input
            type="text"
            className="genre"
            placeholder="Enter book genre . . ."
            onChange={(e) => setGenre(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="readType">Enter Book Status:</label>
          <input
            type="checkbox"
            className="readType"
            checked={read}
            onChange={(e) => setRead(e.target.checked)}
          />
        </div>
        <div>
          <button>Add New Book</button>
        </div>
      </form>
    </div>
  );
}
