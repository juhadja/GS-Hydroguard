import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Cadastro() {
    const navigate = useNavigate();
    const [form, setForm] = useState({
        cpf: "",
        email: "",
        nome: "",
        sobrenome: "",
        senha: "",
    });

    const handleChange = (e) =>
        setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = () => {
        alert("Cadastro salvo com sucesso!");
        navigate("/login");
    };

    return (
        <div className="min-h-screen bg-[#0D1117] flex items-center justify-center text-white">
            <div className="bg-[#0D1117] p-8 rounded-md w-full max-w-sm">
                <h2 className="text-lg mb-6 text-center">Preencha o formulário</h2>

                {["cpf", "email", "nome", "sobrenome", "senha"].map((field) => (
                    <div key={field} className="mb-4">
                        <label className="text-cyan-300 text-sm capitalize">
                            {field}
                        </label>
                        <input
                            name={field}
                            type={field === "senha" ? "password" : "text"}
                            value={form[field]}
                            onChange={handleChange}
                            className="w-full p-2 mt-1 bg-transparent border border-white rounded"
                        />
                    </div>
                ))}

                <button
                    onClick={handleSubmit}
                    className="w-full bg-cyan-400 text-black font-bold py-2 rounded hover:bg-cyan-500 transition"
                >
                    Salvar
                </button>

                <div className="text-center text-sm mt-4">
                    Já tenho uma conta,{" "}
                    <Link to="/login" className="text-cyan-400 hover:underline">
                        entrar agora
                    </Link>
                </div>
            </div>
        </div>
    );
}
