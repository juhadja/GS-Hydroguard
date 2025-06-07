import Foto from '../assets/barragem.png'
import './Styles.css'

export default function Sobre() {
    return (
        <div className='bg-[url(./assets/ondas.png)] bg-no-repeat bg-cover bg-center min-h-screen p-6 md:p-10 xl:px-60 flex items-center'>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 w-full max-w-6xl mx-auto'>

                <div className='bg-slate-800/9 lg:col-span-2 p-6 md:p-8 lg:p-12 text-left rounded-xl border border-slate-700/30 shadow-2xl'>
                    <h2 className='text-cyan-100 text-3xl md:text-4xl lg:text-5xl font-light mb-4 md:mb-6'>
                        Sobre
                    </h2>
                    <p className='text-cyan-400 text-base md:text-lg lg:text-xl font-light leading-relaxed'>
                        O HydroGuard é uma barreira automática contra enchentes,
                        instalada na entrada de imóveis. Aciona sozinho quando detecta
                        aumento no nível da água, bloqueando a entrada da inundação. É
                        dobrável, leve e resistente, com lona impermeável e bolsão de água
                        para estabilidade. Funciona com sensores, servomotor e pode ser
                        alimentado por bateria, energia solar ou elétrica. Também possui
                        um app que envia alertas. É portátil, acessível e fácil de instalar.
                    </p>
                </div>

                <div className='bg-slate-800/95 rounded-xl border border-slate-700/30 shadow-2xl p-6 md:p-8 flex items-center justify-center'>
                    <img
                        className='w-full h-auto max-w-xs object-contain'
                        src={Foto}
                        alt="Barragem HydroGuard"
                    />
                </div>
            </div>
        </div>
    )
}