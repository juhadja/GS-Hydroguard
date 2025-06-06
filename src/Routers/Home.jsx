import Agua from '../assets/icons/agua.png'
import Gota from '../assets/icons/gota.png'
import Onda from '../assets/icons/onda.png'
import './Styles.css'

export default function Home() {
    return (
        <div className='bg-[url(./assets/mobile.png)]  md:bg-[url(./assets/background.png)] bg-cover bg-no-repeat pt-40  '>
            <div className='p-10 pb-80 md:pb-100 md:pl-50'>
                <h1 className=" text-4xl md:text-5xl text-cyan-50">HYDROGUARD</h1>
                <p className="md:text-2xl text-cyan-400 font-light">Quando a água sobe, a tecnologia se levanta.</p>
            </div>
            <div className='m-8 pb-10 grid gap-5 lg:grid-cols-3 lg:mx-5 xl:mx-25 2xl:mx-35'>
                <div className='bg-gray-950 text-center p-4 rounded-md lg:p-10'>
                    <img className='w-20 mx-auto' src={Agua} alt="icone de água" />
                    <h3 className='text-cyan-50 text-2xl p-2 pb-5'>“Barragem doméstica”</h3>
                    <p className='text-cyan-50 text-sm md:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quam vitae inventore aperiam saepe quod, hic, animi mollitia sunt est unde doloribus, ipsam iste aspernatur facere fugiat nostrum provident nesciunt.</p>
                </div>
                <div className='bg-gray-950 text-center p-4 rounded-md lg:p-10'>
                    <img className='w-20 mx-auto' src={Gota} alt="icone de Gota" />
                    <h3 className='text-cyan-50 text-2xl p-2 pb-5'>Sensores de nível</h3>
                    <p className='text-cyan-50 text-sm md:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quam vitae inventore aperiam saepe quod, hic, animi mollitia sunt est unde doloribus, ipsam iste aspernatur facere fugiat nostrum provident nesciunt.</p>
                </div>
                <div className='bg-gray-950 text-center p-6 rounded-md lg:p-10'>
                    <img className='w-20 mx-auto' src={Onda} alt="icone de onda" />
                    <h3 className='text-cyan-50 text-2xl p-2 pb-5'>Sistema anti-enchente</h3>
                    <p className='text-cyan-50 text-sm md:text-lg'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Natus quam vitae inventore aperiam saepe quod, hic, animi mollitia sunt est unde doloribus, ipsam iste aspernatur facere fugiat nostrum provident nesciunt.</p>
                </div>
            </div>
        </div>
    )
}