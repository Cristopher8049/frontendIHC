import { useState } from 'react';
import { Link } from 'react-router-dom';

const EventDetails = () => {
    const [isEditing, setIsEditing] = useState({
        name: false,
        description: false,
        date: false,
    });

    const [eventData, setEventData] = useState({
        name: 'DUKI - ESTACION FESTIVAL',
        description:
            'El domingo 2 de marzo de 2025 estará actuando Duki en Santa Cruz en el Estacion Festival...',
        date: '02/03/2025',
    });

    const handleEditToggle = (field) => {
        setIsEditing((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = (field) => {
        handleEditToggle(field); // Close edit mode
    };

    return (
        <div className="min-h-screen flex flex-col px-6 sm:px-20 py-10 bg-white">
            {/* Breadcrumb */}
            <div className="mb-6 text-sm text-gray-500">
                <Link to="/account" className="hover:underline">
                    Mi cuenta
                </Link>{' '}
                &gt;{' '}
                <Link to="/account/events" className="hover:underline">
                    Mis Eventos
                </Link>{' '}
                &gt;{' '}
                <span className="text-gray-800 font-medium">Nombre Evento</span>
            </div>

            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Nombre Evento</h1>

            {/* Event Details */}
            <div className="space-y-6">
                {/* Event Name */}
                <div className="flex justify-between items-center border-b pb-4">
                    <div>
                        <h2 className="text-lg text-gray-700">Nombre</h2>
                        {isEditing.name ? (
                            <input
                                type="text"
                                name="name"
                                value={eventData.name}
                                onChange={handleInputChange}
                                className="border border-gray-300 rounded-md p-2 w-full text-gray-800"
                            />
                        ) : (
                            <p className="text-gray-600">{eventData.name}</p>
                        )}
                    </div>
                    <button
                        onClick={() =>
                            isEditing.name ? handleSave('name') : handleEditToggle('name')
                        }
                        className="text-blue-600 font-medium hover:underline"
                    >
                        {isEditing.name ? 'Guardar' : 'Editar'}
                    </button>
                </div>

                {/* Event Description */}
                <div className="flex justify-between items-center border-b pb-4">
                    <div>
                        <h2 className="text-lg text-gray-700">Descripción</h2>
                        {isEditing.description ? (
                            <textarea
                                name="description"
                                value={eventData.description}
                                onChange={handleInputChange}
                                className="border border-gray-300 rounded-md p-2 w-full text-gray-800"
                                rows="3"
                            />
                        ) : (
                            <p className="text-gray-600">{eventData.description}</p>
                        )}
                    </div>
                    <button
                        onClick={() =>
                            isEditing.description
                                ? handleSave('description')
                                : handleEditToggle('description')
                        }
                        className="text-blue-600 font-medium hover:underline"
                    >
                        {isEditing.description ? 'Guardar' : 'Editar'}
                    </button>
                </div>

                {/* Event Date */}
                <div className="flex justify-between items-center border-b pb-4">
                    <div>
                        <h2 className="text-lg text-gray-700">Fecha</h2>
                        {isEditing.date ? (
                            <input
                                type="date"
                                name="date"
                                value={eventData.date}
                                onChange={handleInputChange}
                                className="border border-gray-300 rounded-md p-2 w-full text-gray-800"
                            />
                        ) : (
                            <p className="text-gray-600">{eventData.date}</p>
                        )}
                    </div>
                    <button
                        onClick={() =>
                            isEditing.date ? handleSave('date') : handleEditToggle('date')
                        }
                        className="text-blue-600 font-medium hover:underline"
                    >
                        {isEditing.date ? 'Guardar' : 'Editar'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default EventDetails;
