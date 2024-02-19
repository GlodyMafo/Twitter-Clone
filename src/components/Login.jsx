import Button from "./Btn";
import { Link } from "react-router-dom";
export function Login() {
  return (
    <>
      <h1>Login in to Twitter</h1>
      <input type="text" />
      <input type="text" />
      <Button type="submit" name="Login" class=""></Button>

      <div className="changeLink">
        <p>Forgot Password</p>
        <Link className="link-style" to="/">
          <p>Sign up to Twitter</p>
        </Link>
      </div>
    </>
  );
}
