import { createContext, useEffect, useState, useContext } from "react";

const AuthContext = createContext();

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

export const useAuth = () => useContext(AuthContext);
