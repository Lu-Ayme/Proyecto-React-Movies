import React from 'react';
import PropTypes from 'prop-types';

function ChartRow(props) {
    return (
        <tr>
            <td>{props.title}</td>
            <td>{props.length}</td>
            <td>{props.rating}</td>

            <td>
                <ul>
                    <li>{props.genre?.name || 'No tiene categoría' }</li>
                </ul>
            </td>
            <td>{props.awards}</td>
        </tr>
    )
}

ChartRow.propTypes = {
    title: PropTypes.string,
    rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
    length: PropTypes.number.isRequired,
    genres: PropTypes.arrayOf(PropTypes.string).isRequired,
    awards: PropTypes.number.isRequired,
}


ChartRow.defaultProps = {
    title: 'nada',
    rating: '0',
    length: '0',
    genres: [],
    awards: '0'
}




export default ChartRow;