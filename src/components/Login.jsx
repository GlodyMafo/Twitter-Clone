import Button from "./Btn";
import { Link } from "react-router-dom";
import "./auth.css";
export function Login() {
  return (
    <>

   
    <h1>Login in to Twitter</h1>

    <div className="Form">
    <input type="text" placeholder="Enter Your Email" className="iputsDes"/>
      <input type="text" placeholder="Enter Your Password" className="iputsDes"/>
      <Button type="submit" name="Login" class="Auth-btn"/>
    </div>
      

      <div className="changeLink alingLink">
        <p>Forgot Password</p>
        <Link className="link-style" to="./signup">
          <p>Sign up to Twitter</p>
        </Link>
      </div>
 
     
    </>
  );
}
