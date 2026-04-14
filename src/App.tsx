import { useState } from "react";
import BookList from "./BookList";

type TBook = {
  name: string;
  author: string;
  genre: string;
  read: boolean;
};

function App() {
  const [books, setBooks] = useState<TBook[]>([
    {
      name: "Dördüncü Türkçülük Çalışmaları",
      author: "Author1",
      genre: "	Publisistika",
      read: true,
    },
    {
      name: "Mustafa Kamal Atatürkün liderlik sirləri",
      author: "	Adnan Nur Baykal",
      genre: "	Publisistika",
      read: false,
    },
    {
      name: "Одна маленькая жизнь",
      author: "	Клингенберг М.",
      genre: "Публицистика",
      read: true,
    },
    {
      name: "Равенство. От охотников-собирателей до тоталитарных режимов",
      author: "	Макмахон Д.",
      genre: "Публицистика",
      read: false,
    },
    {
      name: "Mifologiya 101",
      author: "Ketlin Sirs",
      genre: "Genre1",
      read: true,
    },
    { name: "Book2", author: "Author2", genre: "Genre2", read: true },
    {
      name: "Общественное мнение и толпа",
      author: "	Тард Г.",
      genre: "Философский Трактат",
      read: true,
    },
    {
      name: "О психологии бессознательного",
      author: "	Юнг К.",
      genre: "	Психологические исследования",
      read: false,
    },
  ]);

  return (
    <div>
      <h1>E-Book library</h1>
      <BookList bookArray={books} />
    </div>
  );
}

export default App;
