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
    { id: 11, title: "مصطلحات الحديث (11)", url: "https://www.youtube.com/watch?v=UmJnVsCDXtE" },
    { id: 12, title: "مصطلحات الحديث (12)", url: "https://www.youtube.com/watch?v=f5i1wu78lM4" },
    { id: 13, title: "مصطلحات الحديث (13)", url: "https://www.youtube.com/watch?v=D_Z7u8mO8aE" },
    { id: 14, title: "مصطلحات الحديث (14)", url: "https://www.youtube.com/watch?v=zY_t8zUf5K8" },
    { id: 15, title: "مصطلحات الحديث (15)", url: "https://www.youtube.com/watch?v=mE9U7U4ZpRE" },
    { id: 16, title: "مصطلحات الحديث (16)", url: "https://www.youtube.com/watch?v=Y7xS3v-6N0A" },
    { id: 17, title: "مصطلحات الحديث (17)", url: "https://www.youtube.com/watch?v=FmN8Wd3XjT8" },
    { id: 18, title: "مصطلحات الحديث (18)", url: "https://www.youtube.com/watch?v=8I_8H-8G4T4" },
    { id: 19, title: "مصطلحات الحديث (19)", url: "https://www.youtube.com/watch?v=6iY7Kk2vQ4k" },
    { id: 20, title: "مصطلحات الحديث (20)", url: "https://www.youtube.com/watch?v=jW9S5_6v-I0" },
    { id: 21, title: "مصطلحات الحديث (21)", url: "https://www.youtube.com/watch?v=P6k9zR4M7V8" },
    { id: 22, title: "مصطلحات الحديث (22)", url: "https://www.youtube.com/watch?v=t8O_G9vJ6yQ" },
    { id: 23, title: "مصطلحات الحديث (23)", url: "https://www.youtube.com/watch?v=LqV9xR7_jG0" },
    { id: 24, title: "مصطلحات الحديث (24)", url: "https://www.youtube.com/watch?v=K7z8vM4Q1A0" },
    { id: 25, title: "مصطلحات الحديث (25)", url: "https://www.youtube.com/watch?v=Xn9zP8vR6T4" },
    { id: 26, title: "مصطلحات الحديث (26)", url: "https://www.youtube.com/watch?v=M8v9xP4_Z7o" },
    { id: 27, title: "مصطلحات الحديث (27)", url: "https://www.youtube.com/watch?v=J7v9xP4_L3w" },
    { id: 28, title: "مصطلحات الحديث (28)", url: "https://www.youtube.com/watch?v=W9z8vP4_K1A" },
    { id: 29, title: "مصطلحات الحديث (29)", url: "https://www.youtube.com/watch?v=V9z8xP4_J2o" },
    { id: 30, title: "مصطلحات الحديث (30)", url: "https://www.youtube.com/watch?v=U9z8vP4_I3w" },
    { id: 31, title: "مصطلحات الحديث (31)", url: "https://www.youtube.com/watch?v=T9z8xP4_H4o" },
    { id: 32, title: "مصطلحات الحديث (32)", url: "https://www.youtube.com/watch?v=S9z8vP4_G5w" },
    { id: 33, title: "مصطلحات الحديث (33)", url: "https://www.youtube.com/watch?v=R9z8xP4_F6o" },
    { id: 34, title: "مصطلحات الحديث (34)", url: "https://www.youtube.com/watch?v=Q9z8vP4_E7w" },
    { id: 35, title: "مصطلحات الحديث (35)", url: "https://www.youtube.com/watch?v=P9z8xP4_D8o" },
    { id: 36, title: "مصطلحات الحديث (36)", url: "https://www.youtube.com/watch?v=Z-5uWPsuvRw" },
    { id: 37, title: "مصطلحات الحديث (37)", url: "https://www.youtube.com/watch?v=O9z8vP4_C9w" },
    { id: 38, title: "مصطلحات الحديث (38)", url: "https://www.youtube.com/watch?v=N9z8xP4_B0o" },
    { id: 39, title: "مصطلحات الحديث (39)", url: "https://www.youtube.com/watch?v=M9z8vP4_A1w" },
    { id: 40, title: "مصطلحات الحديث (40)", url: "https://www.youtube.com/watch?v=L9z8xP4_Z2o" },
    { id: 41, title: "مصطلحات الحديث (41)", url: "https://www.youtube.com/watch?v=K9z8vP4_Y3w" },
    { id: 42, title: "مصطلحات الحديث (42)", url: "https://www.youtube.com/watch?v=J9z8xP4_X4o" },
    { id: 43, title: "مصطلحات الحديث (43) الخاتمة", url: "https://www.youtube.com/watch?v=I9z8vP4_W5w" }
  ];
  
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