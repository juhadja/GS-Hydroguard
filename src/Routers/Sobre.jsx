import Foto from '../assets/barragem.png'
import Foto2 from '../assets/barragemgrande.png'
import './Styles.css'

export default function Sobre(){
    return(
        <div className='bg-[url(./assets/ondas.png)] bg-no-repeat p-10 bg-cover bg-center'>
            <div className='md:pb-10'>
                <div className=' pt-50 md:pt-10 md:ml-10 xl:pt-20 xl:ml-70'>
                    <h2 className="text-cyan-50 text-3xl p-5 md:pl-20 md:text-2xl">Sobre</h2>
                    <p className="font-light text-cyan-400 md:w-150 md:text-lg lg:w-130 xl:w-150">O HydroGuard é uma barreira automática contra enchentes, instalada na entrada de imóveis. Aciona sozinho quando detecta aumento no nível da água, bloqueando a entrada da inundação. É dobrável, leve e resistente, com lona impermeável e bolsão de água para estabilidade. Funciona com sensores, servomotor e pode ser alimentado por bateria, energia solar ou elétrica. Também possui um app que envia alertas. É portátil, acessível e fácil de instalar.</p>
                </div>
                <img className='w-250 lg:w-200 mx-auto invisible md:visible md:mt-10  relative lg:-top-60 lg:left-20' src={Foto2} alt="" />
            </div>
            <img className='mx-auto my-5 md:my-0 md:invisible' src={Foto} alt="" />
            <button className='bg-cyan-400 w-30 h-10 text-black font-bold rounded-lg mx-auto relative md:-top-75 md:left-20 -top-10 left-5 lg:-top-134 xl:-top-133 xl:left-110'>Ver mais</button>
        </div>
    )
}