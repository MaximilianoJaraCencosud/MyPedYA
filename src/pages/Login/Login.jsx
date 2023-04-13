import React from "react";
import { Link } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const Login = () => {
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
                    type="text"
                    placeholder="Correo electronico"
                    className="input input-bordered bg-white/80 text-black placeholder-black/50"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    placeholder="Contraseña"
                    className="input input-bordered bg-white/80 text-black placeholder-black/50"
                  />

                  <Link
                    to="/register"
                    className=" mt-3 text-red-600 link-hover"
                  >
                    No tienes cuenta? ¡Registrate!
                  </Link>
                </div>
                <Link to="/">
                  <div className="form-control mt-6">
                    <button className="btn btn-primary bg-red-600">
                      Disfruta
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
