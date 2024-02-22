import Button from "./Btn";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./auth.css";
import axios from "axios";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        password,
      });
      console.log(response.data); 
    } catch (error) {
      console.error("Erreur de connexion :", error);
    }
  };
  return (
    <>
      <h1>Login in to Twitter</h1>
      <form onSubmit={handleSubmit}>
        <div className="Form">
          <input
            type="text"
            placeholder="Enter Your Email"
            className="iputsDes"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Enter Your Password"
            className="iputsDes"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Link className="link-style" to="./homefield">
            <Button type="submit" name="Login" class="Auth-btn" />
          </Link>
        </div>
      </form>
      <div className="changeLink alingLink">
          <p>Forgot Password</p>
          <Link className="link-style" to="./signup">
            <p>Sign up to Twitter</p>
          </Link>
        </div>
    </>
  );
}
