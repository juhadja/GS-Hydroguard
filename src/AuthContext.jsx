import { createContext, useEffect, useState, useContext } from "react";

// Cria o contexto
const AuthContext = createContext();

// Provedor
export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(
        localStorage.getItem("logado") === "true"
    );

    useEffect(() => {
        const intervalo = setInterval(() => {
            const logged = localStorage.getItem("logado") === "true";
            setIsAuthenticated(logged);
        }, 500);

        return () => clearInterval(intervalo);
    }, []);

    const login = () => {
        localStorage.setItem("logado", "true");
        setIsAuthenticated(true);
    };

    const logout = () => {
        localStorage.removeItem("logado");
        setIsAuthenticated(false);
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizado pra usar o contexto
export const useAuth = () => useContext(AuthContext);
