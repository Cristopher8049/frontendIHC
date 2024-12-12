import logoIcon from "C:/Users/FernandoC/Desktop/IHC/frontendIHC/src/assets/IconLogo.png";

const SignUp = () => {
    return (
        <div className="min-h-screen flex">
            {/* Left Section */}
            <div className="w-full md:w-1/2 bg-white flex flex-col justify-center items-center p-10">
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Regístrate</h1>
                <p className="text-gray-600 mb-8">
                    Ingresa tus detalles para registrarte
                </p>
                <form className="w-full max-w-sm">
                    {/* Name Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                            Nombre
                        </label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Nombre"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customblue"
                        />
                    </div>
                    {/* Email Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                            Correo
                        </label>
                        <input
                            id="email"
                            type="email"
                            placeholder="Correo"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customblue"
                        />
                    </div>
                    {/* Phone Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                            Teléfono
                        </label>
                        <div className="flex items-center border rounded-md px-3 py-2 focus-within:ring-2 focus-within:ring-customblue">
                            <span className="pr-2">🇧🇴</span>
                            <input
                                id="phone"
                                type="tel"
                                placeholder="+598 Número Telefónico"
                                className="w-full focus:outline-none"
                            />
                        </div>
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
                    {/* Confirm Password Field */}
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirm-password">
                            Confirmar contraseña
                        </label>
                        <input
                            id="confirm-password"
                            type="password"
                            placeholder="Confirma contraseña"
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customblue"
                        />
                    </div>
                    {/* Register Button */}
                    <button
                        type="submit"
                        className="w-full bg-customblue text-white py-2 rounded-md hover:bg-blue-700 transition"
                    >
                        Registrarme
                    </button>
                </form>
                <p className="text-gray-600 mt-4">
                    ¿Ya registrado?{' '}
                    <a href="/login" className="text-customblue hover:underline">
                        Inicia Sesión
                    </a>
                </p>
            </div>

            {/* Right Section */}
            <div className="hidden md:flex w-1/2 bg-customblue justify-center items-center">
                <div className="text-white text-9xl font-bold">
                    <img
                        src={logoIcon}
                        alt="TicketBO"
                        className="w-52"
                    />
                </div>
            </div>
        </div>
    );
};

export default SignUp;
