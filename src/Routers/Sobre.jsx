import Foto from '../assets/barragem.png'
import './Styles.css'

export default function Sobre(){
    return(
        <div className='bg-[url(./assets/ondas.png)] bg-no-repeat p-10 bg-cover bg-center grid grid-rows-2  md:grid-cols-3 gap-4 xl:px-60 md:pt-30'>
            <div className='bg-gray-950 md:col-span-2 p-5 md:p-12 text-center md:text-left rounded-lg'>
                <h2 className='text-cyan-50 text-3xl md:text-4xl md:ml-18 mb-3 md:mb-5'>Sobre</h2>
                <p className='text-cyan-400 md:text-lg font-light'>O HydroGuard é uma barreira automática contra enchentes, instalada na entrada de imóveis. Aciona sozinho quando detecta aumento no nível da água, bloqueando a entrada da inundação. É dobrável, leve e resistente, com lona impermeável e bolsão de água para estabilidade. Funciona com sensores, servomotor e pode ser alimentado por bateria, energia solar ou elétrica. Também possui um app que envia alertas. É portátil, acessível e fácil de instalar.</p>
            </div>
            <div className='bg-gray-950 w-auto p-4 md:pt-10 rounded-lg flex items-center justify-center'>
                <img className='w-full max-w-xs md:max-w-none md:m-auto' src={Foto} alt="" />
            </div>
        </div>
    )
}