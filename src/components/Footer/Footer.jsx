import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "C:/Users/FernandoC/Desktop/IHC/frontendIHC/src/assets/logo.png";

const sections = [
    {
        title: 'Planifica Eventos',
        items: [
            { name: 'Crea tu Evento', link: '/CreateEvent' },
            { name: 'Eventos en Linea', link: '/explore' }
        ]
    },
    {
        title: 'TicketBo',
        items: [
            { name: 'Acerca de', link: '/support' },
            { name: 'Contactanos', link: '/support' },
            { name: 'Como funciona', link: '/support' },
            { name: 'Privacidad', link: '/support' },
            { name: 'Terminos', link: '/support' }
        ]
    }
];

const items = [
    {
        name: 'Facebook',
        icon: FaFacebook,
        link: 'https://facebook.com'
    },
    {
        name: 'Instagram',
        icon: FaInstagram,
        link: 'https://Instagram.com'
    },
    {
        name: 'Twitter',
        icon: FaTwitter,
        link: 'https://Twitter.com'
    }
];

const Footer = () => {
    return (
        <>
            <div className="w-full bg-customblue text-gray-300 py-8 px-2">
                <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-4 border-b-2 border-gray-500 py-8">
                    {/* Logo and Description */}
                    <div>
                        <a href="#">
                            <img src={logo} alt="" className="w-52 hover:scale-105 transition-all" />
                        </a>
                        <p className="pl-4">
                            TicketBo la ticketera oficial y mas confiable del pais
                        </p>
                        <div className="flex justify-left sm:w-[300px] pt-4 text-2xl pl-4">
                            {
                                items.map((x, index) => (
                                    <a href={x.link} key={index} target="_blank" rel="noopener noreferrer">
                                        <x.icon className="hover:text-white cursor-pointer mr-4" />
                                    </a>
                                ))
                            }
                        </div>
                    </div>

                    {/* Sections */}
                    {
                        sections.map((section, index) => (
                            <div key={index}>
                                <h6 className="font-bold uppercase pt-2">
                                    {section.title}
                                </h6>
                                <ul>
                                    {section.items.map((item, i) => (
                                        <li key={i} className="py-1 text-white hover:text-gray-400 cursor-pointer">
                                            <Link to={item.link}>{item.name}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))
                    }

                    {/* Newsletter Subscription */}
                    <div className="col-span02 pt-8 md:pt-2">
                        <p className="font-bold uppercase">
                            Mantente notificado
                        </p>
                        <p className="py-4">
                            Las ultimas novedades,eventos y mucho mas, enviadas a tu correo semanalmente
                        </p>
                        <form className="flex flex-col sm:flex-row">
                            <input
                                type="email"
                                placeholder="Correo Electronico"
                                className="w-full p-2 mr-4 rounded-md mb-4"
                            />
                            <button className="p-2 mb-4 rounded-2xl bg-slate-600 hover:bg-slate-700 transition">
                                Subscribirse
                            </button>
                        </form>
                    </div>
                </div>

                {/* Copyright */}
                <div className="flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-center sm:flex-row text-center text-white">
                    <p className="py-4">
                        Copyright © 2022 TicketBO
                    </p>
                </div>
            </div>
        </>
    );
};

export default Footer;
