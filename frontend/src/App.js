import { useContext, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import Book from "./components/Book";
import Books from "./components/Books";
import Navbar from "./components/Navbar";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import { Auth } from "./contexts/Auth";

function App() {
  const [books, setBooks] = useState([]);

  const { user } = useContext(Auth);

  return (
    <BrowserRouter>
      <Navbar />
      <div className="px-14 py-4">
        <Routes>
          <Route
            path="/"
            element={
              user ? (
                <Books setBooks={setBooks} books={books} />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="/:id" element={<Book />} />
          <Route
            path="/signup"
            element={!user ? <Signup /> : <Navigate to="/" />}
          />
          <Route
            path="/login"
            element={
              !user ? (
                <Login/>
              ) : (
                <Navigate to="/" />
              )
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
