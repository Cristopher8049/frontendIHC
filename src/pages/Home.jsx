import Illustration from "C:/Users/FernandoC/Desktop/IHC/frontendIHC/src/assets/eventcreateIlus.png"
import HeroImage from "C:/Users/FernandoC/Desktop/IHC/frontendIHC/src/assets/duki.jpg"
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/EventSelected');
  };

  const handleCreateEventClick = () => {
    navigate('/CreateEvent');
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Left Column (Text Content) */}
          <div className="flex flex-col">
            <span className="text-sm font-semibold text-gray-500 uppercase">Concierto</span>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight mt-2">
              DUKI – ESTACION
            </h1>
            <p className="text-gray-600 mt-4 leading-relaxed">
              El domingo 2 de marzo de 2025 estará actuando Duki en Santa Cruz en el
              Estacion Festival Sonilum. El concierto del artista argentino, nacido en Buenos Aires,
              pertenece a la gira Ameri World Tour 2025 en la que presenta las canciones de su
              último trabajo discográfico.
            </p>
            <button className="inline-block mt-6 px-6 py-2 border border-gray-800 text-gray-800 rounded-full hover:bg-slate-400 hover:text-white transition" onClick={handleClick}>
              Comprar Boletos
            </button>
          </div>
          {/* Right Column (Image) */}
          <div className="flex justify-center md:justify-end">
            <img
              src={HeroImage}
              alt="Duki concierto"
              className="w-full h-auto rounded-lg shadow-lg max-w-md object-cover"
            />
          </div>
        </div>
      </div>

      {/* Secondary Section */}
      <div className="mt-20 w-full bg-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            {/* Illustration on the left */}
            <div className="flex justify-center md:justify-start">
              <img
                src={Illustration}
                alt="People planning event"
                className="w-full max-w-sm h-auto"
              />
            </div>
            {/* Text + Button on the right */}
            <div className="flex flex-col">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Crea tu evento
              </h2>
              <p className="text-gray-600 mb-6">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </p>
              <button onClick={handleCreateEventClick} className="inline-block px-6 py-2 bg-customblue text-white rounded-full hover:bg-slate-400 transition-shadow shadow-md">
                Crear Evento
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
