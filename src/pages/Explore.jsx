import { useNavigate } from 'react-router-dom';

const Explore = () => {
    const navigate = useNavigate();

    const handleCardClick = () => {
        navigate('/EventSelected');
    };

    return (
        <>
            <div className="w-full">
                {/* Top Section with Filters */}
                <div
                    className="relative w-full h-48 overflow-hidden"
                    style={{ background: 'white' }}
                >
                    <div className="absolute inset-0 flex items-center justify-center mt-10">
                        <div className="bg-customblue text-white rounded-xl shadow-lg p-6 w-full max-w-4xl flex flex-col md:flex-row items-center gap-4 md:gap-8">
                            <div className="flex-1 w-full">
                                <label className="block text-sm font-medium mb-1">Buscar Evento</label>
                                <input
                                    type="text"
                                    placeholder="Buscar Evento"
                                    className="w-full rounded-md p-2 text-gray-800"
                                />
                            </div>
                            <div className="flex-1 w-full">
                                <label className="block text-sm font-medium mb-1">Lugar</label>
                                <select className="w-full rounded-md p-2 text-gray-800">
                                    <option>Santa Cruz</option>
                                    <option>La Paz</option>
                                    <option>Cochabamba</option>
                                </select>
                            </div>
                            <div className="flex-1 w-full">
                                <label className="block text-sm font-medium mb-1">Fecha</label>
                                <select className="w-full rounded-md p-2 text-gray-800">
                                    <option>fecha</option>
                                    <option>Hoy</option>
                                    <option>Mañana</option>
                                    <option>Este Fin de Semana</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="max-w-7xl mx-auto py-10 px-4 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-bold text-gray-800 mb-8">Próximos Eventos</h2>

                    {/* Additional Filters Row */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        <div>
                            <label className="mr-2 font-medium text-gray-700">Entre semana</label>
                            <select className="rounded-md p-2 text-gray-800">
                                <option>Todos</option>
                                <option>Próxima semana</option>
                                <option>Este mes</option>
                            </select>
                        </div>
                        <div>
                            <label className="mr-2 font-medium text-gray-700">Tipo de evento</label>
                            <select className="rounded-md p-2 text-gray-800">
                                <option>Todos</option>
                                <option>Concierto</option>
                                <option>Festival</option>
                                <option>Teatro</option>
                            </select>
                        </div>
                        <div>
                            <label className="mr-2 font-medium text-gray-700">Categoría</label>
                            <select className="rounded-md p-2 text-gray-800">
                                <option>Todos</option>
                                <option>Rock</option>
                                <option>Pop</option>
                                <option>Electrónica</option>
                            </select>
                        </div>
                    </div>

                    {/* Event Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                        {[...Array(8)].map((_, i) => (
                            <div
                                key={i}
                                className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col hover:shadow-md transition cursor-pointer"
                                onClick={handleCardClick} // Redirect to the same EventSelected page
                            >
                                <div className="bg-gray-300 h-40 w-full"></div>
                                <div className="flex flex-col p-4">
                                    <div className="flex items-baseline space-x-2 mb-2">
                                        <span className="text-indigo-700 font-bold text-xl">MAR</span>
                                        <span className="text-xl font-bold text-gray-700">{i % 2 === 0 ? '2' : '6'}</span>
                                    </div>
                                    <h3 className="font-semibold text-gray-800 text-lg">DUKI – ESTACION FESTIVAL SONILUM</h3>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="flex justify-center mt-10">
                        <button className="bg-transparent border border-gray-800 text-gray-800 py-2 px-6 rounded-full hover:bg-gray-800 hover:text-white transition">
                            Cargar Más...
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Explore;
