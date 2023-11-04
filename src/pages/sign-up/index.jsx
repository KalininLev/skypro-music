import { useContext, useEffect, useState } from "react";
import "./SignUpStyled.css";
import { registrationUser } from "../../modules/api";
import { UserContext } from "../../contexts/authorizationContexts";

export function SignUp() {
  const [error, setError] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const user = useContext(UserContext);

  const userSignUp = async () => {
    setIsLoading(true);
    if (!email) {
      setError("Введите email");
      return;
    }

    if (!password) {
      setError("Введите пароль");
      return;
    }

    if (!repeatPassword) {
      setError("Повторите пароль");
      return;
    }

    if (password !== repeatPassword) {
      setError("Пароли не совпадают");
      return;
    }

    registrationUser({ email, password })
      .then(() => {
        user.logIn(email, password);
        user.setUser({ userName: email, password });
      })
      .catch((error) => {
        setError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  useEffect(() => {
    setError(null);
  }, [email, password, repeatPassword]);

  return (
    <div className="wrapper">
      <div className="container-signup">
        <div className="modal__block">
          <form className="modal__form-login">
            <a href="../">
              <div className="modal__logo">
                <img src="../img/logo_modal.png" alt="logo" />
              </div>
            </a>
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
              className="modal__input password-first"
              type="password"
              name="password"
              placeholder="Пароль"
              value={password}
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />
            <input
              className="modal__input password-double"
              type="password"
              name="password"
              placeholder="Повторите пароль"
              value={repeatPassword}
              onChange={(event) => {
                setRepeatPassword(event.target.value);
              }}
            />
            {error && <div className="error">{error}</div>}
            <button
              type="button"
              className="modal__btn-signup-ent"
              $isLoading={isLoading}
              onClick={userSignUp}
            >
              Зарегистрироваться
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
