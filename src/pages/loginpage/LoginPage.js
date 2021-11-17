import "./loginpage.css";
import { useNavigate} from "react-router-dom"

function LoginPage() {
const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <div className="header__container">
          <div className="header__logo">
            <h3>Clever jolt</h3>
          </div>
          <div className="header__links">
            <span className="header__link">SignUp</span>
            <span className="header__link">Login</span>
          </div>
        </div>
      </header>
      <main>
        <div className="login__container">
          <div className="login__text">
            <h3>Clever jolt</h3>
          </div>
          <div className="login__from__container">
            <form action="" id="login_form">
              <div className="input__box">
                <label for="">Full Name</label>
                <input type="text" placeholder="Enter Name" />
              </div>
              <div className="input__box">
                <label for="">Password</label>
                <input type="password" placeholder="Enter Password" />
              </div>
              <div className="login__action">
                <input type="checkbox" placeholder="Enter Password" />
                <label for="">Remember me</label>
                <span className="forgetpass">Forget Password?</span>
              </div>
              <button onClick={ () => navigate('/') }  className="login__submit-btn">
                Login
              </button>
            </form>
          </div>
        </div>
      </main>
    </>
  );
}

export default LoginPage;
