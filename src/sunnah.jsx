export default function Sunnah() {
  let sunnahLessons = [
    {id:1 , title: "شرح الأربعين النووية" ,scientist: "الشيخ محمد بن صالح العثيمين" ,img:"./assets/Ibn Othimeen.jpeg" }
  ]
  return (
    <div className="sunnah">
      <h1>دروس سنية</h1>
      <div className="sunnah-lessons">
        {
          sunnahLessons.map((lesson)=>{
            return(
              <div className="sunnah-lesson">
                <img src={lesson.img} alt="" />
                <div className="lesson-info">
                <h2>{lesson.title}</h2>
                <p>{lesson.scientist}</p>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}
