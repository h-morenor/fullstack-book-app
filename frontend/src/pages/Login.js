import React, { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, isLoading, login } = useLogin();

  const handleLogin = async () => {
    await login(email, password);
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
        onClick={handleLogin}
        disabled={isLoading}
        className="m-2 bg-blue-300 p-2 rounded-sm block mx-auto"
      >
        Login
      </button>
      {error && <p className="">{error}</p>}
    </div>
  );
}
