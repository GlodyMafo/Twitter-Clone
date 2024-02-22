import Button from "./Btn";
import React, { useState } from "react";
import "./auth.css";
import { Link } from "react-router-dom";
import axios from "axios";

export function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/sign", {
        name,
        email,
        password,
      });
      console.log(response.data);
    } catch (error) {
      console.error("Erreur lors de l'inscription :", error);
    }
  };

  return (
    <>
      <h1>Signup in to Twitter</h1>

      <form onSubmit={handleSignup}>
        <div className="Form">
          <input
            type="text"
            placeholder="Enter your name"
            className="iputsDes"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter your Email"
            className="iputsDes"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Your password"
            className="iputsDes"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" name="Sign up" class="Auth-btn"></Button>
        </div>
      </form>

      <div className="changeLink alingLink">
        <p>Forgot Password</p>
        <Link className="link-style" to="/">
          <p>login in to Twitter</p>
        </Link>
      </div>
    </>
  );
}
