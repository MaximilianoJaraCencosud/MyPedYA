import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useAuth } from "../../context/authContext";
import { useState } from "react";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { login, loginWithGoogle } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState();

  const handleChange = ({ target: { name, value } }) => {
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await login(user.email, user.password);
      navigate("/");
    } catch (error) {
      if (error.code === "auth/wrong-password") {
        setError("Las credenciales no coinciden con nuestra base de datos");
      } else if (error.code === "auth/user-not-found") {
        setError("Usuario no encontrado");
      } else if (error.code === "auth/invalid-email") {
        setError("Las credenciales no coinciden con nuestra base de datos");
      }
    }
  };
  const handleGoogleSignin = async (e) => {
    e.preventDefault();
    await loginWithGoogle();
    navigate("/");
  };
  return (
    <div>
      <Header />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://cloudfront-us-east-1.images.arcpublishing.com/prisaradioco/ANHOGWBBKFO4NOHJ5ZJ2GJWGDA.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero min-h-screen">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold text-white">Ingresa ahora!</h1>
              <p className="py-6 text-2xl text-white">
                Con tus datos y con un simple click podras tener todo al alcance
                de tu mano.
              </p>
              <p className="py-1 text-2xl text-white">
                ¡En caso de todavia no tener tu cuenta registrate ahora!
              </p>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white/60">
              <div className="card-body">
                <div className="form-control">
                  <input
                    type="email"
                    name="email"
                    placeholder="Correo electronico"
                    onChange={handleChange}
                    className="input input-bordered bg-white/80 text-black placeholder-black/50"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="password"
                    name="password"
                    placeholder="Contraseña"
                    onChange={handleChange}
                    className="input input-bordered bg-white/80 text-black placeholder-black/50"
                  />

                  <Link to="/register" className=" mt-3 text-red-600 link">
                    No tienes cuenta? ¡Registrate!
                  </Link>
                </div>
                <Link to="/">
                  <div className="form-control mt-3">
                    {error && <p className="text-black pb-3">{error}</p>}
                    <button
                      className="btn btn-primary bg-red-600"
                      onClick={handleSubmit}
                    >
                      Ingresa con tu cuenta registrada
                    </button>

                    <button
                      onClick={handleGoogleSignin}
                      class="btn gap-2 mt-4 bg-red-600 text-white hover:bg-blue-500"
                    >
                      <svg
                        className="color: white"
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-google"
                        viewBox="0 0 16 16"
                      >
                        <path
                          d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z"
                          fill="white"
                        ></path>
                      </svg>
                      Ingresa con Google
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
  );
};

export default Login;
