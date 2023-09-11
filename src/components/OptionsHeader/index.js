import './style.css'

const textOptions = ['CATEGORIAS', 'FAVORITOS', 'MINHA ESTANTE'];

function OptionsHeader() {
    return (
        <ul className='opcoes'>
            { textOptions.map(( text, index ) => (
                <li key={index} className='opcao'><p>{text}</p></li>
            ) ) }
        </ul>
    )
}

export default OptionsHeader;