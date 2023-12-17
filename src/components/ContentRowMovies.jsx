import React from "react";
import '../assets/css/app.css'

function ContentRowMovies(props) {
  return (
    <>
      <div className="col-md-4 mb-4">
          <div className={'card ${props.colorDeBorde} shadow h-100 py-2'}>
            <div className="card-body">
              {props.colorDeBorde}
              <div className="row no-gutters align-items-center">
                <div className="col mr-2">
                  <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                    {props.titulo}
                  </div>
                  <div className="h5 mb-0 font-weight-bold text-gray-800">{props.cifra}</div>
                </div>
                <div className="col-auto">
                  <i className="fas {props.icono} fa-2x text-gray-300" />
                </div>
              </div>
            </div>
          </div>
        </div>
    </>
  )
}

export default ContentRowMovies