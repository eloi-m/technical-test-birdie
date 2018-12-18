import React from 'react';

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


const TITLE_STYLE = {
  ...ELEMENT_STYLE,
  alignItems: 'center',
  justifyContent: 'flex-start',
};

const NAME_STYLE = {
  ...ELEMENT_STYLE,
  alignItems: 'center',
  justifyContent: 'flex-end',
};


// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {

  render() {
    return (
      <div style={CONTAINER_STYLE}>
        <div style={TITLE_STYLE}>
          <div>
            <div style= {{fontWeight:"bold", marginLeft: '15px'}}>
              Technical test Birdie
            </div>
          </div>
        </div>
        <div style={NAME_STYLE}>
          <div style={{ marginRight: '15px' }}>
            Eloi Muratet
          </div>
        </div>
      </div>
    );
  }
}

export default Header;

