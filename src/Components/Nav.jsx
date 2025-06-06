import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';

export default function Nav() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="bg-black">
            <nav className="flex items-center justify-between p-4">
                <div className="md:hidden">
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-cyan-400 focus:outline-none"
                    >
                        {isOpen ? (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        ) : (
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M4 6h16M4 12h16M4 18h16"
                                />
                            </svg>
                        )}
                    </button>
                </div>

                {/* Menu */}
                <ul
                    className={`mx-auto md:flex gap-10 absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent p-4 md:p-0 ${isOpen ? 'block' : 'hidden'
                        }`}
                >
                    <li className="text-cyan-50 hover:text-cyan-400">
                        <Link to="/">Home</Link>
                    </li>
                    <li className="text-cyan-50 hover:text-cyan-400">
                        <Link to="/sobre">Sobre</Link>
                    </li>
                    <li className="text-cyan-50 hover:text-cyan-400">
                        <Link to="/tecnologia">Tecnologia</Link>
                    </li>
                    <li className="text-cyan-50 hover:text-cyan-400">
                        <Link to="/solucao">Problema e solução</Link>
                    </li>
                    <li className="text-cyan-50 hover:text-cyan-400">
                        <Link to="/login">Login | Cadastre-se</Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
}
