import React, { Component } from "react";
import Genre from "./Genre";
import '../assets/css/app.css'

class GenresInDb extends Component {

  constructor() {
    super()
    this.state = {
      genresList: []
    }
  }

  componentDidMount() {
    fetch('/api/genres')
      .then(respuesta => {
        return respuesta.json()
      })
      .then(genres => {
        console.log(genres)
        this.setState({ genresList: genres.data })
      })
      .catch(error => console.log(error))
  }

  cambiardecolor(){
    document.querySelector('card-body').style.backgroundColor='bg-secondary'
  }


  render() {
    return (
      <React.Fragment>
        <div className="col-lg-6 mb-4">
          <div className="card shadow mb-4">
            <div className="card-header py-3">
              <h6 onMouseOver={this.cambiardecolor}  className="m-0 font-weight-bold text-gray-800">
                Genres in Data Base
              </h6>
            </div>
            <div className="card-body">
              <div className="row">
                {this.state.genresList.map((genre, index) => {
                  return <Genre {...genre} key={index} />
                })}
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default GenresInDb

{/*<div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Acción</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Animación</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Aventura</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Ciencia Ficción</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Comedia</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Documental</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Drama</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Fantasia</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Infantiles</div>
                </div>
              </div>
              <div className="col-lg-6 mb-4">
                <div className="card bg-dark text-white shadow">
                  <div className="card-body">Musical</div>
                </div>
              </div>
</div>*/}