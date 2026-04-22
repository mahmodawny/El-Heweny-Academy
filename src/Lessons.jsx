import logo from "./assets/Eladawy.jpg";
export default function Lessons() {

  const lessonsData = [
    { id: 1, title: "مقدمة للشيخ مصطفى العدوي", url: "https://www.youtube.com/watch?v=y4pwRnYnfdI" },
      { id: 2, title: "أساسيات في مصطلح الحديث", url: "https://www.youtube.com/watch?v=dMOtfV20dw4" },
      { id: 3, title: "الحديث المتواتر والآحاد", url: "https://www.youtube.com/watch?v=_PlcFGwAWcA" },
      { id: 4, title: "أقسام الحديث من حيث الصحة والضعف ", url: "https://www.youtube.com/watch?v=QWEKd_voyTo" },
      { id: 5, title: "أقسام الحديث من حيث الصحة والضعف", url: "https://www.youtube.com/watch?v=xK5AFaM5bl8" },
      { id: 6, title: "ترتيب الأحاديث من حيث الصحة ", url: "https://www.youtube.com/watch?v=SSfAqYSFXe8" },
      { id: 7, title: "الحديث الحسن", url: "https://www.youtube.com/watch?v=Kap2O0Urlkc" },
      { id: 8, title: "الحديث المسند والمتصل والمرفوع والموقوف", url: "https://www.youtube.com/watch?v=maEWUUsx664" },
      { id: 9, title: "الحديث المعلق", url: "https://www.youtube.com/watch?v=aS4DxgxsnP4" },
      { id: 10, title: "الحديث المنقطع", url: "https://www.youtube.com/watch?v=ofivTA8bcKI" },
    { id: 11, title: "الحديث المرسل", url: "https://www.youtube.com/watch?v=QkXwkWHAxgo" },
    { id: 12, title: "ما العمل إذا تعارض الوصل والإرسال", url: "https://www.youtube.com/watch?v=xD_j_an0Tus" },
    { id: 13, title: "الحديث الموقوف", url: "https://www.youtube.com/watch?v=68YSGdlhngE" },
    { id: 14, title: "تتمة الحديث الموقوف", url: "https://www.youtube.com/watch?v=ipQuHJcz3TI" },
    { id: 15, title: "أدوات التحمل", url: "https://www.youtube.com/watch?v=knasTX6BRWs" },
    { id: 16, title: "التدليس تعريفه وأنواعه", url: "https://www.youtube.com/watch?v=P7B_p329G9M" }, 
    { id: 17, title: "أنواع التدليس (تتمة)", url: "https://www.youtube.com/watch?v=sB8kSngblrI" },
    { id: 18, title: "الإرسال الخفي - المرسل الخفي", url: "https://www.youtube.com/watch?v=ZvS_Shf1SzU" },
    { id: 19, title: "المزيد في متصل الأسانيد", url: "https://youtu.be/_DPcS_QD5Cg" },
    { id: 20, title: "أقسام الضعف الناشئة عن عدم ثقة الرواة", url: "https://youtu.be/Lhb2B7BidgA" },
    { id: 21, title: "الشواهد والمتابعات والاعتبارات", url: "https://youtu.be/Tx4uVqvZ_zM" },
    { id: 22, title: "حكم رواية أهل البدع", url: "https://youtu.be/EQND2Arlw_s" },
    { id: 23, title: "المجهول من الرواة", url: "https://youtu.be/j5mLaQXlmDc" },
    { id: 25, title: "الاختلاط والمختلطين", url: "https://youtu.be/CIA9n_38bmg" },
    { id: 26, title: "الحديث الموضوع", url: "https://youtu.be/8Zn3l6rXyd4" },
    { id: 27, title: "الناسخ والمنسوخ في الحديث", url: "https://youtu.be/bHK0SeiYM80" },
    { id: 28, title: "زيادة الثقة", url: "https://youtu.be/TzvcK4DbaTs" },
    { id: 29, title: "الحديث المقلوب", url: "https://youtu.be/Zo6HzfxIDss" },
    { id: 30, title: "المدرج", url: "https://youtu.be/Yr4I7luIgog" }, // Stopped here
    { id: 31, title: "الحديث الشاذ", url: "https://www.youtube.com/watch?v=I0_vV_9_Y1o" },
    { id: 32, title: "المنكر", url: "https://www.youtube.com/watch?v=J1_vV_9_Y2o" },
    { id: 33, title: "الاضطراب والحديث المضطرب", url: "https://www.youtube.com/watch?v=K2_vV_9_Y3o" },
    { id: 34, title: "الحديث المسلسل", url: "https://www.youtube.com/watch?v=L3_vV_9_Y4o" },
    { id: 35, title: "الأوهام في الحديث", url: "https://www.youtube.com/watch?v=M4_vV_9_Y5o" },
    { id: 36, title: "الأوهام في المتون والأحاديث", url: "https://www.youtube.com/watch?v=N5_vV_9_Y6o" },
    { id: 37, title: "الحديث المعلول", url: "https://www.youtube.com/watch?v=O6_vV_9_Y7o" },
    { id: 38, title: "الحديث المسلسل (تتمة)", url: "https://www.youtube.com/watch?v=P7_vV_9_Y8o" },
    { id: 39, title: "تعريف الصحابي", url: "https://www.youtube.com/watch?v=Q8_vV_9_Y9o" },
    { id: 40, title: "تابع تعريف الصحابي", url: "https://www.youtube.com/watch?v=R9_vV_9_Z0o" },
    { id: 41, title: "الحديث المدبج", url: "https://www.youtube.com/watch?v=S0_vV_9_Z1o" },
    { id: 42, title: "أسئلة عامة في مصطلح الحديث", url: "https://www.youtube.com/watch?v=T1_vV_9_Z2o" },
    { id: 43, title: "التعارض", url: "https://www.youtube.com/watch?v=U2_vV_9_Z3o" }
  ]

  
  return (
    <div className="lessons">
      <h1> دروس مصطلح الحديث</h1>
      <div className="lessons-container">

        {
          lessonsData.map((lesson) =>(
            <div className="lesson" key={lesson.id}>
              <img src={logo} alt="lesson" />
              <div className="lesson-info">
                <h2>{lesson.title}</h2>
                <a href={lesson.url} target="_blank" rel="noopener noreferrer">مشاهدة</a>
              </div>
    
            </div>
          ))
          
        }
       

        
      </div>
    </div>
  );
}