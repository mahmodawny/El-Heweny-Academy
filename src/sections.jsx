import { Link } from "react-router-dom";

export default function Sections(){
   return(
     <nav>
       <ul>
         <li>
           <Link to="/">الصفحة الرئيسية</Link>
         </li>
         <li>
           <Link to="/books">كتب</Link>
         </li>
         <li>
           <Link to="/sunnah">شروح السنة</Link>  
         </li>
         <li>
           <Link to="/posts">منشورات</Link>
         </li>
         <li>
           <Link to="/lessons">دروس مصطلح الحديث</Link>
         </li>
         <li>
           <Link to="/">أحاديث منتشرة لا تصح</Link>
         </li>
       </ul>
     </nav>
   )
}