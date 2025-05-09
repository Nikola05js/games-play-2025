import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useAuth";
import { useForm } from "../../hooks/useForm";

export default function Login() {
    const login = useLogin();
    const navigate = useNavigate(); 
    const { values, changeHandler, submitHandler } = useForm(
        { email: "", password: "" },
        async ({ email, password }) => {
            try {
                await login(email, password)
                navigate('/')
            } catch (error) {
                consol.log(error.message)
            }
        }
    );

  return (
    <>
      {/* <!-- Login Page ( Only for Guest users ) --> */}
      <section id="login-page" className="auth">
        <form id="login" onSubmit={submitHandler}>
          <div className="container">
            <div className="brand-logo"></div>
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={values.email}
              onChange={changeHandler}
              placeholder="Sokka@gmail.com"
            />

            <label htmlFor="login-pass">Password:</label>
            <input
              type="password"
              id="login-password"
              name="password"
              value={values.password}
              onChange={changeHandler}
            />
            <input type="submit" className="btn submit" value="Login" />
            <p className="field">
              <span>
                If you don't have profile click <a href="#">here</a>
              </span>
            </p>
          </div>
        </form>
      </section>
    </>
  );
}
