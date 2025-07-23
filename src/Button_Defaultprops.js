import PropTypes from 'prop-types';

export function Button({text, name = "user"}){
    // console.log(text, name)
    // Usando Event Handlers (manejador de eventos)
    return <button onClick={()=> {
        console.log('Hola mundo')
    } }>
        {text} - {name}
    </button>
} 

Button.propTypes ={
    text: PropTypes.string.isRequired
}
