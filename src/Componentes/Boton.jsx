const Boton = ({ nombre, password }) => {
    const handlelogin = () => alert('Ingreso Correcto')

    return (

        <div>

            <button
                onClick={() => handlelogin()}> Ingresar </button>

        </div>
    )


}

export default Boton