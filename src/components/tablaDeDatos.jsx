import React from "react";
import RowTable from "./rowTable";

const peliculas = [
  {
    title: "El Rey Leon",
    length: 180,
    rating: 10,
    genres: ["Aventura", "Comedia"],
    awards: 10,
  },
  {
    title: "Titanic",
    length: 200,
    rating: 10,
    genres: ["Drama"],
    awards: 10,
  },
  {
    title: "Saw",
    length: 200,
    rating: 10,
    genres: ["Terror"],
    awards: 10,
  },
  {
    title: "Saw 2",
    length: 220,
    rating: 10,
    genres: ["Terror"],
    awards: 10,
  }, {
    title: "Billy Elliot",
    length: 123,
    rating: 5,
    genres: ["Drama", "Comedia"],
    awards:2,
  }, {
    title: "Alicia en el país de las maravillas",
    length: 142,
    rating: 4.8,
    genres: ["Drama", "Acción", "Comedia"],
    awards: 3,
  }
];
function Table() {
  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <div className="table-responsive">
          <table
            className="table table-bordered"
            id="dataTable"
            width="100%"
            cellSpacing="0"
          >
            <thead>
              <tr>
                <th>Titulo</th>
                <th>Duración</th>
                <th>Rating</th>
                <th>Género</th>
                <th>Premios</th>
              </tr>
            </thead>
            <tfoot>
              <tr>
                <th>Titulo</th>
                <th>Duración</th>
                <th>Rating</th>
                <th>Género</th>
                <th>Premios</th>
              </tr>
            </tfoot>
            <tbody>
              {peliculas.map((pelicula, i) => (
                <RowTable
                  key={i}
                  title={pelicula.title}
                  length={pelicula.length}
                  rating={pelicula.rating}
                  genres={pelicula.genres}
                  awards={pelicula.awards}
                />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default Table;
