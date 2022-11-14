import React from "react";
import PropTypes from 'prop-types'

function Header({ text,bgColor,textColor}) {
  const headerStyle = {
    backgroundColor: bgColor,
    color: textColor,
  }
  return (
    <header style={headerStyle}>
      <div className='container'>
        <h2>{text}</h2>
      </div>
    </header>
  ); 
}
Header.defaultProps = {
  text: 'FeedBack',
  bgColor: 'blue',
  textColor: 'red',
}
// eslint-disable-next-line react/no-typos
Header.propTypes = {
  text: PropTypes.string,
  bgColor: PropTypes.string,
  textColor: PropTypes.string,
}
export default Header;
