import React from 'react';
// import Clock from './Clock.js';

const CONTAINER_STYLE = {
  height: '50px',
  display: 'flex',
  alignContent: 'center',
  justifyContent: 'space-between',
  backgroundColor: '#222',
  width: '100%',
  position: 'fixed',
  top: '0px',
  left: '0px',
  zIndex: '100',
};

const ELEMENT_STYLE = {
  color: 'white',
  display: 'flex',
  flex: '1',
  alignItems: 'center',
};

const LOGO_CONTAINER_STYLE = {
  ...ELEMENT_STYLE,
};

const CLOCK_STYLE = {
  ...ELEMENT_STYLE,
  alignItems: 'center',
  justifyContent: 'center',
};

const VERSION_STYLE = {
  ...ELEMENT_STYLE,
  alignItems: 'center',
  justifyContent: 'flex-end',
};


// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  state = {users: []}

  render() {
    return (
      <div style={CONTAINER_STYLE}>
        <div style={LOGO_CONTAINER_STYLE}>
          <a href="#" />
        </div>
        <div style={CLOCK_STYLE}>
          <div className="App">
            <h1>Users</h1>
          </div>
        </div>
        <div style={VERSION_STYLE}>
          <div style={{ marginRight: '15px' }}>
            Test
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

