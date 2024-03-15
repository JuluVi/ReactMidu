import { useState } from "react";

export function TwitterFollowCard({userName='unknown', children, initialIsFollowing}) {
	//Usando desestructuralizacion de JavaScript
	const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
	/*
		const state = useState(false) Esto nos devuelve un array con dos posiciones
		const isFollowing = state[0] El estado actual del elemento
		const setIsFollowing = state[1] El interruptor para cambiar el elemento
	 */
	const text = isFollowing ? 'Siguiendo' : 'Seguir'; //Lo uso para cambiar el texto interno dependiendo de si isFollowing es true o false
	const buttonClassName = isFollowing 
		? 'tw-followCard-button is-following' 
		: 'tw-followCard-button' 

	const handleClick = () => {
		setIsFollowing(!isFollowing) //Cuando llamamos a esta función usamos la funcion del hook useState y le decimos que si es true ahora es false y viceversa
	}


	return (
		<article
			className="tw-followCard"
			style={{ display: "flex", alignItems: "center", color: "#fff" }}
		>
			<header className="tw-followCard-header">
				<img
					className="tw-followCard-avatar"
					src={`https://unavatar.io/${userName}`}
					alt="El avatar de un panda"
				/>
				<div className="tw-followCard-info">
					<strong>{children}</strong>
					<span className="tw-followCard-infoUsername">@{userName}</span>
				</div>
			</header>
			
			<aside>
				<button className={buttonClassName}
				onClick={handleClick}>
					<span className="tw-followCard-text">{text}</span>
					<span className="tw-followCard-stopFollow">Dejar de seguir</span>
				</button>
			</aside>
		</article>
	)
}
