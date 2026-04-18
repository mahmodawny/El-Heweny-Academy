import { useState } from "react";
import { Link, useParams } from "react-router-dom";

/*
  ====================================================
  خطوات إضافة كتاب جديد:
  ====================================================
  1. أنشئ مجلداً داخل public/pdfs/ باسم إنجليزي بحروف صغيرة
     مثال: public/pdfs/tirmidhi/

  2. ضع ملفات الـ PDF داخله بأسماء إنجليزية فقط
     مثال: vol1.pdf  vol2.pdf  vol3.pdf ...
     تحذير: الأسماء العربية تكسر الروابط

  3. أضف الكتاب في هذا الملف (allBooks) بنفس النمط:
     {
       name: "tirmidhi",          ← نفس اسم المجلد بالضبط (حروف صغيرة)
       title: "صحيح الترمذي",    ← الاسم الذي يظهر للزائر
       volumes: [
         { id: 1, label: "المجلد الأول",  file: "vol1.pdf" },
         { id: 2, label: "المجلد الثاني", file: "vol2.pdf" },
       ],
     },

  4. أضف الكتاب في src/books.jsx بنفس الـ id:
     { id: "tirmidhi", title: "صحيح الترمذي", img: MyImg, hasViewer: true }

  ⚠ تنبيه: name هنا + id في books.jsx + اسم المجلد في public/pdfs/ لازم يكونوا متطابقين
  ====================================================
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
  {
    name :"aboDawood",
    title: "مسند أبو داود",
    volumes:[
      { id: 1, label: "المجلد الأول",  file: "vol1.pdf" },
      { id: 2, label: "المجلد الثاني", file: "vol2.pdf" },
      { id: 3, label: "المجلد الثالث", file: "vol3.pdf" },
      { id: 4, label: "المجلد الرابع", file: "vol4.pdf" },
      { id: 5, label: "المجلد الخامس", file: "vol5.pdf" },
      { id: 6, label: "المجلد السادس", file: "vol6.pdf" }
    ]
  }
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
