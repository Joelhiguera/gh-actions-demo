import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>Joel Higuera</h1>
      {props.children}
    </header>
  )
}

export default Header