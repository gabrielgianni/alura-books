import './style.css'
import perfil from '../../images/perfil.svg'
import sacola from '../../images/sacola.svg'

const icons = [perfil, sacola]

function IconsHeader() {
    return (
        <ul className='icons'>
            { icons.map(( icon, index ) => (
            <li key={index} className='icon'><img src={icon} alt='icon'></img></li>
            ) ) }
        </ul>
    )
}

export default IconsHeader