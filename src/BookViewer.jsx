import { useState } from "react";
import { Link } from "react-router-dom";

const volumes = [
  { id: 1,  label: "المقدمة",        file: "00_54495.pdf" },
  { id: 2,  label: "المجلد الأول — الجزء الأول",   file: "01_54495p1.pdf" },
  { id: 3,  label: "المجلد الأول — الجزء الثاني",   file: "01_54495p2.pdf" },
  { id: 4,  label: "المجلد الأول — الجزء الثالث",   file: "01_54495p3.pdf" },
  { id: 5,  label: "المجلد الأول",   file: "01_54495.pdf" },
  { id: 6,  label: "المجلد الثاني",  file: "02_54496.pdf" },
  { id: 7,  label: "المجلد الثالث",  file: "03_54504.pdf" },
  { id: 8,  label: "المجلد الرابع",  file: "04_54505.pdf" },
  { id: 9,  label: "المجلد الخامس",  file: "05_54497.pdf" },
  { id: 10, label: "المجلد السادس",  file: "06_54498.pdf" },
  { id: 11, label: "المجلد السابع",  file: "07_54506.pdf" },
  { id: 12, label: "المجلد الثامن",  file: "08_54507.pdf" },
  { id: 13, label: "المجلد التاسع",  file: "09_54508.pdf" },
];

export default function BookViewer() {
  const [selected, setSelected] = useState(null);

  const pdfUrl = selected
    ? `/pdfs/bukhari/${selected.file}`
    : null;

  return (
    <div className="book-viewer">
      <div className="book-viewer-header">
        <Link to="/books" className="back-btn">← العودة للكتب</Link>
        <h2>صحيح البخاري — ط السلطانية</h2>
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
