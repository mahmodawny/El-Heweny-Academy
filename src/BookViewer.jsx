import { useState } from "react";
import { Link, useParams } from "react-router-dom";

/*
  لإضافة كتاب جديد:
  1. ضع ملفات الـ PDF داخل: public/pdfs/[اسم الكتاب]/
     مثال: public/pdfs/muslim/vol1.pdf
  2. أضف كائناً جديداً هنا بنفس النمط أدناه
  ملاحظة: اسم المجلد (name) لازم يطابق اسم المجلد في public/pdfs/
  ملاحظة: أسماء ملفات الـ PDF لازم تكون إنجليزية (vol1.pdf, vol2.pdf ...)
*/

const allBooks = [
  {
    name: "bukhari",
    title: "صحيح البخاري",
    volumes: [
      { id: 1, label: "المجلد الأول",  file: "vol1.pdf" },
      { id: 2, label: "المجلد الثاني", file: "vol2.pdf" },
    ],
  },
  {
    name: "muslim",
    title: "صحيح مسلم",
    volumes: [
      { id: 1, label: "المجلد الأول",  file: "vol1.pdf" },
      { id: 2, label: "المجلد الثاني", file: "vol2.pdf" },
      { id: 3, label: "المجلد الثالث", file: "vol3.pdf" },
    ],
  },
];

export default function BookViewer() {
  const { id } = useParams();
  const [selected, setSelected] = useState(null);

  const currentBook = allBooks.find((book) => book.name === id);
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
          {currentBook?.volumes.map((vol) => (
            <button
              key={vol.id}
              className={`volume-btn ${selected?.id === vol.id ? "active" : ""}`}
              onClick={() => {
                setSelected(vol);
                window.open(`/pdfs/${id}/${vol.file}`, "_blank");
              }}
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
                <div className="pdf-actions">
                  <a href={pdfUrl} target="_blank" rel="noopener noreferrer" className="open-btn">
                    🔗 فتح في تبويب جديد
                  </a>
                  <a href={pdfUrl} download className="download-btn">
                    ⬇ تحميل
                  </a>
                </div>
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
