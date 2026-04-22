import "./App.css";
import Header from "./header";
import Home from "./Home";
import Posts from "./posts";
import Feedback from "./feedback";
import Lessons from "./Lessons";
import Books from "./books";
import BookViewer from "./BookViewer";
import Sections from "./sections";
import { Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Sections />

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<> <Posts /> <Feedback /> </>} />
          <Route path="/lessons" element={<Lessons />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<BookViewer />} />
        </Routes>
      </main>
    </div>
  );
}
