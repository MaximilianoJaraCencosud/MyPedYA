import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Header = () => {
  const { user, logout, loading } = useAuth();
  const handleLogout = async () => {
    await logout();
  };
  return (
    <div>
      <div className="navbar bg-white">
        <div className="flex-1 px-2 lg:flex-none">
          <Link to="/" className=" ml-10 text-lg font-bold text-red-500">
            <img
              className="h-11"
              src="https://lh3.googleusercontent.com/VfxOAPkn2bm0WcRUTu73h1_8EQEFclcJHmkhcMsmLssT2TdgVH-boOO_E2UgI1wiZ0cJS_ARzOeR_dMKGukdw4pVMUxBSlzZInap_AK-Cr8WFzZBMlY"
            ></img>
          </Link>
        </div>
        <div className="flex justify-end flex-1 px-2">
          <div className="flex items-stretch">
            <Link to="/newLocal">
              <button className="btn text-white bg-gray-600 mt-2 mr-5 border-none no-animation btn-sm">
                Registra tu negocio
              </button>
            </Link>
            <div className="dropdown dropdown-end mr-10">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {loading ? (
                    <img src="https://i.pinimg.com/280x280_RS/42/03/a5/4203a57a78f6f1b1cc8ce5750f614656.jpg"></img>
                  ) : user?.photoURL ? (
                    <img src={`${user?.photoURL}`} />
                  ) : (
                    <img src="https://mammadontpreach.files.wordpress.com/2017/07/captura-de-pantalla-2017-07-21-a-las-12-07-49-a-m.png" />
                  )}
                </div>
              </label>
              <ul
                tabIndex={0}
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-white rounded-box w-52"
              >
                <li>
                  <Link to="/help" className="text-black">
                    <img
                      className="h-8 w-8"
                      src="https://thumbs.dreamstime.com/b/icono-de-vector-servicio-soporte-signo-ilustraci%C3%B3n-ayuda-al-cliente-l%C3%ADnea-directa-s%C3%ADmbolo-del-centro-llamadas-para-sitios-web-o-170675261.jpg"
                    ></img>
                    Ayuda en línea
                  </Link>
                </li>
                <li>
                  {user && (
                    <Link to="/profile" className="text-black">
                      <img
                        className="h-8 w-8"
                        src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg"
                      ></img>
                      Perfil
                    </Link>
                  )}
                  {user && (
                    <button onClick={handleLogout} className="text-black">
                      <img
                        className="h-8 w-8"
                        src="https://static.vecteezy.com/system/resources/previews/012/937/876/non_2x/exit-door-icon-vector.jpg"
                      ></img>
                      Cerrar sesión
                    </button>
                  )}
                  {!user && (
                    <Link to="/login" className="text-black">
                      <img
                        className="h-8 w-8"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3erXIA-EjSG5aMz8f3quCirBLLQ7AmD_d9e5XXhgTSIxZdeb51FcTjCE8VpGtsgSSHaM&usqp=CAU"
                      ></img>
                      Iniciar sesión / Registrarse
                    </Link>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
