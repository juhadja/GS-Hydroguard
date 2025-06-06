import Foto from '../assets/foto.png'
import './Styles.css'

export default function Tecnologia() {
    return (
        <div className='bg-[url(./assets/ondas.png)] bg-no-repeat p-10 bg-cover bg-center grid grid-rows-2  md:grid-cols-3 gap-4 xl:px-60 md:pt-30'>
            <div className='bg-gray-950 w-auto pt-10 rounded-lg'>
                <img className='m-auto' src={Foto} alt="" />
            </div>
            <div className='bg-gray-950 md:col-span-2 p-5 md:p-12 text-center md:text-left rounded-lg'>
                <h2 className='text-cyan-50 text-3xl md:text-4xl md:ml-18 mb-3 md:mb-5'>Tecnologia</h2>
                <p className='text-cyan-400 md:text-lg font-light'>A solução é composta por:<br></br>
                    •	Sensor de nível d’água ultrassônico: monitora continuamente o acúmulo de água.<br></br>
                    •	Microcontrolador ESP32: interpreta os dados do sensor e aciona o sistema automaticamente quando o nível atinge o ponto crítico predeterminado.<br></br>
                    •	Servomotor (protegido por lona impermeável reforçada): responsável por erguer a barreira de forma automática.<br></br>
                    •	Lona impermeável de PVC: funciona como a barreira principal, formando uma contenção eficiente contra a entrada de água.<br></br>
                    O HydroGuard é uma solução prática, acessível e escalável, que alia baixo custo, automação e impacto direto, protegendo vidas e evitando perdas materiais com instalação simples e resposta imediata.</p>
            </div>
        </div>
    )
}