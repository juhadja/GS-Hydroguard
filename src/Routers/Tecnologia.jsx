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
                <p className='text-cyan-400 md:text-lg font-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quaerat tempore ut eveniet eligendi inventore eum vitae vero officiis fuga deserunt unde, praesentium, consequuntur cum quam dolore rem, animi id dolorem.</p>
            </div>
        </div>
    )
}