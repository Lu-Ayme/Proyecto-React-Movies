import React, { Component } from react

class Movie extends Component {

    constructor() {
        super()
        this.state = {
            movies: []
        }
    }

    componentDidMount() {
        fetch('/api/movies')
            .then(respuesta => {
                return respuesta.json()
            })
            .then(movies => {
                console.log(movies)
                this.setState({ movies: movies.data })
            })
            .catch(error => console.log(error))
    }
    render() {
        return (
          <></>
        )
    }
}

export default Movie