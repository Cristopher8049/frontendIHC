import { Link, useNavigate } from 'react-router-dom';

const MyEvents = () => {
    const navigate = useNavigate();

    const handleCreateEventClick = () => {
        navigate('/CreateEvent');
    };

    return (
        <div className="min-h-screen flex flex-col px-6 sm:px-20 py-10 bg-white">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm text-gray-500">
                <Link to="/account" className="hover:underline">
                    Mi cuenta
                </Link>{' '}
                &gt;{' '}
                <span className="text-gray-800 font-medium">Mis eventos</span>
            </div>

            {/* Page Title */}
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold text-gray-900">Mis eventos</h1>
                <button
                    onClick={handleCreateEventClick}
                    className="bg-customblue text-white py-2 px-6 rounded-lg hover:bg-slate-700 transition"
                >
                    Crear Evento
                </button>
            </div>

            {/* Events Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Event Card 1 */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition">
                    <img
                        src="https://via.placeholder.com/400x200?text=DUKI+Image"
                        alt="DUKI - Estacion Festival"
                        className="h-40 w-full object-cover"
                    />
                    <div className="p-4">
                        <div className="flex items-baseline space-x-2 mb-2">
                            <span className="text-indigo-700 font-bold text-xl">MAR</span>
                            <span className="text-xl font-bold text-gray-700">2</span>
                        </div>
                        <h3 className="font-semibold text-gray-800 text-lg">
                            <Link to="/Account/events/thisEvent" className="cursor-pointer">
                                DUKI – ESTACION FESTIVAL SONILUM
                            </Link>
                        </h3>
                    </div>
                </div>

                {/* Placeholder Event Cards */}
                {[...Array(5)].map((_, i) => (
                    <div
                        key={i}
                        className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col hover:shadow-lg transition"
                    >
                        <img
                            src="https://via.placeholder.com/400x200?text=DUKI+Image"
                            alt="DUKI - Estacion Festival"
                            className="h-40 w-full object-cover"
                        />
                        <div className="p-4">
                            <div className="flex items-baseline space-x-2 mb-2">
                                <span className="text-indigo-700 font-bold text-xl">MAR</span>
                                <span className="text-xl font-bold text-gray-700">
                                    {i % 2 === 0 ? '6' : '2'}
                                </span>
                            </div>
                            <h3 className="font-semibold text-gray-800 text-lg">
                                <Link to="/Account/events/thisEvent" className="cursor-pointer">
                                    DUKI – ESTACION FESTIVAL SONILUM
                                </Link>
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MyEvents;
