import React, { useState } from "react";
import { useSignup } from "../hooks/useSignup";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, signup } = useSignup();

  const handleSignup = async () => {
    await signup(email, password);
  };

  return (
    <div className="mb-4">
      <label>Email:</label>
      <input
        type="text"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="w-full border border-1 rounded-sm bg-blue-100 p-2 mb-2"
      />
      <label>Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        className="w-full border border-1 rounded-sm bg-blue-100 p-2 mb-2"
      />
      <button
        disabled={isLoading}
        onClick={handleSignup}
        className="m-2 bg-blue-300 p-2 rounded-sm block mx-auto"
      >
        Signup
      </button>
      {error && (
        <div>
            <p>{error}</p>
        </div>
      )}
    </div>
  );
}
