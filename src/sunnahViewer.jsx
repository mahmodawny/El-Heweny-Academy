import { useState } from "react";
import { Link, useParams } from "react-router-dom";

const allLessons = [
  {
    name: "IbnOthimeen",
    title: "شرح الأربعين النووية",
    volumes: [
      { id: 1, title: "الحديث الأول", url: "https://www.youtube.com/embed/LS3DsGsNQ-Q?si=urB-OfsevZBqmSPK" },
      { id: 2, title: "الحديث الثاني", url: "https://www.youtube.com/embed/emcdkcWhAk8?si=Pdj2LzBIiE54At5m" },
      { id: 3, title: "الحديث الثالث", url: "https://www.youtube.com/embed/QnSAwo1t1to?si=NnMHQvLdOm-q2QxT" },
      { id: 4, title: "الحديث الرابع", url: "https://www.youtube.com/embed/iKK6344AWPU?si=_58OYxdhMZ6JnjlE" },
      { id: 5, title: "الحديث الخامس", url: "" },
      { id: 6, title: "الحديث السادس", url: "" },
      { id: 7, title: "الحديث السابع", url: "" },
      { id: 8, title: "الحديث الثامن", url: "" },
      { id: 9, title: "الحديث التاسع", url: "" },
      { id: 10, title: "الحديث العاشر", url: "" },
      { id: 11, title: "الحديث الحادي عشر", url: "" },
      { id: 12, title: "الحديث الثاني عشر", url: "" },
      { id: 13, title: "الحديث الثالث عشر", url: "" },
      { id: 14, title: "الحديث الرابع عشر", url: "" },
      { id: 15, title: "الحديث الخامس عشر", url: "" },
      { id: 16, title: "الحديث السادس عشر", url: "" },
      { id: 17, title: "الحديث السابع عشر", url: "" },
      { id: 18, title: "الحديث الثامن عشر", url: "" },
      { id: 19, title: "الحديث التاسع عشر", url: "" },
      { id: 20, title: "الحديث العشرون", url: "" },
      { id: 21, title: "الحديث الحادي والعشرون", url: "" },
      { id: 22, title: "الحديث الثاني والعشرون", url: "" },
      { id: 23, title: "الحديث الثالث والعشرون", url: "" },
      { id: 24, title: "الحديث الرابع والعشرون", url: "" },
      { id: 25, title: "الحديث الخامس والعشرون", url: "" },
      { id: 26, title: "الحديث السادس والعشرون", url: "" },
      { id: 27, title: "الحديث السابع والعشرون", url: "" },
      { id: 28, title: "الحديث الثامن والعشرون", url: "" },
      { id: 29, title: "الحديث التاسع والعشرون", url: "" },
      { id: 30, title: "الحديث الثلاثون", url: "" },
      { id: 31, title: "الحديث الحادي والثلاثون", url: "" },
      { id: 32, title: "الحديث الثاني والثلاثون", url: "" },
      { id: 33, title: "الحديث الثالث والثلاثون", url: "" },
      { id: 34, title: "الحديث الرابع والثلاثون", url: "" },
      { id: 35, title: "الحديث الخامس والثلاثون", url: "" },
      { id: 36, title: "الحديث السادس والثلاثون", url: "" },
      { id: 37, title: "الحديث السابع والثلاثون", url: "" },
      { id: 38, title: "الحديث الثامن والثلاثون", url: "" },
      { id: 39, title: "الحديث التاسع والثلاثون", url: "" },
      { id: 40, title: "الحديث الأربعون", url: "" },
      { id: 41, title: "الحديث الحادي والأربعون", url: "" },
      { id: 42, title: "الحديث الثاني والأربعون", url: "" }
    ]
  },
  {
    name: "ElHeweny",
    title: "فك الوثاق في شرح كتاب الرقاق",
    volumes: [
      { id: 1, title: "الدرس الأول", url: "https://www.youtube.com/embed/KOCyo1JsIqU?si=2h04swuVCQcEKUip" },
      { id: 2, title: "الدرس الثاني", url: "" },
      { id: 3, title: "الدرس الثالث", url: "" },
      { id: 4, title: "الدرس الرابع", url: "" }
    ]
  }
];

export default function SunnahViewer() {
  const { id } = useParams();
  const [selected, setSelected] = useState(null);
  const currentLesson = allLessons.find((lesson) => lesson.name === id);
  const videoUrl = selected ? selected.url : null;

  return (
    <div className="book-viewer">
      <div className="book-viewer-header">
        <Link to="/sunnah" className="back-btn">← العودة للدرس</Link>
        <h2>{currentLesson?.title}</h2>
        <p>اختر الدرس الذي تريد مشاهدته</p>
      </div>
      <div className="book-viewer-body">
        <aside className="volumes-list">
          {
            currentLesson?.volumes.map((vol) => (
              <button
                key={vol.id}
                className={`volume-btn ${selected?.id === vol.id ? "active" : ""}`}
                onClick={() => setSelected(vol)}
              >
                {vol.title}
              </button>
            ))
          }
        </aside>
        <div className="pdf-panel">
          {
            videoUrl ? (
              <iframe
                key={videoUrl}
                src={videoUrl}
                title={selected.title}
                className="pdf-iframe"
              />
            ) : (
              <div className="pdf-placeholder">
                <div className="placeholder-icon">📖</div>
                <p>اختر درساً من القائمة لعرضه هنا</p>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
}
