import { Link } from "react-router-dom";
import IbnOthimeen from "./assets/Ibn Othimeen.jpg";
import ElHeweny from "./assets/ElHeweny.jpg";

export default function Sunnah() {
  let sunnahLessons = [
    { id: 1, name: "IbnOthimeen", title: "شرح الأربعين النووية", scientist: "الشيخ محمد بن صالح العثيمين", img: IbnOthimeen, hasViewer: true },
    { id: 2, name: "ElHeweny", title: "فك الوثاق في شرح كتاب الرقاق", scientist: "الشيخ أبي إسحاق الحويني", img: ElHeweny, hasViewer: false }
  ]
  return (
    <div className="sunnah">
      <h1>دروس شروح السنة </h1>
      <div className="sunnah-lessons">
        {
          sunnahLessons.map((lesson) => {
            return (
              <div className="sunnah-lesson" key={lesson.id}>
                <img src={lesson.img} alt="" />
                <div className="lesson-info">
                  <h2>{lesson.title}</h2>
                  <p>{lesson.scientist}</p>
                </div>
                {
                  lesson.hasViewer ? (
                    <Link to={`/sunnah/${lesson.name}`} className="view-link">
                      مشاهدة
                    </Link>
                  ) : (
                    <button className="view-link disabled">قريباً</button>
                  )
                }
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
