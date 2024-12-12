import { Link } from "react-router-dom";
import logo from "C:/Users/FernandoC/Desktop/IHC/frontendIHC/src/assets/logo.png"

const Navbar = () => {
  return (
    <header className="flex justify-between items-center text-black py-6 px-8 md:px-32 bg-white drop-shadow-md" >
      <Link to="/">
        <img src={logo} alt="" className="w-52 hover:scale-105 transition-all" />
      </Link>
      <ul className="hidden xl:flex items-center gap-12 font-semibold text-base ml-auto">
        <li className="p-3 hover:bg-slate-600 hover:text-white rounded-md transition-all cursor-pointer">
          <Link to="/explore">Explorar</Link>
        </li>
        <li className="p-3 hover:bg-slate-600 hover:text-white rounded-md transition-all cursor-pointer">
          <Link to="/Account">Mi Cuenta</Link>
        </li>
        <li className="p-3 hover:bg-slate-600 hover:text-white rounded-md transition-all cursor-pointer">
          <Link to="/Support">Soporte</Link>
        </li>
        <li className="p-3 bg-slate-600 text-white rounded-2xl hover:text-white transition-all cursor-pointer">
          <Link to="/Login">Iniciar Sesion</Link>
        </li>
      </ul>
    </header>
  );
};

export default Navbar;