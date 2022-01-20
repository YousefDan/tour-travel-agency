import "./login-form.scss";

const LoginForm = ({ loginForm, setLoginForm }) => {
  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <section
      onClick={() => setLoginForm(false)}
      style={{ top: loginForm && "0" }}
      className="login"
    >
      <i className="fas fa-times"></i>
      <div onClick={(e) => e.stopPropagation()} className="form-container">
        <h1>LOGIN</h1>
        <form onSubmit={formSubmitHandler}>
          <input type="text" placeholder="enter your email" />
          <input type="password" placeholder="enter your password" />
          <input type="submit" value="Login Now" />
          <div className="checkbox-wrapper">
            <input type="checkbox" id="remember" />
            <label htmlFor="remember">Remember Me</label>
          </div>
        </form>
        <div>
          Forget Password? <span>Click Here</span>
        </div>
        <div>
          Don't Have An Account? <span>Register Now</span>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
