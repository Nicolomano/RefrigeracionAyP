import { NavLink } from "react-router-dom"
import {MdAddCircle, MdCategory, MdHomeFilled, MdPhone} from "react-icons/md"

const Navbar = ({containerStyles}) => {
  return (
    <nav className={`${containerStyles}`}>
        <NavLink to={'/'} className={({isActive})=> isActive ? 'active_link' : ''}><div className="flexCenter gap-x-1"><MdHomeFilled/>Inicio</div></NavLink>
        <NavLink to={'/products'} className={({isActive})=> isActive ? 'active_link' : ''}><div className="flexCenter gap-x-1"><MdCategory/>Productos</div></NavLink>
        <NavLink to={'/about'} className={({isActive})=> isActive ? 'active_link' : ''}><div className="flexCenter gap-x-1"><MdAddCircle/>Sobre nosotros</div></NavLink>
        <NavLink to={'/contact'} className={({isActive})=> isActive ? 'active_link' : ''}><div className="flexCenter gap-x-1"><MdPhone/>contactanos</div></NavLink>
    </nav>
  )
}

export default Navbar