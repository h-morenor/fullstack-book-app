import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Book from "./components/Book";
import Books from "./components/Books";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {
  const [books, setBooks] = useState([]);
  console.log(books)

  return (
    <BrowserRouter>
      <Navbar />
      <div className="px-14 py-4">
        <Routes>
          <Route path="/" element={<Books setBooks={setBooks} books={books} />} />
          <Route path="/:id" element={<Book />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
