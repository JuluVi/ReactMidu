import './App.css';
import { TwitterFollowCard } from './TwitterFollowCard.jsx'; // Importación del componente TwitterFollowCard
import { useState } from 'react'; // Importación del hook useState de React

// Definición de un arreglo de usuarios con sus respectivas propiedades
const users = [
	{
		userName: 'midudev',
		name: 'Miguel Ángel Durán',
		isFollowing: true
	},
	{
		userName: 'pheralb',
		name: 'Pablo H.',
		isFollowing: false
	},
	{
		userName: 'juanluivm',
		name: 'Juan Luis Vicente Mollá',
		isFollowing: true
	},
	{
		userName: 'TMChein',
		name: 'Tomas',
		isFollowing: false
	}
]

// Definición del componente principal de la aplicación
export function App() {

	// Declaración del estado local mediante el hook useState para controlar el nombre
	// y la función que permite actualizar ese estado.
	// const [name , setName] = useState('midudev')
	// console.log('render with name: ', name)

	// Creación de un objeto con una propiedad isFollowing y userName
	const objeto = { isFollowing: true, userName: "Hola"}

	// Retorno del JSX que representa la estructura y el contenido de la aplicación
	return (
		<section className='App'> {/* Definición de una sección con la clase CSS 'App' */}
			{/* Renderizado de múltiples instancias del componente TwitterFollowCard con diferentes props */}
			<TwitterFollowCard  userName="juanluivm" initialIsFollowing={true}>
				Juan Luis Vicente Mollá
			</TwitterFollowCard>
			<TwitterFollowCard  userName="midudev" initialIsFollowing={false}>
				Miguel Ángel Durán
			</TwitterFollowCard>
			<TwitterFollowCard  userName="gummibeer.dev" initialIsFollowing={true}>
				GummiBear
			</TwitterFollowCard>
			<TwitterFollowCard >
				Unknown
			</TwitterFollowCard>
			<TwitterFollowCard {...objeto} initialIsFollowing={true}>
				Objeto
			</TwitterFollowCard>

			{/* Botón que, cuando se hace clic, llama a la función setName con el valor "Pedro" */}
			<button onClick={() => setName("Pedro")}>
				Cambio Nombre
			</button>
		</section>
	);
}

//RENDERIZADO DE USUARIOS

export function App2(){
	return (
		<section className='App'>
			{
				users.map(user => {
					const { userName, name, isFollowing} = user
					return (
						<TwitterFollowCard key={userName}  userName={userName} initialIsFollowing={isFollowing}>
							{name}
						</TwitterFollowCard>
					)
				})
			}
		</section>
	)
}