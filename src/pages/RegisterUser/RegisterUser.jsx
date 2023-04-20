import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAuth } from "../../context/authContext";

const RegisterUser = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signup(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/weak-password") {
        setError("Contraseña debil, intenta poner mas de 6 caracteres");
      } else if (error.code === "auth/invalid-email") {
        setError("Correo electronico invalido");
      } else if (error.code === "auth/email-already-in-use") {
        setError("Correo electronico ya esta en uso");
      }
    }
  };
  return (
    <div>
      <div>
        <Header />
        <div
          className="hero min-h-screen"
          style={{
            backgroundImage: `url("https://img.freepik.com/foto-gratis/feliz-joven-compania-amigos-sonrientes-sentado-parque-usando-telefonos-inteligentes_285396-7616.jpg")`,
          }}
        >
          <div className="hero-overlay "></div>
          <div className="hero min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold text-white">
                  Registrate ahora!
                </h1>
                <p className="py-6 text-2xl text-white">
                  Con tus datos y con un simple click podras tener todo al
                  alcance de tu mano.
                </p>
                <p className="py-1 text-2xl text-white">¡Registrate ahora!</p>
              </div>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white/60">
                <div className="card-body">
                  <form className="form-control">
                    <input
                      type="email"
                      name="email"
                      placeholder="Correo electronico"
                      onChange={handleChange}
                      className="input input-bordered bg-white/80 text-black placeholder-black/50"
                    />
                  </form>
                  <form className="form-control">
                    <input
                      type="password"
                      name="password"
                      placeholder="Contraseña"
                      onChange={handleChange}
                      className="input input-bordered bg-white/80 text-black placeholder-black/50"
                    />
                  </form>
                  <Link to="/">
                    <div className="form-control mt-3">
                      {error && <p className="text-black pb-3">{error}</p>}
                      <button
                        className="btn btn-primary bg-red-600"
                        onClick={handleSubmit}
                      >
                        Registrate
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RegisterUser;
