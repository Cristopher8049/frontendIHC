import { useState } from 'react';

const CreateEvent = () => {
    const [isEditing, setIsEditing] = useState({
        name: true, // Start with editing enabled for all fields
        description: true,
        date: true,
    });

    const [eventData, setEventData] = useState({
        name: 'Nombre de tu Evento que se mostrara',
        description:
            'Descripcion del evento que se mostrara',
        date: '2025-03-02',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setEventData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSave = (field) => {
        setIsEditing((prev) => ({
            ...prev,
            [field]: false,
        }));
    };

    const handleEditToggle = (field) => {
        setIsEditing((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const handleCreateEvent = () => {
        alert(`Evento creado: ${JSON.stringify(eventData, null, 2)}`);
    };

    return (
        <div className="min-h-screen flex flex-col px-6 sm:px-20 py-10 bg-white">
            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Crea tu Evento</h1>

            {/* Event Fields */}
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

            {/* Create Event Button */}
            <div className="flex justify-center mt-10">
                <button
                    onClick={handleCreateEvent}
                    className="bg-customblue text-white py-2 px-6 rounded-lg hover:bg-blue-700 transition"
                >
                    Crear Evento
                </button>
            </div>
        </div>
    );
};

export default CreateEvent;
