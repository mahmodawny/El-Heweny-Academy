import { useState } from "react";
import { Link } from "react-router-dom";

// const volumes = [
//   { id: 1,  label: "المجاد الأول",        file: "مجلد1.pdf" },
//   { id: 2,  label: "المجلد الثاني",   file: "مجلد2.pdf" }
// ];

const volumes = [
  {id:1 , name : "bukhari", books : [{id:1, label : "المجلد الأول", file : "مجلد1.pdf"],[id:2, label : "المجلد الثاني", file : "مجلد2.pdf"]},
]

export default function BookViewer() {
  const [selected, setSelected] = useState(null);

  const pdfUrl = selected
    ? `/pdfs/bukhari/${selected.file}`
    : null;

  return (
    <div className="book-viewer">
      <div className="book-viewer-header">
        <Link to="/books" className="back-btn">← العودة للكتب</Link>
        <h2>صحيح البخاري - ت البغا</h2>
        <p>اختر المجلد الذي تريد قراءته</p>
      </div>

      <div className="book-viewer-body">
        <aside className="volumes-list">
          {volumes.map((vol) => (
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
                <a
                  href={pdfUrl}
                  download
                  className="download-btn"
                >
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
