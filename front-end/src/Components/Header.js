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

const RESET_CSS_STYLE = {
  color: 'white',
  textDecoration: 'none',
};

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    const { config } = this.props;
    return (
      <div style={CONTAINER_STYLE}>
        <div style={TITLE_STYLE}>
          <div>
            <div style={{ fontWeight: 'bold', marginLeft: '15px' }}>
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <a href="#" style={RESET_CSS_STYLE}>
                Technical test Birdie
              </a>
            </div>
          </div>
        </div>
        <div style={NAME_STYLE}>
          <a href={config.linkToMyLinkedin} style={RESET_CSS_STYLE} target="_blank">
            <div style={{ marginRight: '15px' }}>
              {config.name}
            </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Header;
