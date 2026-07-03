import { useState, type FormEvent } from "react";

const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const newAccount = () => {
    if (!isLogin) {
      setIsLogin(true);
    } else {
      setIsLogin(false);
    }
  };
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!isValidEmail(email)) {
      setEmailError("Invalid email");
      return;
    }
    setEmailError("");

    //parte del backend
    if (isLogin) {
      console.log("Iniciando sesión con:", { email, password });
    } else {
      console.log("Registrando usuario:", { email, password, username });
    }
  };

  return (
    <div className="login-wrapper">
      <div className="login-card ">
        <div className="login-card h2">
          <h2>{isLogin ? "Login" : "Singup"}</h2>
        </div>
        <form className="auth-form">
          <div className="form-group">
            <label className="form-group label">Correo</label>
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                if (emailError) setEmailError(""); // Limpia el error mientras el usuario escribe
              }}
              required
            />
            {/* Si hay un error, lo mostramos en rojo abajo del input */}
            {emailError && (
              <span
                style={{ color: "red", fontSize: "0.8rem", marginTop: "4px" }}
              >
                {emailError}
              </span>
            )}
          </div>
          <div className="form-group">
            <label className="form-group label">Contraseña</label>
            <input type="password" className="form-group input"></input>
          </div>
          {!isLogin && (
            <div className="form-group">
              <label className="form-group label">Usurio</label>
              <input type="text" className="form-group input"></input>
            </div>
          )}
          <p className="toggle-text">
            {isLogin ? "No tienes cuenta?" : "Ya tienes cuenta?"}
            <span
              className="toggle-link"
              onClick={newAccount}
              style={{
                cursor: "pointer",
                color: "blue",
                textDecoration: "underline",
              }}
            >
              {isLogin ? "Registrate" : "Inicia sesion"}
            </span>
          </p>
          <button type="submit" className="submit-btn">
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
