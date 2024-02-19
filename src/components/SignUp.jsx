import Button from "./Btn";
import "./auth.css";
import { Link } from "react-router-dom";
export function Signup() {
  return (
    <>
      <h1>Signup in to Twitter</h1>
      <input type="text" />
      <input type="text" />
      <Button type="submit" name="Sign up" class=""></Button>
      <div>
        <p>Forgot Password</p>
        <Link className="link-style" to="./signup">
          <p>Sign up to Twitter</p>
        </Link>
      </div>
    </>
  );
}
