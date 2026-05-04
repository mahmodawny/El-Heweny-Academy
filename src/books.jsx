import { Link } from "react-router-dom";
import ElBokhary from "./assets/ElBokhary.jpg";
import Muslim from "./assets/Muslim.jpg";
import AboDawood from "./assets/Abo Dawood.jpg";
import El_Termithy from "./assets/El-Termithy.jpg";
import El_nassaey from "./assets/El-nassaey.jpg";
import IbnMajah from "./assets/Ibn Majah.jpg";
import Button from '@mui/material/Button';
export default function Books() {
  const booksData = [
    { id: "bukhari", title: "صحيح البخاري",  img: ElBokhary,    hasViewer: false  },
    { id: "muslim",  title: "صحيح مسلم",     img: Muslim,       hasViewer: true },
    { id: "ibnmajah",title: "سنن ابن ماجه", img: IbnMajah,     hasViewer: true },
    { id: "aboDawood", title: "مسند أبو داود", img: AboDawood,   hasViewer: true },
    { id: "el_termithy",title: "سنن الترمذي",  img: El_Termithy,  hasViewer: true },
    { id: "nassaey", title: "السنن الكبري للنسائي",   img: El_nassaey,   hasViewer: true },
  ];

  return (
    <div className="books">
      <h1>كتب</h1>
      <div className="books-container">
        {booksData.map((book) => (
          <div className="book" key={book.id}>
            <img src={book.img} alt={book.title} />
            <div className="book-info">
              <h2>{book.title}</h2>
              {book.hasViewer ? (
                <Link to={`/book/${book.id}`} className="view-link">
                  مشاهدة
                </Link>
              ) : (
               <Button variant="contained" disabled>قريباً</Button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
