import { useState } from 'react';

const eventImage = 'https://via.placeholder.com/400x200';
const mockupQRCode = 'https://via.placeholder.com/150';

const EventSelected = () => {
    const [selectedTicket, setSelectedTicket] = useState(null);
    const [ticketPrice, setTicketPrice] = useState(0);
    const [currentStep, setCurrentStep] = useState('selection');
    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const [cardDetails, setCardDetails] = useState({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: ''
    });

    const tickets = [
        { name: 'PISTA SUPER VIP', price: 690 },
        { name: 'CAMAROTE', price: 8000 },
    ];

    // Enhanced navigation function with next step logic
    const navigateToNextStep = () => {
        switch (currentStep) {
            case 'selection':
                if (selectedTicket) {
                    setCurrentStep('payment');
                } else {
                    alert('Por favor selecciona un ticket primero.');
                }
                break;
            case 'payment':
                if (selectedPaymentMethod) {
                    setCurrentStep('summary');
                } else {
                    alert('Por favor selecciona un método de pago.');
                }
                break;
            case 'summary':
                // In a real app, this would trigger payment processing
                alert('Pago completado');
                break;
            default:
                setCurrentStep('selection');
        }
    };


    const navigateToStep = (step) => {

        switch (step) {
            case 'selection':
                setCurrentStep('selection');
                break;
            case 'payment':
                if (selectedTicket) {
                    setCurrentStep('payment');
                } else {
                    alert('Por favor selecciona un ticket primero.');
                }
                break;
            case 'summary':
                if (selectedTicket && selectedPaymentMethod) {
                    setCurrentStep('summary');
                } else {
                    alert('Por favor completa los pasos anteriores.');
                }
                break;
            default:
                setCurrentStep('selection');
        }
    };

    const handleTicketClick = (ticket) => {
        setSelectedTicket(ticket.name);
        setTicketPrice(ticket.price);
    };

    const handlePaymentMethodChange = (method) => {
        setSelectedPaymentMethod(method);
    };

    const handleCardDetailsChange = (e) => {
        const { name, value } = e.target;
        setCardDetails(prev => ({
            ...prev,
            [name]: value
        }));
    };

    return (
        <div className="min-h-screen flex flex-col justify-center items-center bg-white py-10 px-4 sm:px-6 lg:px-8">
            {/* Top Section: Event Hero */}
            <div className="max-w-7xl w-full bg-blue-50 rounded-xl overflow-hidden shadow-md p-6 mb-10 flex flex-col md:flex-row items-center">
                <div className="w-full md:w-1/3">
                    <img
                        src={eventImage}
                        alt="Event"
                        className="w-full h-auto rounded-lg object-cover"
                    />
                </div>
                <div className="flex-1 text-center md:text-left md:pl-6">
                    <span className="block text-gray-500 text-sm font-medium mb-2">Concierto</span>
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">DUKI – ESTACION</h1>
                </div>
            </div>

            {/* Content Section */}
            <div className="max-w-7xl w-full bg-blue-50 rounded-xl p-6 flex flex-col md:flex-row gap-8">
                {/* Side Navigation */}
                <div className="w-full md:w-1/4 flex flex-col gap-4">
                    <button
                        onClick={() => navigateToStep('selection')}
                        className={`w-full text-left py-3 px-4 rounded-md font-semibold cursor-pointer transition ${currentStep === 'selection'
                            ? 'bg-customblue text-white'
                            : 'bg-blue-100 text-gray-700 hover:bg-blue-200'
                            }`}
                    >
                        Seleccion
                    </button>
                    <button
                        onClick={() => navigateToStep('payment')}
                        className={`w-full text-left py-3 px-4 rounded-md font-semibold cursor-pointer transition ${currentStep === 'payment'
                            ? 'bg-customblue text-white'
                            : 'bg-blue-100 text-gray-700 hover:bg-blue-200'
                            }`}
                    >
                        Resumen
                    </button>
                    <button
                        onClick={() => navigateToStep('summary')}
                        className={`w-full text-left py-3 px-4 rounded-md font-semibold cursor-pointer transition ${currentStep === 'summary'
                            ? 'bg-customblue text-white'
                            : 'bg-blue-100 text-gray-700 hover:bg-blue-200'
                            }`}
                    >
                        Pago
                    </button>
                </div>

                {/* Ticket Table Section */}
                <div className="w-full md:w-3/4 bg-white rounded-xl p-6 shadow-inner">
                    {currentStep === 'selection' && (
                        <>
                            <div className="overflow-x-auto">
                                <table className="min-w-full border-collapse">
                                    <thead>
                                        <tr className="border-b">
                                            <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">#</th>
                                            <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Concepto</th>
                                            <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Monto</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {tickets.map((ticket, index) => (
                                            <tr
                                                key={index}
                                                className={`border-b hover:bg-gray-50 transition cursor-pointer ${selectedTicket === ticket.name ? 'bg-blue-100' : ''}`}
                                                onClick={() => handleTicketClick(ticket)}
                                            >
                                                <td className="py-3 px-4 align-middle">
                                                    <input
                                                        type="checkbox"
                                                        className="h-4 w-4"
                                                        readOnly
                                                        checked={selectedTicket === ticket.name}
                                                    />
                                                </td>
                                                <td className="py-3 px-4 text-gray-800 font-medium align-middle">
                                                    {ticket.name}
                                                </td>
                                                <td className="py-3 px-4 text-gray-800 align-middle">{ticket.price} Bs</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            {selectedTicket && (
                                <div className="mt-4 flex justify-end">
                                    <button
                                        onClick={navigateToNextStep}
                                        className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
                                    >
                                        Siguiente
                                    </button>
                                </div>
                            )}
                        </>
                    )}

                    {currentStep === 'payment' && (
                        <>
                            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pagos a realizar</h2>
                            <table className="min-w-full border-collapse">
                                <thead>
                                    <tr className="border-b">
                                        <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">#</th>
                                        <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Concepto</th>
                                        <th className="py-3 px-4 text-left text-sm font-medium text-gray-600">Monto</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="py-3 px-4">1</td>
                                        <td className="py-3 px-4 text-gray-800 font-medium">{selectedTicket}</td>
                                        <td className="py-3 px-4 text-gray-800">{ticketPrice} Bs</td>
                                    </tr>
                                </tbody>
                                <tfoot>
                                    <tr>
                                        <td colSpan="2" className="py-3 px-4 font-bold text-right">Total</td>
                                        <td className="py-3 px-4 text-gray-800 font-bold">{ticketPrice} Bs</td>
                                    </tr>
                                </tfoot>
                            </table>
                            <h3 className="text-xl font-semibold text-gray-800 mt-6 mb-4">Seleccionar metodo de Pago</h3>
                            <div className="flex flex-col gap-4">
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="QR"
                                        checked={selectedPaymentMethod === 'QR'}
                                        onChange={() => handlePaymentMethodChange('QR')}
                                        className="h-4 w-4"
                                    />
                                    <span className="text-gray-700">Transferencia QR</span>
                                </label>
                                <label className="flex items-center gap-2 cursor-pointer">
                                    <input
                                        type="radio"
                                        name="payment"
                                        value="Card"
                                        checked={selectedPaymentMethod === 'Card'}
                                        onChange={() => handlePaymentMethodChange('Card')}
                                        className="h-4 w-4"
                                    />
                                    <span className="text-gray-700">Tarjeta de debito/credito</span>
                                </label>
                            </div>
                            {selectedPaymentMethod && (
                                <div className="mt-4 flex justify-end">
                                    <button
                                        onClick={navigateToNextStep}
                                        className="bg-blue-600 text-white py-2 px-6 rounded-full hover:bg-blue-700 transition"
                                    >
                                        Siguiente
                                    </button>
                                </div>
                            )}
                        </>
                    )}

                    {currentStep === 'summary' && (
                        <>
                            {selectedPaymentMethod === 'QR' ? (
                                <div className="flex flex-col items-center">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Escanea este código QR</h2>
                                    <img src={mockupQRCode} alt="QR Code" className="w-40 h-40" />
                                    <button
                                        onClick={() => setCurrentStep('payment')}
                                        className="mt-4 text-blue-600 hover:underline"
                                    >
                                        Cambiar método de pago
                                    </button>
                                    <div className="mt-4 flex justify-end w-full">
                                        <button
                                            onClick={navigateToNextStep}
                                            className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition"
                                        >
                                            Completar Pago
                                        </button>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-800 mb-4">Detalles de la Tarjeta</h2>
                                    <form className="flex flex-col gap-4">
                                        <input
                                            type="text"
                                            name="cardNumber"
                                            value={cardDetails.cardNumber}
                                            onChange={handleCardDetailsChange}
                                            placeholder="Número de tarjeta"
                                            className="w-full border border-gray-300 rounded-md p-3"
                                        />
                                        <input
                                            type="text"
                                            name="cardName"
                                            value={cardDetails.cardName}
                                            onChange={handleCardDetailsChange}
                                            placeholder="Nombre en la tarjeta"
                                            className="w-full border border-gray-300 rounded-md p-3"
                                        />
                                        <input
                                            type="text"
                                            name="expiryDate"
                                            value={cardDetails.expiryDate}
                                            onChange={handleCardDetailsChange}
                                            placeholder="Fecha de expiración (MM/AA)"
                                            className="w-full border border-gray-300 rounded-md p-3"
                                        />
                                        <input
                                            type="text"
                                            name="cvv"
                                            value={cardDetails.cvv}
                                            onChange={handleCardDetailsChange}
                                            placeholder="CVV"
                                            className="w-full border border-gray-300 rounded-md p-3"
                                        />
                                        <div className="flex justify-between">
                                            <button
                                                type="button"
                                                onClick={() => setCurrentStep('payment')}
                                                className="text-blue-600 hover:underline"
                                            >
                                                Cambiar método de pago
                                            </button>
                                            <button
                                                onClick={navigateToNextStep}
                                                className="bg-green-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition"
                                            >
                                                Completar Pago
                                            </button>
                                        </div>
                                    </form>
                                </div>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventSelected;