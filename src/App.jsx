import { useState } from 'react'
import './App.css'

import Input from './Componentes/Input.jsx'
import Boton from './Componentes/Boton.jsx'

function App() {
	const [nombre, setNombre] = useState("")
	const [password, setPassword] = useState("")

	return (
		<main className="App">

			<div className="card">
				<h3> Login</h3>

				<Input
					setNombre={setNombre}
					setPassword={setPassword}>
				</Input>

				{nombre && password === "252525" && <Boton></Boton>}

			</div>
		</main>
	)
}

export default App
