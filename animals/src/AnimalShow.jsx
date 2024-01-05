import PropTypes from 'prop-types';

function AnimalShow({ type }) {
    return (<div>{type}</div>);
}

AnimalShow.propTypes = {
    type: PropTypes.string
}

export default AnimalShow;