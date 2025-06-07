import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../AuthContext";

export default function Login() {
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");
    const [erro, setErro] = useState("");
    const navigate = useNavigate();

    const { login } = useAuth();

    const handleLogin = () => {
        if (email === "teste" && senha === "123") {
            login();
            navigate("/home");
        } else {
            setErro("E-mail ou senha inválidos");
        }
    };

    return (
        <div className="bg-[url(./assets/background404.png)] bg-center bg-cover  min-h-screen bg flex items-center justify-center text-white">
            <div className="bg-[#0D1117] p-8 rounded-md w-full max-w-sm">
                <h2 className="text-lg mb-6 text-center">Entre com seu e-mail e senha</h2>

                <label className="text-cyan-300 text-sm">E-mail</label>
                <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full p-2 mb-4 mt-1 bg-transparent border border-white rounded"
                />

                <label className="text-cyan-300 text-sm">Senha</label>
                <input
                    type="password"
                    value={senha}
                    onChange={(e) => setSenha(e.target.value)}
                    className="w-full p-2 mb-2 mt-1 bg-transparent border border-white rounded"
                />

                {erro && <p className="text-red-500 text-sm mb-2">{erro}</p>}

                <button
                    onClick={handleLogin}
                    className="w-full bg-cyan-400 text-black font-bold py-2 rounded hover:bg-cyan-500 transition"
                >
                    Entrar
                </button>

                <div className="text-center text-sm mt-4">
                    Ainda não tem conta,{" "}
                    <Link to="/cadastro" className="text-cyan-400 hover:underline">
                        Cadastrar
                    </Link>
                </div>
            </div>
        </div>
    );
}
