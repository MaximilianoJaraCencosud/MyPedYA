import React from "react";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

const RegisterLocal = () => {
  return (
    <div>
      <Header />
      <div
        className="hero min-h-screen"
        style={{
          backgroundImage: `url("https://img.freepik.com/foto-gratis/diversidad-casual-teenager-team-success-winning-concept_53876-23003.jpg")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md"></div>
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold mb-4 text-white">
                Empieza a vender desde la app mas grande del planeta
              </h1>
              <p className="py-2 text-white">
                →El mejor canal de ventas para tu local
              </p>
              <p className="py-2 text-white">
                →En el bolsillo de millones de usuarios
              </p>
              <p className="py-2 text-white">
                →El sistema de entrega más avanzado
              </p>
              <p className="py-2 text-white">
                →Todo tu menú online y autogestionable
              </p>
              <h1 className="text-2xl mt-6 font-bold text-white">
                ¡Registra tu local ahora mismo!
              </h1>
            </div>
            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-white/60">
              <div className="card-body">
                <input
                  type="text"
                  placeholder="Nombre del local"
                  className="input input-bordered bg-white/80 text-black placeholder-black/50"
                />

                <input
                  type="text"
                  placeholder="Telefono de Contacto"
                  className="input input-bordered bg-white/80 text-black placeholder-black/50 mt-2"
                />

                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="input input-bordered bg-white/80 text-black mt-2 placeholder-black/50"
                />
                <input
                  type="text"
                  placeholder="Nombre del local"
                  className="input input-bordered bg-white/80 text-black mt-2 placeholder-black/50"
                />

                <input
                  type="text"
                  placeholder="Dirección del local"
                  className="input input-bordered mt-2 bg-white/80 text-black placeholder-black/50"
                />
                <select className="select  bg-white/80 text-black placeholder-black/50  select-bordered mt-2">
                  <option disabled selected>
                    Tipo de negocio
                  </option>
                  <option>Restaurante</option>
                  <option>Mercado</option>
                  <option>Farmacia</option>
                  <option>Kiosco</option>
                  <option>Otro...</option>
                </select>
                <div className="form-control mt-6">
                  <button className="btn bg-red-600 btn-primary">
                    Comenzar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default RegisterLocal;
