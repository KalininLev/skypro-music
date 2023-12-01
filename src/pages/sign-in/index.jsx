import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import "./SignInStyled.css";
import { loginUser } from "../../modules/api";
import { UserContext } from "../../contexts/authorizationContexts";

export function SignIn() {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const user = useContext(UserContext);

  const userLogIn = async ({ email, password }) => {
    setIsLoading(true);
    if (!email) {
      setError("Введите email");
      return;
    }

    if (!password) {
      setError("Введите пароль");
      return;
    }

    loginUser({ email, password })
      .then(() => {
        user.logIn(email, password);
        user.setUser({ userName: email, password });
      })
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setError(null);
  }, [email]);

  return (
    <div className="wrapper">
      <div className="container-enter">
        <div className="modal__block">
          <form className="modal__form-login" action="#">
            <Link to="/login">
              <div className="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </Link>
            <input
              className="modal__input login"
              type="text"
              name="login"
              placeholder="Почта"
              value={email}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
            <input
              className="modal__input password"
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            {error && <div className="error">{error}</div>}
            <button
              type="button"
              className="modal__btn-enter"
              $isLoading={isLoading}
              onClick={() => userLogIn({ email, password })}
            >
              Войти
            </button>
            <button type="button" className="modal__btn-signup">
              <Link to="/registration">Зарегистрироваться</Link>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
