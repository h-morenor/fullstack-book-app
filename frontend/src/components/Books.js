import React, { useContext, useEffect, useState } from "react";
import { Auth } from "../contexts/Auth";
import BookItem from "./BookItem";
import BooksForm from "./BooksForm";

export default function Books({ books, setBooks }) {
  const { user } = useContext(Auth);

  useEffect(() => {
    if(!user) {
      return
    }
    const fetchBooks = async () => {
      const response = await fetch("/api/books", {
        headers: {
          "Authorization": `Bearer ${user.token}`,
        },
      });
      const json = await response.json();
      setBooks(json);
    };

    fetchBooks();
  }, [user]);

  return (
    <div>
      <BooksForm setBooks={setBooks} />
      <div>
        {books.map((book) => {
          return <BookItem book={book} key={book._id} />;
        })}
      </div>
    </div>
  );
}
