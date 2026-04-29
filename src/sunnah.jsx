import { Link } from "react-router-dom";
import IbnOthimeen from "./assets/Ibn Othimeen.jpg";
export default function Sunnah() {
  let sunnahLessons = [
    {id:1 , title: "شرح الأربعين النووية" ,scientist: "الشيخ محمد بن صالح العثيمين" ,img: IbnOthimeen , hasViewer:false}
  ]
  return (
    <div className="sunnah">
      <h1>دروس شروح السنة </h1>
      <div className="sunnah-lessons">
        {
          sunnahLessons.map((lesson)=>{
            return(
              <div className="sunnah-lesson" key={lesson.id}>
                <img src={lesson.img} alt="" />
                <div className="lesson-info">
                <h2>{lesson.title}</h2>
                <p>{lesson.scientist}</p>
                </div>
                {
                  lesson.hasViewer ?(
                    <Link to={`/sunnah/${lesson.id}`} className="view-link">
                      مشاهدة
                    </Link>    
                  ):(
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
