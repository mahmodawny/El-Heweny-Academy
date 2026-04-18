import { useState } from "react";
import { Link, useParams } from "react-router-dom";


const volumes = [
  {
    id: 1,
    name: "bukhari",
    title : "صحيح البخاري",
    books: [
      { id: 1, label: "المجلد الأول",  file: "مجلد1.pdf" },
      { id: 2, label: "المجلد الثاني", file: "مجلد2.pdf" }
    ]
  },
  {
    id: 2,
    name: "muslim",
    title : "صحيح مسلم",
    books:[
      { id: 1, label: "المجلد الأول",  file: "صحيح مسلم 1.pdf" },
      { id: 2, label: "المجلد الثاني", file: "صحيح مسلم 2.pdf" },
      { id: 3, label: "المجلد الثالث", file: "صحيح مسلم 3.pdf" }
    ]
  }
];

export default function BookViewer() {
  const {id} = useParams();
  const [selected, setSelected] = useState(null);

  const currentBook = volumes.find((book) => book.name === id)
  

  const pdfUrl = selected ? `/pdfs/${id}/${selected.file}` : null;
  
  return (
    <div className="book-viewer">
      <div className="book-viewer-header">
        <Link to="/books" className="back-btn">← العودة للكتب</Link>
        <h2>{currentBook?.title}</h2>
        <p>اختر المجلد الذي تريد قراءته</p>
      </div>

      <div className="book-viewer-body">
        <aside className="volumes-list">
          {currentBook?.books.map((vol) => (
            <button
              key={vol.id}
              className={`volume-btn ${selected?.id === vol.id ? "active" : ""}`}
              onClick={() => setSelected(vol)}
            >
              {vol.label}
            </button>
          ))}
        </aside>

        <div className="pdf-panel">
          {pdfUrl ? (
            <>
              <div className="pdf-toolbar">
                <span className="pdf-title">{selected.label}</span>
                 <a href={pdfUrl} download className="download-btn">
                  ⬇ تحميل
                </a>
              </div>
              <iframe
                key={pdfUrl}
                src={pdfUrl}
                title={selected.label}
                className="pdf-iframe"
              />
            </>
          ) : (
            <div className="pdf-placeholder">
              <div className="placeholder-icon">📖</div>
              <p>اختر مجلداً من القائمة لعرضه هنا</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
