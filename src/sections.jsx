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
           <Link to="/">خطب</Link>  
         </li>
         <li>
           <Link to="/">منشورات</Link>  
         </li>
         <li>
           <Link to="/lessons">دروس مصطلح الحديث</Link>
         </li>
       </ul>
     </nav>
   )
}