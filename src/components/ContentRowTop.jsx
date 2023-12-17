import React from "react";
import ContentRowMovies from "./ContentRowMovies";
import LastMovieInDB from "./LastMovieInDB";
import GenresInDb from "./GenresInDB";
import '../assets/css/app.css'

const objetos = [{
	titulo: 'Movies in DB',
	cifra: '21',
	colorDeBorde: 'border-left-primary',
	icono: 'fa-film'
}, {
	titulo: 'Total awards',
	cifra: '79',
	colorDeBorde: 'border-left-success',
	icono: 'fa-award'
}, {
	titulo: 'Actors quantity',
	cifra: '49',
	colorDeBorde: 'border-left-warning',
	icono: 'fa-user'
}
]

function ContentRowTop() {
	return (
		<>
			<div className="row">
				{objetos.map((objeto, i) => {
					return (
						<ContentRowMovies
							titulo={objeto.titulo}
							cifra={objeto.cifra}
							colorDeBorde={objeto.colorDeBorde}
							icono={objeto.icono}
							key={i}
						/>
					)
				})}
			</div>

			<div className="row">
				<LastMovieInDB />
				<GenresInDb />
			</div>

		</>
	)
}

export default ContentRowTop