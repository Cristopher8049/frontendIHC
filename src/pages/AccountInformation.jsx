import { useState } from 'react';
import { Link } from 'react-router-dom';

const AccountInformation = () => {
    const [isEditing, setIsEditing] = useState({
        name: false,
        email: false,
        phone: false,
        password: false,
    });

    const [formData, setFormData] = useState({
        name: 'Peter Griffin',
        email: 'h***o@designdrops.op',
        phone: '',
        password: '************',
    });

    const handleEditToggle = (field) => {
        setIsEditing((prev) => ({
            ...prev,
            [field]: !prev[field],
        }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
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
                <Link to="/Account" className="hover:underline">
                    Mi cuenta
                </Link>{' '}
                &gt;{' '}
                <span className="text-gray-800 font-medium">Información Personal</span>
            </div>

            {/* Page Title */}
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Información Personal</h1>

            {/* Information List */}
            <div className="space-y-6">
                {/* Name */}
                <div className="flex justify-between items-center border-b pb-4">
                    <div>
                        <h2 className="text-lg text-gray-700">Nombre</h2>
                        {isEditing.name ? (
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="border border-gray-300 rounded-md p-2 w-full text-gray-800"
                            />
                        ) : (
                            <p className="text-gray-600">{formData.name}</p>
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

                {/* Email */}
                <div className="flex justify-between items-center border-b pb-4">
                    <div>
                        <h2 className="text-lg text-gray-700">Dirección de Correo</h2>
                        {isEditing.email ? (
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="border border-gray-300 rounded-md p-2 w-full text-gray-800"
                            />
                        ) : (
                            <p className="text-gray-600">{formData.email}</p>
                        )}
                    </div>
                    <button
                        onClick={() =>
                            isEditing.email ? handleSave('email') : handleEditToggle('email')
                        }
                        className="text-blue-600 font-medium hover:underline"
                    >
                        {isEditing.email ? 'Guardar' : 'Editar'}
                    </button>
                </div>

                {/* Phone Number */}
                <div className="flex justify-between items-center border-b pb-4">
                    <div>
                        <h2 className="text-lg text-gray-700">Número de Celular</h2>
                        {isEditing.phone ? (
                            <input
                                type="text"
                                name="phone"
                                value={formData.phone}
                                onChange={handleInputChange}
                                className="border border-gray-300 rounded-md p-2 w-full text-gray-800"
                            />
                        ) : (
                            <p className="text-gray-600">
                                {formData.phone || 'Agregar o editar tu número de celular'}
                            </p>
                        )}
                    </div>
                    <button
                        onClick={() =>
                            isEditing.phone ? handleSave('phone') : handleEditToggle('phone')
                        }
                        className="text-blue-600 font-medium hover:underline"
                    >
                        {isEditing.phone ? 'Guardar' : 'Editar'}
                    </button>
                </div>

                {/* Change Password */}
                <div className="flex justify-between items-center">
                    <div>
                        <h2 className="text-lg text-gray-700">Cambiar Contraseña</h2>
                        {isEditing.password ? (
                            <input
                                type="password"
                                name="password"
                                value={formData.password}
                                onChange={handleInputChange}
                                className="border border-gray-300 rounded-md p-2 w-full text-gray-800"
                            />
                        ) : (
                            <p className="text-gray-600">{formData.password}</p>
                        )}
                    </div>
                    <button
                        onClick={() =>
                            isEditing.password ? handleSave('password') : handleEditToggle('password')
                        }
                        className="text-blue-600 font-medium hover:underline"
                    >
                        {isEditing.password ? 'Guardar' : 'Cambiar'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AccountInformation;
