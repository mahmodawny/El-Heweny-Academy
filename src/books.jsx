import ElBokhary from "./assets/ElBokhary.jpg";
import Muslim from "./assets/Muslim.jpg";
import AboDawood from "./assets/Abo Dawood.jpg";
import El_Termithy from "./assets/El-Termithy.jpg";
import El_nassaey from "./assets/El-nassaey.jpg";
import IbnMajah from "./assets/Ibn Majah.jpg";
export default function Books() {
  const booksData = [
    { id: 1, title: "صحيح البخاري", img: ElBokhary, url: "" },
    { id: 2, title: "صحيح مسلم", img: Muslim, url: "" },
    { id: 3, title: "صحيح ابن ماجه", img: IbnMajah, url: "" },
    { id: 4, title: "صحيح أبو داود", img: AboDawood, url: "" },
    { id: 5, title: "صحيح الترمذي", img: El_Termithy, url: "" },
    { id: 6, title: "صحيح النسائي", img: El_nassaey, url: "" },
  ];

  return (
    <div className="books">
      <h1>كتب</h1>
      <div className="books-container">
        {booksData.map((book) => {
          return (
            <div className="book" key={book.id}>
              <img src={book.img} alt="book" />
              <div className="book-info">
                <h2>{book.title}</h2>
                <a href={book.url} target="_blank" rel="noopener noreferrer">
                  مشاهدة
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
