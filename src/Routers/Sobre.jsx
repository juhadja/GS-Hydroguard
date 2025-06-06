import Foto from '../assets/barragem.png'
import './Styles.css'

export default function Sobre(){
    return(
        <div className='bg-black bg-[url(./assets/ondas.png)] bg-no-repeat bg-cover bg-center min-h-screen flex flex-col justify-center items-center p-8 xl:px-60'>
            <div className='w-full max-w-4xl'>
                <h2 className='text-cyan-50 text-4xl md:text-5xl text-center mb-8 font-light'>Sobre</h2>
                
                <div className='bg-gray-950/80 backdrop-blur-sm rounded-lg p-8 md:p-12 mb-8'>
                    <p className='text-cyan-400 text-base md:text-lg font-light leading-relaxed text-justify'>
                        O HydroGuard é uma barreira automática contra enchentes, instalada na entrada de imóveis. Aciona sozinho quando detecta aumento no nível da água, bloqueando a entrada da inundação. É dobrável, leve e resistente, com lona impermeável e bolsão de água para estabilidade. Funciona com sensores, servomotor e pode ser alimentado por bateria, energia solar ou elétrica. Também possui um app que envia alertas. É portátil, acessível e fácil de instalar.
                    </p>
                </div>

                <div className='flex justify-center mb-8'>
                    <div className='bg-gray-950/80 backdrop-blur-sm rounded-lg p-6'>
                        <img className='w-full max-w-sm mx-auto' src={Foto} alt="HydroGuard - Barreira contra enchentes" />
                    </div>
                </div>

                <div className='flex justify-center'>
                    <button className='bg-cyan-400 text-black px-8 py-3 rounded-lg font-medium hover:bg-cyan-300 transition-colors'>
                        View all
                    </button>
                </div>
            </div>

        </div>
    )
}