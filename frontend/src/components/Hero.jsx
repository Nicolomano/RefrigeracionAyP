import { NavLink } from "react-router-dom"


const Hero = () => {
  return (
    <section className="relative bg-hero bg-cover bg-center bg-no-repeat h-screen w-full">
        <div className="max_padd_container relative top-32 xs:top-52">
            <h1 className="h1 capitalize max-w-[37rem]">Bienvenido a Refrigeracion AyP</h1>
            <p className="text-gray-50 regular-16 mt-6 max-w-[33rem]"></p>
            <div className="max-xs:flex-col flex gap-2">
                <NavLink to={''} className={'btn_dark_rounded bg-green-950 flex-center'}>Comprar</NavLink>
            </div>
        </div>
    </section>
  )
}

export default Hero