import Button from "./Btn";
import "./auth.css";
import { Link } from "react-router-dom";
export function Signup() {
  return (
    <>
      <h1>Signup in to Twitter</h1>
      <div className="Form">
      <input type="text" placeholder="Enter your name" className="iputsDes"/>
      <input type="text" placeholder="Enter your Email" className="iputsDes"/>
      <input type="text" placeholder="Enter Your password" className="iputsDes"/>
      <Button type="submit" name="Sign up" class="Auth-btn"></Button>
      </div>
      <div className="changeLink alingLink">
        <p>Forgot Password</p>
        <Link className="link-style" to="/">
          <p>login in to Twitter</p>
        </Link>
      </div>
    </>
  );
}
