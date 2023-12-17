import React, { Component } from react

class Movie extends Component {

    constructor() {
        super()
        this.state = {
            genresList: []
        }
    }

    componentDidMount() {
        fetch('/api/movies')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(genres => {
                console.log(genres)
                this.setState({ genresList: genres.data })
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
            <thead>
                <tr>

                    <th>Id</th>
                    <th>Título</th>
                    <th>Calificación</th>
                    <th>Premios</th>
                    <th>Duración</th>
                </tr>
            </thead>
        )
    }
}

export default Movie