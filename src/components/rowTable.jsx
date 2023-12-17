import React from "react";
import PropTypes from 'prop-types';


function RowTable(props) {
  return (
    <tr>
      <td>{props.title}</td>
      <td>{props.length}</td>
      <td>{props.rating}</td>
      <td>
        <ul>
          {props.genres.map((genre, i)=>{
            return (<li key={i}>{genre}</li>)
          })}
        </ul>
      </td>
      <td>{props.awards}</td>
    </tr>
  );
}

//definir tipos de datos de nuestras props
RowTable.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.oneOfType([ PropTypes.number, PropTypes.string ]).isRequired,
    length: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    awards: PropTypes.number.isRequired,
}


//definir valores por defecto de nuestras props
RowTable.defaultProps = {
    title: 'nada',
    rating: '0',
    length: '0',
    genres: [],
    awards: '0'
}


export default RowTable;