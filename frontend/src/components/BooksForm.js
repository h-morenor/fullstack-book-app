import React, { useContext, useState } from "react";
import { Auth } from "../contexts/Auth";

export default function BooksForm({setBooks}) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState(0);

  const {user} = useContext(Auth)

  console.log(title);

  const handleAddBook = async () => {
    if (!user) {
      console.log('user not found!')
      return
    }
    const book = { title, price, author };

    const response = await fetch("/api/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${user.token}`
      },
      body: JSON.stringify(book),
    });

    const json = await response.json()

    console.log(json)

    setBooks(prevState => [...prevState, json])
    
  };
  return (
    <div className="mb-4">
      <label>Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        className="w-full border border-1 rounded-sm bg-blue-100 p-2 mb-2"
      />
      <label>Author:</label>
      <input
        type="text"
        value={author}
        onChange={(e) => {
          setAuthor(e.target.value);
        }}
        className="w-full border border-1 rounded-sm bg-blue-100 p-2 mb-2"
      />
      <label>price:</label>
      <input
        type="number"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
        className="w-full border border-1 rounded-sm bg-blue-100 p-2 mb-2"
      />
      <button
        onClick={handleAddBook}
        className="m-2 bg-blue-300 p-2 rounded-sm block mx-auto"
      >
        Add Book
      </button>
    </div>
  );
}
