import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const styles = {
    backgroundColor: props.cardColor,
    height: props.height,
    width: props.width,
  };

  return <div style={styles}></div>;
}

//https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes

Card.propTypes = {
  cardColor: PropTypes.oneOf(['red', 'blue', 'green', 'purple']).isRequired,

  //cardColor: PropTypes.string.isRequired,
  height: PropTypes.number.isRequired,
};

Card.defaultProps = {
  height: 100,
  width: 100,
};

export default Card;
