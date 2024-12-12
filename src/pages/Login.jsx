
import logoIcon from "C:/Users/FernandoC/Desktop/IHC/frontendIHC/src/assets/IconLogo.png";

const Login = () => {
    return (
        <div className="min-h-screen flex">
            {/* Left Section */}
            <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Login</h1>
                <p className="text-gray-600 mb-8">
                    Ingresa tu usuario y contraseña para iniciar sesión
                </p>
                <form className="w-full max-w-sm">
                    {/* Username Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                            Usuario
                        </label>
                        <input
                            id="username"
                            type="text"
                            placeholder="Usuario"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customblue"
                        />
                    </div>
                    {/* Password Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="Contraseña"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customblue"
                        />
                    </div>
                    {/* Login Button */}
                    <button
                        type="submit"
                        className="w-full bg-customblue text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Iniciar Sesión
                    </button>
                </form>
                <p className="text-gray-600 mt-4">
                    ¿No tienes una cuenta?{' '}
                    <a href="/SignUp" className="text-customblue hover:underline">
                        Regístrate
                    </a>
                </p>
            </div>

            {/* Right Section */}
            <div className="hidden md:flex w-1/2 bg-customblue justify-center items-center">
                <div className="text-white text-9xl font-bold">
                    <img
                        src={logoIcon} // Reusing your logo for the right section
                        alt="TicketBO"
                        className="w-52"
                    />
                </div>
            </div>
        </div>
    );
};

export default Login;
